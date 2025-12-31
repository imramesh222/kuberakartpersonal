import { Product } from "@/lib/mockData";
import { Link } from "wouter";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <Link href={`/product/${product.id}`}>
      <div className={cn(
        "bg-white hover:shadow-lg transition-all duration-200 cursor-pointer group h-full flex flex-col hover:-translate-y-0.5",
        className
      )}>
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          {product.isMall && (
            <span className="absolute top-2 left-2 bg-red-600 text-white text-[10px] px-2 py-0.5 rounded-sm font-bold uppercase tracking-wider z-10">
              Mall
            </span>
          )}
          {discount > 0 && (
            <span className="absolute top-2 right-2 bg-yellow-400 text-black text-[10px] px-1.5 py-0.5 rounded-sm font-bold">
              -{discount}%
            </span>
          )}
        </div>
        
        <div className="p-3 flex flex-col flex-1">
          <h3 className="text-sm text-gray-800 line-clamp-2 mb-2 group-hover:text-primary transition-colors min-h-[40px]">
            {product.name}
          </h3>
          
          <div className="mt-auto space-y-1">
            <div className="text-lg font-bold text-primary">
              Rs. {product.price.toLocaleString()}
            </div>
            {discount > 0 && (
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span className="line-through">Rs. {product.originalPrice.toLocaleString()}</span>
              </div>
            )}
            
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center text-yellow-400 text-xs">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    className={cn(
                      "w-3 h-3 fill-current", 
                      i >= Math.floor(product.rating) ? "text-gray-200 fill-gray-200" : ""
                    )} 
                  />
                ))}
                <span className="text-gray-400 ml-1">({product.reviewsCount})</span>
              </div>
              <span className="text-xs text-gray-500">{product.soldCount} sold</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
