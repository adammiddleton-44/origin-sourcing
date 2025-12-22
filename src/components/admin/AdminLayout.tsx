import { useEffect, useState, lazy, Suspense } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useMFA } from '@/hooks/useMFA';
import { RefreshCcw } from 'lucide-react';
import { AdminSidebar } from './AdminSidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

const AdminMFAVerify = lazy(() => import('@/pages/admin/AdminMFAVerify'));

export const AdminLayout = () => {
  const { user, loading, isAdmin } = useAuth();
  const { loading: mfaLoading, hasVerifiedFactor, needsMFAVerification, refetch } = useMFA();
  const navigate = useNavigate();
  const [mfaVerified, setMfaVerified] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    } else if (!loading && user && !isAdmin) {
      navigate('/');
    }
  }, [user, loading, isAdmin, navigate]);

  const handleMFAVerified = () => {
    setMfaVerified(true);
    refetch();
  };

  if (loading || mfaLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <RefreshCcw className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user || !isAdmin) {
    return null;
  }

  // If user has MFA enabled but hasn't verified this session, show verification screen
  if (hasVerifiedFactor && needsMFAVerification && !mfaVerified) {
    return (
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center bg-background">
          <RefreshCcw className="h-8 w-8 animate-spin text-primary" />
        </div>
      }>
        <AdminMFAVerify onVerified={handleMFAVerified} />
      </Suspense>
    );
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-muted/30">
        <AdminSidebar />
        <main className="flex-1 flex flex-col">
          <header className="h-14 border-b bg-background flex items-center px-4 gap-4">
            <SidebarTrigger />
            <h1 className="text-lg font-semibold text-foreground">Admin Dashboard</h1>
          </header>
          <div className="flex-1 p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};
