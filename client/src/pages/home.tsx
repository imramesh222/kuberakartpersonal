import { Layout } from "@/components/layout/Layout";
import { HeroCarousel } from "@/components/home/hero-carousel";
import { ProductCard } from "@/components/ui/product-card";
import { PRODUCTS, FLASH_SALE_PRODUCTS, JUST_FOR_YOU_PRODUCTS, CATEGORIES } from "@/lib/mockData";
import { Link } from "wouter";
import { ChevronRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HomePage() {
  return (
    <Layout>
      <div className="space-y-8 pb-12">
        {/* Carousel Section */}
        <section className="mt-4 px-4 md:px-8">
          <HeroCarousel />
        </section>

        {/* Categories Section */}
        <section className="px-4 md:px-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">Categories</h2>
            <Link href="/category/all" className="text-primary flex items-center text-sm font-medium hover:underline">
              Shop More <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="grid grid-cols-5 md:grid-cols-10 gap-4">
              {CATEGORIES.map((cat) => (
                <Link key={cat.id} href={`/category/${cat.id}`}>
                  <div className="flex flex-col items-center gap-2 group cursor-pointer">
                    <div className="w-20 h-20 rounded-full overflow-hidden border border-gray-100 shadow-sm group-hover:shadow-md transition-all group-hover:scale-105">
                      <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
                    </div>
                    <span className="text-xs text-center font-medium text-gray-700 group-hover:text-primary">
                      {cat.name}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Flash Sale Section */}
        <section className="px-4 md:px-8">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <div className="flex items-center gap-4">
                <h2 className="text-xl font-bold text-primary">Flash Sale</h2>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>Ending in</span>
                  <div className="flex gap-1 text-white font-bold">
                    <span className="bg-primary px-2 py-1 rounded-sm">12</span>:
                    <span className="bg-primary px-2 py-1 rounded-sm">45</span>:
                    <span className="bg-primary px-2 py-1 rounded-sm">30</span>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="text-primary border-primary hover:bg-primary/5">
                SHOP MORE
              </Button>
            </div>
            
            <div className="p-4 grid grid-cols-2 md:grid-cols-6 gap-4">
              {FLASH_SALE_PRODUCTS.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Just For You Section */}
        <section className="px-4 md:px-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Just For You</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {JUST_FOR_YOU_PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} className="border border-gray-100 rounded-lg hover:shadow-lg transition-shadow" />
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Button variant="outline" className="w-64 border-primary text-primary hover:bg-primary/5">
              LOAD MORE
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
}
