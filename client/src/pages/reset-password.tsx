import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Layout } from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";

export default function ResetPasswordPage() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Mock reset request
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      toast({
        title: "Reset link sent",
        description: "Please check your email for instructions.",
      });
    }, 1000);
  };

  return (
    <Layout>
      <div className="container flex items-center justify-center min-h-[70vh] py-10">
        <Card className="w-full max-max-w-md shadow-lg border-2">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Reset Password</CardTitle>
            <CardDescription className="text-center">
              {isSubmitted 
                ? "Check your email for the reset link" 
                : "Enter your email address and we'll send you a link to reset your password"}
            </CardDescription>
          </CardHeader>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="name@example.com" 
                    required 
                    data-testid="input-reset-email"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <Button className="w-full" type="submit" disabled={isLoading} data-testid="button-reset-password">
                  {isLoading ? "Sending..." : "Send Reset Link"}
                </Button>
                <Button variant="ghost" className="w-full" type="button" onClick={() => setLocation("/login")}>
                  Back to Login
                </Button>
              </CardFooter>
            </form>
          ) : (
            <CardContent className="space-y-4 pt-4">
              <p className="text-center text-sm text-muted-foreground">
                If an account exists for that email, you will receive a password reset link shortly.
              </p>
              <Button className="w-full" onClick={() => setLocation("/login")}>
                Return to Login
              </Button>
            </CardContent>
          )}
        </Card>
      </div>
    </Layout>
  );
}
