import { useState } from "react";
import { Mail, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export function BlogSubscribe() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call - replace with actual subscription logic
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    setIsSubscribed(true);
    setEmail("");
    
    toast({
      title: "Successfully subscribed!",
      description: "You'll receive our latest insights directly in your inbox.",
    });
  };

  return (
    <section className="py-16 bg-section-primary">
      <div className="container-narrow">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-6">
            <Mail className="w-7 h-7 text-primary" />
          </div>
          
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Stay Ahead of the Curve
          </h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to our newsletter for the latest packaging procurement insights, 
            EPR updates, and industry best practices delivered to your inbox.
          </p>

          {isSubscribed ? (
            <div className="flex items-center justify-center gap-3 p-4 bg-accent/10 rounded-lg">
              <CheckCircle className="w-6 h-6 text-accent" />
              <span className="text-foreground font-medium">
                Thanks for subscribing! Check your inbox to confirm.
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 px-4 bg-card border-border/50 focus:border-primary"
                disabled={isLoading}
              />
              <Button
                type="submit"
                variant="hero"
                className="h-12 px-6"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  "Subscribe"
                )}
              </Button>
            </form>
          )}

          <p className="text-xs text-muted-foreground mt-4">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
}
