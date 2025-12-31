import { Layout } from "@/components/layout/Layout";
import { PRODUCTS, Product } from "@/lib/mockData";
import { useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Star, MapPin, ShieldCheck, Truck, Store, MessageCircle, Share2, Heart } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { ProductCard } from "@/components/ui/product-card";

export function ProductPage() {
  const [match, params] = useRoute("/product/:id");
  const productId = params?.id;
  const product = PRODUCTS.find(p => p.id === productId);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('Black');

  if (!product) return <div>Product not found</div>;

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <Layout>
      <div className="px-4 md:px-8 py-6 space-y-6">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500">
          Home &gt; {product.category} &gt; <span className="text-gray-800">{product.name}</span>
        </div>

        {/* Product Main Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Left: Images */}
            <div className="md:col-span-4 space-y-4">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden relative group">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                {discount > 0 && (
                  <span className="absolute top-4 right-4 bg-yellow-400 text-black text-xs px-2 py-1 rounded font-bold">
                    -{discount}%
                  </span>
                )}
              </div>
              <div className="grid grid-cols-5 gap-2">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className={cn("aspect-square border rounded cursor-pointer overflow-hidden", i === 1 ? "border-primary" : "border-gray-200")}>
                    <img src={product.image} className="w-full h-full object-cover opacity-80 hover:opacity-100" />
                  </div>
                ))}
              </div>
            </div>

            {/* Middle: Info */}
            <div className="md:col-span-5 space-y-6">
              <div>
                <h1 className="text-2xl font-medium text-gray-800 mb-2">{product.name}</h1>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <div className="flex text-yellow-400 text-xs">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={cn("w-3 h-3 fill-current", i >= Math.floor(product.rating) && "text-gray-300 fill-gray-300")} />
                      ))}
                    </div>
                    <span className="text-primary hover:underline cursor-pointer">{product.reviewsCount} Ratings</span>
                  </div>
                  <span className="text-gray-300">|</span>
                  <span className="text-gray-500">{product.soldCount} Sold</span>
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  Brand: <span className="text-primary hover:underline cursor-pointer">{product.brand}</span>
                </div>
              </div>

              <div className="border-t border-b border-gray-100 py-4">
                <div className="text-3xl font-bold text-primary">Rs. {product.price.toLocaleString()}</div>
                {discount > 0 && (
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-gray-400 text-sm line-through">Rs. {product.originalPrice.toLocaleString()}</span>
                    <span className="text-gray-800 text-sm">-{discount}%</span>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-500 mb-2">Color Family</div>
                  <div className="flex gap-2">
                    {['Black', 'White', 'Blue'].map(color => (
                      <button 
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={cn(
                          "px-3 py-1 border rounded text-sm hover:border-primary transition-colors",
                          selectedColor === color ? "border-primary text-primary bg-primary/5" : "border-gray-200"
                        )}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-sm text-gray-500 w-20">Quantity</div>
                  <div className="flex items-center border border-gray-200 rounded">
                    <button 
                      className="px-3 py-1 hover:bg-gray-50 text-gray-500 disabled:opacity-50"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                    >-</button>
                    <span className="w-10 text-center text-sm">{quantity}</span>
                    <button 
                      className="px-3 py-1 hover:bg-gray-50 text-gray-500"
                      onClick={() => setQuantity(quantity + 1)}
                    >+</button>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button className="flex-1 bg-secondary hover:bg-secondary/90 text-white h-12 text-base font-semibold">
                  Buy Now
                </Button>
                <Button 
                  className="flex-1 bg-primary hover:bg-primary/90 text-white h-12 text-base font-semibold"
                  onClick={() => addToCart(product, quantity)}
                >
                  Add to Cart
                </Button>
              </div>
            </div>

            {/* Right: Delivery & Warranty */}
            <div className="md:col-span-3 space-y-4">
              <div className="bg-gray-50 p-4 rounded text-sm space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-gray-500 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="font-medium">Delivery</span>
                  </div>
                  <div className="pl-6 space-y-1">
                    <div className="font-medium">Bagmati, Kathmandu</div>
                    <div className="text-xs text-gray-400">Standard Delivery (2-3 Days)</div>
                    <div className="font-medium">Rs. 83</div>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center gap-2 text-gray-500 mb-2">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="font-medium">Service</span>
                  </div>
                  <div className="pl-6 space-y-1">
                    <div className="text-xs text-gray-400">14 Days Free Returns</div>
                    <div className="text-xs text-gray-400">Warranty not available</div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-100 p-4 rounded text-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Store className="w-4 h-4 text-gray-400" />
                  <div className="flex-1">
                    <div className="font-medium text-primary cursor-pointer hover:underline">Sold by {product.brand} Store</div>
                  </div>
                  <MessageCircle className="w-5 h-5 text-secondary cursor-pointer" />
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div className="text-xs text-gray-400">Positive Seller Ratings</div>
                    <div className="text-lg font-bold text-gray-700">92%</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Ship on Time</div>
                    <div className="text-lg font-bold text-gray-700">100%</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Chat Response</div>
                    <div className="text-lg font-bold text-gray-700">98%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <Tabs defaultValue="details" className="w-full">
            <div className="bg-gray-50 border-b border-gray-100 px-6">
              <TabsList className="bg-transparent h-12 gap-8">
                <TabsTrigger value="details" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 font-medium">Product Details</TabsTrigger>
                <TabsTrigger value="reviews" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 font-medium">Ratings & Reviews</TabsTrigger>
                <TabsTrigger value="qa" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 font-medium">Questions</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="details" className="p-6">
              <div className="prose max-w-none">
                <h3 className="text-lg font-bold mb-4">Description</h3>
                <p className="text-sm text-gray-600 mb-6">{product.description}</p>
                
                <h3 className="text-lg font-bold mb-4">Key Features</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600 mb-6">
                  <li>High quality material build</li>
                  <li>Premium finish and design</li>
                  <li>Durable and long lasting</li>
                  <li>1 year official warranty</li>
                  <li>Compatible with standard accessories</li>
                </ul>

                <h3 className="text-lg font-bold mb-4">What's in the box</h3>
                <p className="text-sm text-gray-600">1x {product.name}, 1x User Manual, 1x Warranty Card</p>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="p-6">
              <div className="flex items-center gap-12 mb-8">
                <div>
                  <div className="text-4xl font-bold text-gray-800 mb-1">4.5<span className="text-lg text-gray-400 font-normal">/5</span></div>
                  <div className="flex text-yellow-400 text-lg">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">{product.reviewsCount} Ratings</div>
                </div>
                {/* Progress bars could go here */}
              </div>
              <div className="space-y-6">
                {[1, 2, 3].map(i => (
                  <div key={i} className="border-b border-gray-100 pb-6 last:border-0">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex text-yellow-400 text-xs">
                        {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                      </div>
                      <span className="text-xs text-gray-400">by User {i}</span>
                      <span className="text-xs text-green-600 flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> Verified Purchase</span>
                    </div>
                    <p className="text-sm text-gray-700">Great product! Really loved the quality and the delivery was super fast. Highly recommended seller.</p>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="qa" className="p-6">
              <div className="space-y-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-lg">Questions about this product ({Math.floor(product.reviewsCount / 3)})</h3>
                  <Button variant="outline" className="text-primary border-primary">Ask Question</Button>
                </div>
                {[1, 2].map(i => (
                  <div key={i} className="space-y-3 pb-6 border-b border-gray-100 last:border-0">
                    <div className="flex gap-2">
                      <span className="w-6 h-6 bg-primary text-white rounded text-xs flex items-center justify-center shrink-0">Q</span>
                      <p className="text-sm font-medium text-gray-800">Is this the original product?</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="w-6 h-6 bg-gray-200 text-gray-600 rounded text-xs flex items-center justify-center shrink-0">A</span>
                      <p className="text-sm text-gray-600">Yes, this is 100% original product with brand warranty.</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Similar Products */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {PRODUCTS.slice(10, 16).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
