import clothesImg from '@assets/stock_images/clothing_rack_store_2cb0dae6.jpg';
import beautyImg from '@assets/stock_images/makeup_beauty_produc_1f233721.jpg';
import laptopImg from '@assets/stock_images/modern_laptop_on_des_32582968.jpg';
import shoesImg from '@assets/stock_images/running_shoes_89f538d1.jpg';
import watchImg from '@assets/stock_images/smartwatch_on_wrist_c4bee7dc.jpg';
import phoneImg from '@assets/stock_images/latest_smartphone_80f6dca8.jpg';
import banner1 from '@assets/stock_images/ecommerce_sale_banne_8252c66c.jpg';
import banner2 from '@assets/stock_images/ecommerce_sale_banne_f1b59bbe.jpg';
import banner3 from '@assets/stock_images/ecommerce_sale_banne_a4f798fb.jpg';

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  soldCount: number;
  reviewsCount: number;
  image: string;
  category: string;
  brand: string;
  isMall?: boolean;
  isFlashSale?: boolean;
  badges?: string[];
  description?: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
}

export const CAROUSEL_SLIDES = [
  { id: 1, image: banner1, title: "Super Sale" },
  { id: 2, image: banner2, title: "New Arrivals" },
  { id: 3, image: banner3, title: "Best Deals" },
];

export const CATEGORIES: Category[] = [
  { id: 'clothes', name: 'Clothes', image: clothesImg },
  { id: 'beauty', name: 'Beauty', image: beautyImg },
  { id: 'laptops', name: 'Laptops', image: laptopImg },
  { id: 'shoes', name: 'Shoes', image: shoesImg },
  { id: 'smartwatch', name: 'Smartwatch', image: watchImg },
  { id: 'phones', name: 'Mobile Phones', image: phoneImg },
  { id: 'electronics', name: 'Electronics', image: laptopImg }, // reused
  { id: 'home', name: 'Home & Living', image: clothesImg }, // reused
  { id: 'sports', name: 'Sports', image: shoesImg }, // reused
  { id: 'automotive', name: 'Automotive', image: watchImg }, // reused
];

const BRANDS = ['Apple', 'Samsung', 'Xiaomi', 'Nike', 'Adidas', 'L\'Oreal', 'Sony', 'Dell'];

export const PRODUCTS: Product[] = Array.from({ length: 50 }).map((_, i) => {
  const category = CATEGORIES[i % CATEGORIES.length];
  const price = Math.floor(Math.random() * 100000) + 500;
  const originalPrice = Math.floor(price * (1 + Math.random() * 0.5));
  
  return {
    id: `prod-${i + 1}`,
    name: `${category.name} Item ${i + 1} - High Quality Premium Product`,
    price,
    originalPrice,
    rating: 4 + Math.random(),
    soldCount: Math.floor(Math.random() * 5000),
    reviewsCount: Math.floor(Math.random() * 500),
    image: category.image,
    category: category.id,
    brand: BRANDS[i % BRANDS.length],
    isMall: Math.random() > 0.7,
    isFlashSale: Math.random() > 0.8,
    badges: Math.random() > 0.5 ? ['Free Delivery'] : [],
    description: "Experience premium quality with this amazing product. Designed for durability and performance, it meets all your expectations. Shop now and enjoy exclusive deals."
  };
});

export const FLASH_SALE_PRODUCTS = PRODUCTS.filter(p => p.isFlashSale).slice(0, 6);
export const JUST_FOR_YOU_PRODUCTS = PRODUCTS.slice(0, 20);
