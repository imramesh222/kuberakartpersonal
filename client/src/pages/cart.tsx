import { Layout } from "@/components/layout/Layout";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { Link } from "wouter";

export function CartPage() {
  const { items, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <Layout>
      <div className="px-4 md:px-8 py-8">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart ({items.length})</h1>
        
        {items.length === 0 ? (
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <p className="text-gray-500 mb-4">Your cart is empty</p>
            <Link href="/">
              <Button className="bg-primary hover:bg-primary/90 text-white">Continue Shopping</Button>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 space-y-4">
              {items.map(item => (
                <div key={item.id} className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800 line-clamp-2">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.brand}</p>
                    <div className="text-primary font-bold mt-1">Rs. {item.price.toLocaleString()}</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-gray-200 rounded">
                      <button 
                        className="px-2 py-1 hover:bg-gray-50"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >-</button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <button 
                        className="px-2 py-1 hover:bg-gray-50"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >+</button>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-500"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="w-full md:w-80 h-fit bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-4">Order Summary</h3>
              <div className="space-y-2 mb-4 border-b border-gray-100 pb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span>Rs. {cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span>Rs. 100</span>
                </div>
              </div>
              <div className="flex justify-between font-bold text-lg mb-6">
                <span>Total</span>
                <span className="text-primary">Rs. {(cartTotal + 100).toLocaleString()}</span>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12">
                PROCEED TO CHECKOUT
              </Button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
