import { Link, useLocation } from "wouter";
import { Search, ShoppingCart, User, Menu, ChevronDown, Heart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { CATEGORIES } from "@/lib/mockData";

export function Header() {
  const { itemCount } = useCart();
  const [location, setLocation] = useLocation();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would filter or redirect
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
            <Link href="/login" className="flex items-center gap-1 hover:text-white/80 transition-colors">
              <User className="h-5 w-5 md:hidden" />
              <span className="hidden md:inline">Login</span>
            </Link>
            <span className="hidden md:inline">|</span>
            <Link href="/signup" className="hidden md:inline hover:text-white/80 transition-colors">
              Sign Up
            </Link>
            
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
        
        {/* Mobile Search - Visible only on mobile */}
        <div className="mt-3 md:hidden">
          <form onSubmit={handleSearch} className="flex relative">
            <Input 
              placeholder="Search in KuberaKart" 
              className="bg-white text-black border-none h-9 text-sm"
            />
            <Button type="submit" size="sm" className="absolute right-0 top-0 h-9 bg-transparent hover:bg-transparent text-gray-500">
              <Search className="h-4 w-4" />
            </Button>
          </form>
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
    </div>
  );
}
