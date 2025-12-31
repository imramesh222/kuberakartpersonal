import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/ui/product-card";
import { PRODUCTS, CATEGORIES } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { useRoute } from "wouter";
import { ListFilter, Grid3X3, Star } from "lucide-react";
import { useState } from "react";

export function CategoryPage() {
  const [match, params] = useRoute("/category/:id");
  const categoryId = params?.id || 'all';
  const categoryName = CATEGORIES.find(c => c.id === categoryId)?.name || 'All Products';
  const displayProducts = categoryId === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === categoryId);

  const [priceRange, setPriceRange] = useState([0, 150000]);

  return (
    <Layout>
      <div className="px-4 md:px-8 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <aside className="w-full md:w-64 shrink-0 space-y-6 hidden md:block">
            {/* Related Categories */}
            <div className="space-y-3">
              <h3 className="font-bold text-sm">Category</h3>
              <div className="space-y-2">
                {CATEGORIES.slice(0, 5).map(cat => (
                  <div key={cat.id} className="flex items-center space-x-2">
                    <Checkbox id={`cat-${cat.id}`} />
                    <label htmlFor={`cat-${cat.id}`} className="text-sm text-gray-600 leading-none cursor-pointer">
                      {cat.name}
                    </label>
                  </div>
                ))}
                <button className="text-xs text-primary hover:underline">VIEW MORE</button>
              </div>
            </div>

            {/* Brand Filter */}
            <div className="space-y-3">
              <h3 className="font-bold text-sm">Brand</h3>
              <div className="space-y-2">
                {['Samsung', 'Apple', 'Xiaomi', 'Sony', 'Dell'].map(brand => (
                  <div key={brand} className="flex items-center space-x-2">
                    <Checkbox id={`brand-${brand}`} />
                    <label htmlFor={`brand-${brand}`} className="text-sm text-gray-600 leading-none cursor-pointer">
                      {brand}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="space-y-3">
              <h3 className="font-bold text-sm">Price</h3>
              <div className="flex gap-2">
                <Input type="number" placeholder="Min" className="h-8 text-xs" />
                <Input type="number" placeholder="Max" className="h-8 text-xs" />
                <Button size="sm" className="h-8 px-2 bg-primary hover:bg-primary/90"><ListFilter className="w-3 h-3" /></Button>
              </div>
            </div>

            {/* Rating Filter */}
            <div className="space-y-3">
              <h3 className="font-bold text-sm">Rating</h3>
              {[5, 4, 3, 2, 1].map(stars => (
                <div key={stars} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded">
                  <div className="flex text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`w-3 h-3 ${i < stars ? 'fill-current' : 'text-gray-200 fill-gray-200'}`} />
                    ))}
                  </div>
                  <span className="text-xs text-gray-600">And Up</span>
                </div>
              ))}
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-lg shadow-sm">
              <div>
                <h1 className="text-lg font-bold text-gray-800">{categoryName}</h1>
                <p className="text-xs text-gray-500">{displayProducts.length} items found</p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>Sort By:</span>
                  <select className="border border-gray-200 rounded px-2 py-1 text-sm focus:outline-none focus:border-primary">
                    <option>Best Match</option>
                    <option>Price Low to High</option>
                    <option>Price High to Low</option>
                  </select>
                </div>
                <div className="flex items-center border border-gray-200 rounded overflow-hidden">
                  <button className="p-2 bg-primary text-white"><Grid3X3 className="w-4 h-4" /></button>
                  <button className="p-2 hover:bg-gray-50"><ListFilter className="w-4 h-4" /></button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {displayProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="mt-8 flex justify-center gap-2">
              <Button variant="outline" className="w-10 h-10 p-0">1</Button>
              <Button variant="outline" className="w-10 h-10 p-0 bg-primary text-white border-primary hover:bg-primary hover:text-white">2</Button>
              <Button variant="outline" className="w-10 h-10 p-0">3</Button>
              <span className="flex items-center px-2">...</span>
              <Button variant="outline" className="px-4">Next</Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
