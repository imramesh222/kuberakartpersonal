import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-[#2E2E54] text-white pt-12 pb-6 mt-auto">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Customer Care</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">How to Buy</a></li>
              <li><a href="#" className="hover:underline">Returns & Refunds</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Daroz</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:underline">About Daroz</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Daroz Blog</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Payment Methods</h3>
            <div className="flex gap-2 flex-wrap">
              <div className="bg-white text-black text-xs font-bold px-2 py-1 rounded">VISA</div>
              <div className="bg-white text-black text-xs font-bold px-2 py-1 rounded">MasterCard</div>
              <div className="bg-white text-black text-xs font-bold px-2 py-1 rounded">COD</div>
              <div className="bg-white text-black text-xs font-bold px-2 py-1 rounded">eSewa</div>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary">Facebook</a>
              <a href="#" className="hover:text-primary">Twitter</a>
              <a href="#" className="hover:text-primary">Instagram</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Daroz. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
