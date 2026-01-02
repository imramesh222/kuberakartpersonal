import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Layout } from "@/components/layout/Layout";
import { X, MessageCircle, Smartphone } from "lucide-react";
import { Link } from "wouter";

export default function SignupPage() {
  const [, setLocation] = useLocation();
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <Layout>
      <div className="container flex items-center justify-center min-h-[90vh] py-10">
        <Card className="w-full max-w-[450px] shadow-2xl border-none relative overflow-hidden bg-white">
          <button 
            onClick={() => setLocation("/")}
            className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
          >
            <X className="h-6 w-6 text-gray-400" />
          </button>

          <CardHeader className="pt-12 pb-6">
            <CardTitle className="text-2xl font-bold text-center text-[#333]">Sign up</CardTitle>
          </CardHeader>

          <CardContent className="space-y-6 px-8">
            <div className="flex gap-2">
              <div className="w-24 h-14 flex items-center justify-center border-2 border-gray-200 rounded-lg bg-white">
                <img 
                  src="https://flagcdn.com/w40/np.png" 
                  alt="Nepal Flag" 
                  className="w-5 h-5 mr-1"
                />
                <span className="font-semibold text-gray-700">+977</span>
              </div>
              <div className="flex-1 h-14 border-2 border-gray-200 rounded-lg focus-within:border-primary transition-colors">
                <input
                  type="tel"
                  placeholder="Please enter your phone number"
                  className="w-full h-full px-4 outline-none text-gray-700 placeholder:text-gray-400 font-medium"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox id="terms" className="mt-1 border-gray-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
              <label
                htmlFor="terms"
                className="text-sm leading-tight text-gray-500 font-medium"
              >
                By creating and/or using your account, you agree to our{" "}
                <Link href="/terms" className="text-primary hover:underline">Terms of Use</Link> and{" "}
                <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
              </label>
            </div>

            <div className="space-y-4 pt-4">
              <Button 
                className="w-full h-14 bg-[#E88043] hover:bg-[#D66D32] text-white text-lg font-bold rounded-xl flex items-center justify-center gap-3 transition-all transform active:scale-[0.98]"
                data-testid="button-whatsapp-code"
              >
                <div className="bg-white p-1 rounded-full">
                  <MessageCircle className="h-5 w-5 text-[#25D366] fill-[#25D366]" />
                </div>
                Send code via Whatsapp
              </Button>

              <Button 
                variant="outline"
                className="w-full h-14 border-[#E88043] text-[#E88043] hover:bg-[#E88043]/5 text-lg font-bold rounded-xl flex items-center justify-center gap-3 transition-all transform active:scale-[0.98]"
                data-testid="button-sms-code"
              >
                <Smartphone className="h-6 w-6" />
                Send code via SMS
              </Button>
            </div>

            <div className="text-center pt-2">
              <p className="text-gray-500 font-medium">
                Already have an account?{" "}
                <Link href="/login" className="text-[#3A7BD5] hover:underline font-semibold">Log in Now</Link>
              </p>
            </div>

            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-100" />
              </div>
              <div className="relative flex justify-center text-sm uppercase">
                <span className="bg-white px-4 text-gray-400 font-semibold">Or, sign up with</span>
              </div>
            </div>

            <div className="flex justify-center gap-8 pb-4">
              <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" alt="Google" className="w-6 h-6" />
                <span className="text-gray-600 font-medium">Google</span>
              </button>
              <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_2023.png" alt="Facebook" className="w-6 h-6" />
                <span className="text-gray-600 font-medium">Facebook</span>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
