-- Drop the misconfigured "Service role can read submissions" policy
DROP POLICY IF EXISTS "Service role can read submissions" ON public.contact_submissions;

-- Create a rate limiting function to prevent spam
CREATE OR REPLACE FUNCTION public.check_contact_submission_rate_limit()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  submission_count INTEGER;
BEGIN
  -- Check submissions from the same email in the last 24 hours
  SELECT COUNT(*) INTO submission_count
  FROM public.contact_submissions
  WHERE email = NEW.email
    AND created_at > NOW() - INTERVAL '24 hours';
  
  -- Allow maximum 5 submissions per email per day
  IF submission_count >= 5 THEN
    RAISE EXCEPTION 'Rate limit exceeded. Please try again later.';
  END IF;
  
  RETURN NEW;
END;
$$;

-- Create trigger for rate limiting
DROP TRIGGER IF EXISTS contact_submission_rate_limit ON public.contact_submissions;
CREATE TRIGGER contact_submission_rate_limit
  BEFORE INSERT ON public.contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION public.check_contact_submission_rate_limit();