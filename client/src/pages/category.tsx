import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/ui/product-card";
import { PRODUCTS, CATEGORIES } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useRoute } from "wouter";
import { ListFilter, Grid3X3, Star, ChevronDown, ChevronRight } from "lucide-react";
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";

export function CategoryPage() {
  const [match, params] = useRoute("/category/:id");
  const routeId = params?.id || 'all';
  
  // Parse the category and subcategory from route (e.g., "electronics" or "electronics-mobiles")
  const [category, subcategory] = routeId.includes('-') 
    ? [routeId.split('-')[0], routeId.split('-').slice(1).join('-')]
    : [routeId, null];

  const categoryData = CATEGORIES.find(c => c.id === category);
  const categoryName = categoryData?.name || 'All Products';
  
  // State for filters
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(150000);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(category && category !== 'all' ? category : null);

  // Get all unique brands
  const allBrands = Array.from(new Set(PRODUCTS.map(p => p.brand))).sort();

  // Filter products based on all criteria
  const displayProducts = useMemo(() => {
    let filtered = PRODUCTS;

    // Filter by category and subcategory
    if (category && category !== 'all') {
      filtered = filtered.filter(p => p.category === category);
      if (subcategory) {
        filtered = filtered.filter(p => p.subcategory === subcategory);
      }
    }

    // Filter by selected brands
    if (selectedBrands.length > 0) {
      filtered = filtered.filter(p => selectedBrands.includes(p.brand));
    }

    // Filter by price range
    filtered = filtered.filter(p => p.price >= minPrice && p.price <= maxPrice);

    // Filter by rating
    if (selectedRating) {
      filtered = filtered.filter(p => Math.floor(p.rating) >= selectedRating);
    }

    return filtered;
  }, [category, subcategory, selectedBrands, minPrice, maxPrice, selectedRating]);

  const toggleBrand = (brand: string) => {
    setSelectedBrands(current =>
      current.includes(brand)
        ? current.filter(b => b !== brand)
        : [...current, brand]
    );
  };

  const handlePriceFilter = () => {
    // Filter is applied immediately via useMemo
  };

  const displayCategoryName = subcategory 
    ? categoryData?.subcategories.find(s => s.id === subcategory)?.name || categoryName
    : categoryName;

  return (
    <Layout>
      <div className="px-4 md:px-8 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <aside className="w-full md:w-72 shrink-0 space-y-6 hidden md:block">
            {/* Category Hierarchy */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-bold text-sm mb-3">Categories</h3>
              <div className="space-y-1">
                {CATEGORIES.map(cat => (
                  <div key={cat.id}>
                    <button
                      onClick={() => setExpandedCategory(expandedCategory === cat.id ? null : cat.id)}
                      className={cn(
                        "w-full flex items-center justify-between px-2 py-2 text-sm rounded hover:bg-gray-50 transition-colors",
                        category === cat.id && !subcategory && "bg-primary/10 text-primary font-medium"
                      )}
                    >
                      <span>{cat.name}</span>
                      <ChevronRight className={cn("w-4 h-4 transition-transform", expandedCategory === cat.id && "rotate-90")} />
                    </button>
                    
                    {/* Subcategories */}
                    {expandedCategory === cat.id && (
                      <div className="ml-4 space-y-1 mt-1">
                        {cat.subcategories.map(subcat => (
                          <button
                            key={subcat.id}
                            onClick={() => {
                              // Navigate to category-subcategory
                              window.location.href = `/category/${cat.id}-${subcat.id}`;
                            }}
                            className={cn(
                              "w-full text-left px-2 py-2 text-xs rounded hover:bg-gray-50 transition-colors",
                              category === cat.id && subcategory === subcat.id && "bg-primary/10 text-primary font-medium"
                            )}
                          >
                            {subcat.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Brand Filter */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-bold text-sm mb-3">Brand</h3>
              <div className="space-y-2">
                {allBrands.map(brand => (
                  <div key={brand} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`brand-${brand}`}
                      checked={selectedBrands.includes(brand)}
                      onCheckedChange={() => toggleBrand(brand)}
                    />
                    <label htmlFor={`brand-${brand}`} className="text-sm text-gray-600 leading-none cursor-pointer">
                      {brand}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-bold text-sm mb-3">Price Range</h3>
              <div className="space-y-2">
                <div className="flex gap-2">
                  <Input 
                    type="number" 
                    placeholder="Min" 
                    value={minPrice}
                    onChange={(e) => setMinPrice(Number(e.target.value))}
                    className="h-8 text-xs" 
                  />
                  <Input 
                    type="number" 
                    placeholder="Max" 
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="h-8 text-xs" 
                  />
                </div>
                <div className="text-xs text-gray-500">
                  Rs. {minPrice.toLocaleString()} - Rs. {maxPrice.toLocaleString()}
                </div>
              </div>
            </div>

            {/* Rating Filter */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-bold text-sm mb-3">Rating</h3>
              <div className="space-y-2">
                {[5, 4, 3].map(stars => (
                  <button
                    key={stars}
                    onClick={() => setSelectedRating(selectedRating === stars ? null : stars)}
                    className={cn(
                      "w-full flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-50 transition-colors",
                      selectedRating === stars && "bg-primary/10"
                    )}
                  >
                    <div className="flex text-yellow-400 gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={cn("w-3 h-3", i < stars ? 'fill-current' : 'text-gray-200 fill-gray-200')} />
                      ))}
                    </div>
                    <span className="text-xs text-gray-600">& Up</span>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-lg shadow-sm">
              <div>
                <h1 className="text-lg font-bold text-gray-800">{displayCategoryName}</h1>
                <p className="text-xs text-gray-500">{displayProducts.length} items found</p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>Sort By:</span>
                  <select className="border border-gray-200 rounded px-2 py-1 text-sm focus:outline-none focus:border-primary">
                    <option>Best Match</option>
                    <option>Price Low to High</option>
                    <option>Price High to Low</option>
                    <option>Newest</option>
                    <option>Highest Rated</option>
                  </select>
                </div>
                <div className="flex items-center border border-gray-200 rounded overflow-hidden">
                  <button className="p-2 bg-primary text-white"><Grid3X3 className="w-4 h-4" /></button>
                  <button className="p-2 hover:bg-gray-50"><ListFilter className="w-4 h-4" /></button>
                </div>
              </div>
            </div>

            {displayProducts.length > 0 ? (
              <>
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
              </>
            ) : (
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <p className="text-gray-500">No products found matching your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
