import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Search, ShoppingCart, User, Menu, ChevronDown, Heart, X, MessageCircle, Smartphone } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { CATEGORIES } from "@/lib/mockData";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export function Header() {
  const { itemCount } = useCart();
  const [location, setLocation] = useLocation();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    if (location === "/login") {
      setAuthMode('login');
      setShowAuthModal(true);
      // Use a timeout to avoid location update issues during render
      const timer = setTimeout(() => setLocation("/", { replace: true }), 0);
      return () => clearTimeout(timer);
    } else if (location === "/signup") {
      setAuthMode('signup');
      setShowAuthModal(true);
      const timer = setTimeout(() => setLocation("/", { replace: true }), 0);
      return () => clearTimeout(timer);
    }
  }, [location, setLocation]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col w-full sticky top-0 z-50">
      {/* Top Orange Header */}
      <header className="bg-primary py-3 px-4 md:px-8 shadow-sm text-white">
        <div className="container mx-auto flex items-center justify-between gap-4 md:gap-8">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-tight hover:opacity-90">
            KuberaKart
          </Link>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-2xl hidden md:flex relative">
            <Input 
              placeholder="Search in KuberaKart" 
              className="bg-white text-black border-none rounded-r-none h-10 focus-visible:ring-0"
            />
            <Button type="submit" variant="secondary" className="rounded-l-none bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary h-10 px-6 font-semibold">
              <Search className="h-5 w-5" />
            </Button>
          </form>

          {/* Right Actions */}
          <div className="flex items-center gap-4 text-xs md:text-sm font-medium">
            <button 
              onClick={() => { setAuthMode('login'); setShowAuthModal(true); }}
              className="flex items-center gap-1 hover:text-white/80 transition-colors"
            >
              <User className="h-5 w-5 md:hidden" />
              <span className="hidden md:inline">Login</span>
            </button>
            <span className="hidden md:inline">|</span>
            <button 
              onClick={() => { setAuthMode('signup'); setShowAuthModal(true); }}
              className="hidden md:inline hover:text-white/80 transition-colors"
            >
              Sign Up
            </button>
            
            <Link href="/cart" className="relative group">
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-100 hidden md:block">
        <div className="container mx-auto px-4 md:px-8 h-10 flex items-center justify-between text-sm">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 text-primary hover:text-primary/80 font-medium cursor-pointer outline-none">
              <span>Categories</span>
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="start">
              {CATEGORIES.map(cat => (
                <DropdownMenuItem key={cat.id} onClick={() => setLocation(`/category/${cat.id}`)}>
                  {cat.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <Link href="/flash-sale" className="hover:text-primary transition-colors">Flash Sale</Link>
            <Link href="/mall" className="hover:text-primary transition-colors flex items-center gap-1">KuberaKart Mall</Link>
            <Link href="/help" className="hover:text-primary transition-colors">Help & Support</Link>
          </div>
        </div>
      </nav>

      {/* Auth Modal */}
      <Dialog open={showAuthModal} onOpenChange={setShowAuthModal}>
        <DialogContent className="max-w-[400px] p-0 overflow-hidden border-none shadow-2xl rounded-2xl bg-white sm:rounded-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-bottom-[48%] data-[state=open]:slide-in-from-bottom-[48%] sm:data-[state=open]:slide-in-from-bottom-[50%] duration-300">
          <DialogTitle className="sr-only">Authentication</DialogTitle>
          <div className="relative">
            <div className="pt-8 pb-4">
              <h2 className="text-xl font-bold text-center text-[#333]">
                {authMode === 'login' ? 'Login' : 'Sign up'}
              </h2>
            </div>

            <div className="space-y-4 px-6 pb-8">
              <div className="flex gap-2">
                <div className="w-20 h-12 flex items-center justify-center border-2 border-gray-100 rounded-lg bg-white">
                  <img 
                    src="https://flagcdn.com/w40/np.png" 
                    alt="Nepal Flag" 
                    className="w-4 h-4 mr-1"
                  />
                  <span className="font-semibold text-gray-600 text-sm">+977</span>
                </div>
                <div className="flex-1 h-12 border-2 border-gray-100 rounded-lg focus-within:border-primary transition-colors">
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="w-full h-full px-3 outline-none text-gray-700 placeholder:text-gray-400 font-medium text-sm"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>

              {authMode === 'signup' && (
                <div className="flex items-start space-x-2">
                  <Checkbox id="terms" className="mt-1 h-3.5 w-3.5 border-gray-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                  <label htmlFor="terms" className="text-[11px] leading-tight text-gray-400 font-medium">
                    By creating an account, you agree to our{" "}
                    <span className="text-primary hover:underline cursor-pointer">Terms</span> and{" "}
                    <span className="text-primary hover:underline cursor-pointer">Privacy</span>.
                  </label>
                </div>
              )}

              <div className="space-y-3 pt-2">
                <Button className="w-full h-11 bg-[#E88043] hover:bg-[#D66D32] text-white text-sm font-bold rounded-lg flex items-center justify-center gap-2">
                  <div className="bg-white p-0.5 rounded-full">
                    <MessageCircle className="h-4 w-4 text-[#25D366] fill-[#25D366]" />
                  </div>
                  Send code via Whatsapp
                </Button>

                <Button variant="outline" className="w-full h-11 border-[#E88043] text-[#E88043] hover:bg-[#E88043]/5 text-sm font-bold rounded-lg flex items-center justify-center gap-2">
                  <Smartphone className="h-5 w-5" />
                  Send code via SMS
                </Button>
              </div>

              <div className="text-center pt-1">
                <p className="text-xs text-gray-500 font-medium">
                  {authMode === 'login' ? (
                    <>Don't have an account? <button onClick={() => setAuthMode('signup')} className="text-[#3A7BD5] hover:underline font-semibold">Sign up Now</button></>
                  ) : (
                    <>Already have an account? <button onClick={() => setAuthMode('login')} className="text-[#3A7BD5] hover:underline font-semibold">Log in Now</button></>
                  )}
                </p>
              </div>

              <div className="relative py-2">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-100" />
                </div>
                <div className="relative flex justify-center text-[10px] uppercase">
                  <span className="bg-white px-3 text-gray-400 font-bold">Or, {authMode === 'login' ? 'login' : 'sign up'} with</span>
                </div>
              </div>

              <div className="flex justify-center gap-6 pb-2">
                <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                  <img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" alt="Google" className="w-5 h-5" />
                  <span className="text-gray-500 text-xs font-semibold">Google</span>
                </button>
                <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1877F2">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="text-gray-500 text-xs font-semibold">Facebook</span>
                </button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
