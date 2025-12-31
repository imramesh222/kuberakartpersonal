import { Header } from "./Header";
import { Footer } from "./Footer";
import { CartProvider } from "@/context/CartContext";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-[#F5F5F5] font-sans">
        <Header />
        <main className="flex-1 w-full max-w-[1400px] mx-auto">
          {children}
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}
