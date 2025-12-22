import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { AuthMFAEnrollResponse, AuthMFAGetAuthenticatorAssuranceLevelResponse, Factor } from '@supabase/supabase-js';

export const useMFA = () => {
  const [factors, setFactors] = useState<Factor[]>([]);
  const [currentLevel, setCurrentLevel] = useState<'aal1' | 'aal2' | null>(null);
  const [nextLevel, setNextLevel] = useState<'aal1' | 'aal2' | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchMFAStatus = async () => {
    setLoading(true);
    try {
      const { data: aalData, error: aalError } = await supabase.auth.mfa.getAuthenticatorAssuranceLevel();
      
      if (aalError) {
        console.error('Error fetching AAL:', aalError);
        return;
      }

      setCurrentLevel(aalData?.currentLevel ?? null);
      setNextLevel(aalData?.nextLevel ?? null);

      const { data: factorsData, error: factorsError } = await supabase.auth.mfa.listFactors();
      
      if (factorsError) {
        console.error('Error fetching factors:', factorsError);
        return;
      }

      setFactors(factorsData?.totp ?? []);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMFAStatus();
  }, []);

  const enrollTOTP = async (friendlyName?: string): Promise<AuthMFAEnrollResponse> => {
    const response = await supabase.auth.mfa.enroll({
      factorType: 'totp',
      friendlyName: friendlyName || 'Authenticator App',
    });
    
    if (!response.error) {
      await fetchMFAStatus();
    }
    
    return response;
  };

  const verifyTOTP = async (factorId: string, code: string) => {
    const { data: challengeData, error: challengeError } = await supabase.auth.mfa.challenge({
      factorId,
    });

    if (challengeError) {
      return { error: challengeError };
    }

    const { data, error } = await supabase.auth.mfa.verify({
      factorId,
      challengeId: challengeData.id,
      code,
    });

    if (!error) {
      await fetchMFAStatus();
    }

    return { data, error };
  };

  const unenroll = async (factorId: string) => {
    const { error } = await supabase.auth.mfa.unenroll({ factorId });
    
    if (!error) {
      await fetchMFAStatus();
    }
    
    return { error };
  };

  const hasVerifiedFactor = factors.some(f => f.status === 'verified');
  const needsMFAVerification = currentLevel === 'aal1' && nextLevel === 'aal2';

  return {
    factors,
    currentLevel,
    nextLevel,
    loading,
    hasVerifiedFactor,
    needsMFAVerification,
    enrollTOTP,
    verifyTOTP,
    unenroll,
    refetch: fetchMFAStatus,
  };
};
