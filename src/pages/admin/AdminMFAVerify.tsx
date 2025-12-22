import { useState } from 'react';
import { useMFA } from '@/hooks/useMFA';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Shield, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

interface AdminMFAVerifyProps {
  onVerified: () => void;
}

export default function AdminMFAVerify({ onVerified }: AdminMFAVerifyProps) {
  const { factors, verifyTOTP } = useMFA();
  const [code, setCode] = useState('');
  const [verifying, setVerifying] = useState(false);

  const verifiedFactor = factors.find(f => f.status === 'verified');

  const handleVerify = async () => {
    if (!verifiedFactor || code.length !== 6) return;

    setVerifying(true);
    try {
      const { error } = await verifyTOTP(verifiedFactor.id, code);
      
      if (error) {
        toast.error('Invalid verification code');
        setCode('');
        return;
      }

      toast.success('Verified successfully');
      onVerified();
    } finally {
      setVerifying(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <Shield className="h-6 w-6 text-primary" />
          </div>
          <CardTitle>Two-Factor Authentication</CardTitle>
          <CardDescription>
            Enter the verification code from your authenticator app to continue.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="mfa-code">Verification Code</Label>
            <Input
              id="mfa-code"
              placeholder="Enter 6-digit code"
              value={code}
              onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
              maxLength={6}
              className="text-center text-lg tracking-widest"
              autoFocus
              onKeyDown={(e) => {
                if (e.key === 'Enter' && code.length === 6) {
                  handleVerify();
                }
              }}
            />
          </div>
          <Button 
            onClick={handleVerify} 
            disabled={verifying || code.length !== 6}
            className="w-full"
          >
            {verifying ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
                Verifying...
              </>
            ) : (
              'Verify'
            )}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
