import { useState } from 'react';
import { useMFA } from '@/hooks/useMFA';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Shield, ShieldCheck, ShieldX, Loader2, Trash2, QrCode } from 'lucide-react';
import { toast } from 'sonner';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function AdminMFASetup() {
  const { factors, loading, hasVerifiedFactor, enrollTOTP, verifyTOTP, unenroll } = useMFA();
  const [enrolling, setEnrolling] = useState(false);
  const [qrCode, setQrCode] = useState<string | null>(null);
  const [secret, setSecret] = useState<string | null>(null);
  const [factorId, setFactorId] = useState<string | null>(null);
  const [verificationCode, setVerificationCode] = useState('');
  const [verifying, setVerifying] = useState(false);
  const [unenrolling, setUnenrolling] = useState<string | null>(null);

  const handleEnroll = async () => {
    setEnrolling(true);
    try {
      const { data, error } = await enrollTOTP('Admin Authenticator');
      
      if (error) {
        toast.error('Failed to start enrollment: ' + error.message);
        return;
      }

      if (data && data.type === 'totp') {
        setQrCode(data.totp.qr_code);
        setSecret(data.totp.secret);
        setFactorId(data.id);
      }
    } finally {
      setEnrolling(false);
    }
  };

  const handleVerify = async () => {
    if (!factorId || !verificationCode) return;
    
    setVerifying(true);
    try {
      const { error } = await verifyTOTP(factorId, verificationCode);
      
      if (error) {
        toast.error('Verification failed: ' + error.message);
        return;
      }

      toast.success('Two-factor authentication enabled successfully!');
      setQrCode(null);
      setSecret(null);
      setFactorId(null);
      setVerificationCode('');
    } finally {
      setVerifying(false);
    }
  };

  const handleUnenroll = async (id: string) => {
    setUnenrolling(id);
    try {
      const { error } = await unenroll(id);
      
      if (error) {
        toast.error('Failed to remove 2FA: ' + error.message);
        return;
      }

      toast.success('Two-factor authentication removed.');
    } finally {
      setUnenrolling(null);
    }
  };

  const cancelEnrollment = () => {
    setQrCode(null);
    setSecret(null);
    setFactorId(null);
    setVerificationCode('');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Two-Factor Authentication</h2>
        <p className="text-muted-foreground">Add an extra layer of security to your admin account.</p>
      </div>

      {/* Status Card */}
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          {hasVerifiedFactor ? (
            <ShieldCheck className="h-10 w-10 text-green-500" />
          ) : (
            <ShieldX className="h-10 w-10 text-amber-500" />
          )}
          <div>
            <CardTitle className="flex items-center gap-2">
              2FA Status
              <Badge variant={hasVerifiedFactor ? "default" : "secondary"}>
                {hasVerifiedFactor ? 'Enabled' : 'Disabled'}
              </Badge>
            </CardTitle>
            <CardDescription>
              {hasVerifiedFactor 
                ? 'Your account is protected with two-factor authentication.' 
                : 'Enable 2FA to secure your admin account.'}
            </CardDescription>
          </div>
        </CardHeader>
      </Card>

      {/* Enrolled Factors */}
      {factors.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Enrolled Authenticators</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {factors.map((factor) => (
              <div key={factor.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">{factor.friendly_name || 'Authenticator App'}</p>
                    <p className="text-xs text-muted-foreground">
                      Added {new Date(factor.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={factor.status === 'verified' ? 'default' : 'secondary'}>
                    {factor.status}
                  </Badge>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Remove 2FA?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This will remove two-factor authentication from your account. You can set it up again later.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction 
                          onClick={() => handleUnenroll(factor.id)}
                          disabled={unenrolling === factor.id}
                        >
                          {unenrolling === factor.id ? (
                            <Loader2 className="h-4 w-4 animate-spin mr-2" />
                          ) : null}
                          Remove
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Enrollment Card */}
      {!qrCode && !hasVerifiedFactor && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <QrCode className="h-5 w-5" />
              Set Up Authenticator App
            </CardTitle>
            <CardDescription>
              Use an authenticator app like Google Authenticator, Authy, or 1Password to generate verification codes.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={handleEnroll} disabled={enrolling}>
              {enrolling ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  Setting up...
                </>
              ) : (
                <>
                  <Shield className="h-4 w-4 mr-2" />
                  Enable 2FA
                </>
              )}
            </Button>
          </CardContent>
        </Card>
      )}

      {/* QR Code Enrollment */}
      {qrCode && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Scan QR Code</CardTitle>
            <CardDescription>
              Scan this QR code with your authenticator app, then enter the verification code below.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col items-center gap-4">
              <div className="p-4 bg-white rounded-lg">
                <img src={qrCode} alt="QR Code for 2FA" className="w-48 h-48" />
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Can't scan? Enter this code manually:</p>
                <code className="text-xs bg-muted px-3 py-1.5 rounded font-mono break-all">
                  {secret}
                </code>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="verification-code">Verification Code</Label>
                <Input
                  id="verification-code"
                  placeholder="Enter 6-digit code"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  maxLength={6}
                  className="text-center text-lg tracking-widest"
                />
              </div>
              <div className="flex gap-3">
                <Button 
                  onClick={handleVerify} 
                  disabled={verifying || verificationCode.length !== 6}
                  className="flex-1"
                >
                  {verifying ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                      Verifying...
                    </>
                  ) : (
                    'Verify & Enable'
                  )}
                </Button>
                <Button variant="outline" onClick={cancelEnrollment}>
                  Cancel
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
