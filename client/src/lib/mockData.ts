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
  subcategory: string;
  brand: string;
  isMall?: boolean;
  isFlashSale?: boolean;
  badges?: string[];
  description?: string;
}

export interface SubCategory {
  id: string;
  name: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  subcategories: SubCategory[];
}

export const CAROUSEL_SLIDES = [
  { id: 1, image: banner1, title: "Super Sale" },
  { id: 2, image: banner2, title: "New Arrivals" },
  { id: 3, image: banner3, title: "Best Deals" },
];

export const CATEGORIES: Category[] = [
  {
    id: 'electronics',
    name: 'Electronics',
    image: laptopImg,
    subcategories: [
      { id: 'mobiles', name: 'Mobile Phones' },
      { id: 'laptops', name: 'Laptops' },
      { id: 'tablets', name: 'Tablets' },
      { id: 'covers', name: 'Mobile Covers' },
      { id: 'chargers', name: 'Chargers' },
      { id: 'printers', name: 'Printers' },
    ]
  },
  {
    id: 'clothes',
    name: 'Clothes',
    image: clothesImg,
    subcategories: [
      { id: 'mens', name: 'Men\'s Clothing' },
      { id: 'womens', name: 'Women\'s Clothing' },
      { id: 'kids', name: 'Kids Clothing' },
      { id: 'accessories', name: 'Accessories' },
    ]
  },
  {
    id: 'gadgets',
    name: 'Gadgets',
    image: watchImg,
    subcategories: [
      { id: 'smartwatch', name: 'Smartwatches' },
      { id: 'headphones', name: 'Headphones' },
      { id: 'speakers', name: 'Speakers' },
      { id: 'cameras', name: 'Cameras' },
    ]
  },
  {
    id: 'kitchen',
    name: 'Kitchen',
    image: beautyImg,
    subcategories: [
      { id: 'cookware', name: 'Cookware' },
      { id: 'appliances', name: 'Appliances' },
      { id: 'utensils', name: 'Utensils' },
      { id: 'storage', name: 'Storage' },
    ]
  },
  {
    id: 'shoes',
    name: 'Shoes',
    image: shoesImg,
    subcategories: [
      { id: 'mens-shoes', name: 'Men\'s Shoes' },
      { id: 'womens-shoes', name: 'Women\'s Shoes' },
      { id: 'sports-shoes', name: 'Sports Shoes' },
      { id: 'casual-shoes', name: 'Casual Shoes' },
    ]
  },
  {
    id: 'beauty',
    name: 'Beauty & Personal Care',
    image: beautyImg,
    subcategories: [
      { id: 'skincare', name: 'Skincare' },
      { id: 'makeup', name: 'Makeup' },
      { id: 'haircare', name: 'Hair Care' },
      { id: 'perfume', name: 'Perfumes' },
    ]
  },
];

const BRANDS = ['Apple', 'Samsung', 'Xiaomi', 'Nike', 'Adidas', 'L\'Oreal', 'Sony', 'Dell', 'Bosch', 'Philips'];

const flattenedCategories = CATEGORIES.flatMap(cat =>
  cat.subcategories.map(subcat => ({ category: cat.id, subcategory: subcat.id }))
);

export const PRODUCTS: Product[] = Array.from({ length: 100 }).map((_, i) => {
  const catSubcat = flattenedCategories[i % flattenedCategories.length];
  const catData = CATEGORIES.find(c => c.id === catSubcat.category);
  const price = Math.floor(Math.random() * 100000) + 500;
  const originalPrice = Math.floor(price * (1 + Math.random() * 0.5));
  
  return {
    id: `prod-${i + 1}`,
    name: `Premium Product ${i + 1} - High Quality Item`,
    price,
    originalPrice,
    rating: 3.5 + Math.random() * 1.5,
    soldCount: Math.floor(Math.random() * 5000),
    reviewsCount: Math.floor(Math.random() * 500),
    image: catData?.image || laptopImg,
    category: catSubcat.category,
    subcategory: catSubcat.subcategory,
    brand: BRANDS[i % BRANDS.length],
    isMall: Math.random() > 0.7,
    isFlashSale: Math.random() > 0.8,
    badges: Math.random() > 0.5 ? ['Free Delivery'] : [],
    description: "Experience premium quality with this amazing product. Designed for durability and performance, it meets all your expectations. Shop now and enjoy exclusive deals."
  };
});

export const FLASH_SALE_PRODUCTS = PRODUCTS.filter(p => p.isFlashSale).slice(0, 6);
export const JUST_FOR_YOU_PRODUCTS = PRODUCTS.slice(0, 20);
