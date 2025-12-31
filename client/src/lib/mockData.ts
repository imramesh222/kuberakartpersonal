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
  subcategory?: string;
  subsubcategory?: string;
  brand: string;
  isMall?: boolean;
  isFlashSale?: boolean;
  badges?: string[];
  description?: string;
}

export interface SubSubCategory {
  id: string;
  name: string;
}

export interface SubCategory {
  id: string;
  name: string;
  children?: SubSubCategory[];
}

export interface Category {
  id: string;
  name: string;
  image: string;
  subcategories?: SubCategory[];
}

export const CAROUSEL_SLIDES = [
  { id: 1, image: banner1, title: "Super Sale" },
  { id: 2, image: banner2, title: "New Arrivals" },
  { id: 3, image: banner3, title: "Best Deals" },
];

export const CATEGORIES: Category[] = [
  // Electronics - with nested subcategories
  {
    id: 'electronics',
    name: 'Electronics',
    image: laptopImg,
    subcategories: [
      {
        id: 'mobiles',
        name: 'Mobile Phones',
        children: [
          { id: 'android-phones', name: 'Android Phones' },
          { id: 'iphones', name: 'iPhones' },
          { id: 'budget-phones', name: 'Budget Phones' },
          { id: 'flagship-phones', name: 'Flagship Phones' },
        ]
      },
      {
        id: 'laptops',
        name: 'Laptops',
        children: [
          { id: 'gaming-laptops', name: 'Gaming Laptops' },
          { id: 'ultrabooks', name: 'Ultrabooks' },
          { id: 'workstations', name: 'Workstations' },
          { id: 'budget-laptops', name: 'Budget Laptops' },
        ]
      },
      {
        id: 'tablets',
        name: 'Tablets'
      },
      {
        id: 'accessories',
        name: 'Accessories',
        children: [
          { id: 'covers', name: 'Mobile Covers' },
          { id: 'chargers', name: 'Chargers & Cables' },
          { id: 'tempered-glass', name: 'Tempered Glass' },
          { id: 'power-banks', name: 'Power Banks' },
        ]
      },
      {
        id: 'printers',
        name: 'Printers'
      },
    ]
  },

  // Clothes - with nested subcategories
  {
    id: 'clothes',
    name: 'Clothes & Fashion',
    image: clothesImg,
    subcategories: [
      {
        id: 'mens',
        name: 'Men\'s Clothing',
        children: [
          { id: 'mens-shirts', name: 'Shirts' },
          { id: 'mens-pants', name: 'Pants & Jeans' },
          { id: 'mens-tshirts', name: 'T-Shirts' },
          { id: 'mens-jackets', name: 'Jackets' },
        ]
      },
      {
        id: 'womens',
        name: 'Women\'s Clothing',
        children: [
          { id: 'womens-dresses', name: 'Dresses' },
          { id: 'womens-tops', name: 'Tops' },
          { id: 'womens-sarees', name: 'Sarees' },
          { id: 'womens-jeans', name: 'Jeans & Trousers' },
        ]
      },
      {
        id: 'kids',
        name: 'Kids Clothing',
        children: [
          { id: 'boys-clothing', name: 'Boys Clothing' },
          { id: 'girls-clothing', name: 'Girls Clothing' },
          { id: 'baby-clothes', name: 'Baby Clothes' },
        ]
      },
      {
        id: 'ethnic',
        name: 'Ethnic Wear'
      },
      {
        id: 'activewear',
        name: 'Activewear'
      },
    ]
  },

  // Gadgets - with nested subcategories
  {
    id: 'gadgets',
    name: 'Gadgets & Wearables',
    image: watchImg,
    subcategories: [
      {
        id: 'wearables',
        name: 'Wearables',
        children: [
          { id: 'smartwatches', name: 'Smartwatches' },
          { id: 'fitness-trackers', name: 'Fitness Trackers' },
          { id: 'smart-bands', name: 'Smart Bands' },
        ]
      },
      {
        id: 'audio',
        name: 'Audio',
        children: [
          { id: 'headphones', name: 'Headphones' },
          { id: 'earbuds', name: 'Earbuds' },
          { id: 'speakers', name: 'Speakers' },
          { id: 'neckbands', name: 'Neckbands' },
        ]
      },
      {
        id: 'cameras',
        name: 'Cameras'
      },
      {
        id: 'drones',
        name: 'Drones & RC'
      },
    ]
  },

  // Kitchen - with nested subcategories
  {
    id: 'kitchen',
    name: 'Kitchen & Dining',
    image: beautyImg,
    subcategories: [
      {
        id: 'cookware',
        name: 'Cookware',
        children: [
          { id: 'non-stick', name: 'Non-Stick Cookware' },
          { id: 'stainless-steel', name: 'Stainless Steel' },
          { id: 'cast-iron', name: 'Cast Iron' },
          { id: 'pressure-cookers', name: 'Pressure Cookers' },
        ]
      },
      {
        id: 'appliances',
        name: 'Appliances',
        children: [
          { id: 'blenders', name: 'Blenders & Mixers' },
          { id: 'toasters', name: 'Toasters' },
          { id: 'rice-cookers', name: 'Rice Cookers' },
        ]
      },
      {
        id: 'utensils',
        name: 'Utensils & Tools'
      },
      {
        id: 'dining',
        name: 'Dining & Serveware'
      },
    ]
  },

  // Shoes - with nested subcategories
  {
    id: 'shoes',
    name: 'Shoes & Footwear',
    image: shoesImg,
    subcategories: [
      {
        id: 'mens-shoes',
        name: 'Men\'s Shoes',
        children: [
          { id: 'casual-shoes', name: 'Casual Shoes' },
          { id: 'sports-shoes', name: 'Sports Shoes' },
          { id: 'formal-shoes', name: 'Formal Shoes' },
          { id: 'sandals', name: 'Sandals & Flip-flops' },
        ]
      },
      {
        id: 'womens-shoes',
        name: 'Women\'s Shoes',
        children: [
          { id: 'womens-casual', name: 'Casual Shoes' },
          { id: 'womens-sports', name: 'Sports Shoes' },
          { id: 'heels', name: 'Heels' },
          { id: 'flats', name: 'Flats' },
        ]
      },
      {
        id: 'kids-shoes',
        name: 'Kids Shoes'
      },
      {
        id: 'boots',
        name: 'Boots'
      },
    ]
  },

  // Beauty & Personal Care - with nested subcategories
  {
    id: 'beauty',
    name: 'Beauty & Personal Care',
    image: beautyImg,
    subcategories: [
      {
        id: 'skincare',
        name: 'Skincare',
        children: [
          { id: 'face-wash', name: 'Face Wash' },
          { id: 'moisturizers', name: 'Moisturizers' },
          { id: 'serums', name: 'Serums & Oils' },
          { id: 'sunscreen', name: 'Sunscreen' },
        ]
      },
      {
        id: 'makeup',
        name: 'Makeup',
        children: [
          { id: 'foundation', name: 'Foundation' },
          { id: 'lipstick', name: 'Lipstick & Lip Care' },
          { id: 'eyeshadow', name: 'Eyeshadow & Eyeliner' },
          { id: 'brushes', name: 'Makeup Brushes' },
        ]
      },
      {
        id: 'haircare',
        name: 'Hair Care',
        children: [
          { id: 'shampoo', name: 'Shampoo & Conditioner' },
          { id: 'hair-oil', name: 'Hair Oil' },
          { id: 'treatments', name: 'Hair Treatments' },
        ]
      },
      {
        id: 'perfume',
        name: 'Perfumes & Fragrances'
      },
    ]
  },

  // Home & Living - NO subcategories
  {
    id: 'home',
    name: 'Home & Living',
    image: clothesImg,
  },

  // Sports & Outdoors - with nested subcategories
  {
    id: 'sports',
    name: 'Sports & Outdoors',
    image: shoesImg,
    subcategories: [
      {
        id: 'sports-gear',
        name: 'Sports Gear',
        children: [
          { id: 'cricket', name: 'Cricket' },
          { id: 'badminton', name: 'Badminton' },
          { id: 'football', name: 'Football' },
          { id: 'tennis', name: 'Tennis' },
        ]
      },
      {
        id: 'fitness',
        name: 'Fitness Equipment',
        children: [
          { id: 'yoga-mats', name: 'Yoga Mats' },
          { id: 'dumbbells', name: 'Dumbbells' },
          { id: 'resistance-bands', name: 'Resistance Bands' },
        ]
      },
      {
        id: 'outdoor',
        name: 'Outdoor & Camping'
      },
    ]
  },

  // Books & Media - NO subcategories
  {
    id: 'books',
    name: 'Books & Media',
    image: laptopImg,
  },

  // Toys & Games - with nested subcategories
  {
    id: 'toys',
    name: 'Toys & Games',
    image: watchImg,
    subcategories: [
      {
        id: 'action-figures',
        name: 'Action Figures & Collectibles'
      },
      {
        id: 'board-games',
        name: 'Board Games'
      },
      {
        id: 'learning-toys',
        name: 'Learning Toys',
        children: [
          { id: 'building-blocks', name: 'Building Blocks' },
          { id: 'puzzles', name: 'Puzzles' },
        ]
      },
    ]
  },

  // Automotive - with nested subcategories
  {
    id: 'automotive',
    name: 'Automotive & Accessories',
    image: laptopImg,
    subcategories: [
      {
        id: 'car-accessories',
        name: 'Car Accessories',
        children: [
          { id: 'seat-covers', name: 'Seat Covers' },
          { id: 'floor-mats', name: 'Floor Mats' },
          { id: 'car-care', name: 'Car Care Products' },
        ]
      },
      {
        id: 'bike-accessories',
        name: 'Bike Accessories'
      },
    ]
  },
];

const BRANDS = ['Apple', 'Samsung', 'Xiaomi', 'Nike', 'Adidas', 'L\'Oreal', 'Sony', 'Dell', 'Bosch', 'Philips', 'LG', 'Canon', 'Nikon', 'Puma', 'Reebok', 'Dove', 'Loreal', 'Maybelline'];

// Create products for each category/subcategory/subsubcategory combination
const generateProducts = () => {
  const products: Product[] = [];
  let productId = 1;

  CATEGORIES.forEach(category => {
    if (!category.subcategories || category.subcategories.length === 0) {
      // Category without subcategories - add 15 products
      for (let i = 0; i < 15; i++) {
        const price = Math.floor(Math.random() * 100000) + 500;
        products.push({
          id: `prod-${productId++}`,
          name: `${category.name} Item ${i + 1} - Premium Quality`,
          price,
          originalPrice: Math.floor(price * (1 + Math.random() * 0.5)),
          rating: 3.5 + Math.random() * 1.5,
          soldCount: Math.floor(Math.random() * 5000),
          reviewsCount: Math.floor(Math.random() * 500),
          image: category.image,
          category: category.id,
          brand: BRANDS[Math.floor(Math.random() * BRANDS.length)],
          isMall: Math.random() > 0.7,
          isFlashSale: Math.random() > 0.85,
          badges: Math.random() > 0.6 ? ['Free Delivery'] : [],
        });
      }
    } else {
      // Category with subcategories
      category.subcategories.forEach(subcat => {
        if (!subcat.children || subcat.children.length === 0) {
          // Subcategory without children - add 12 products
          for (let i = 0; i < 12; i++) {
            const price = Math.floor(Math.random() * 100000) + 500;
            products.push({
              id: `prod-${productId++}`,
              name: `${subcat.name} Item ${i + 1} - Premium Quality`,
              price,
              originalPrice: Math.floor(price * (1 + Math.random() * 0.5)),
              rating: 3.5 + Math.random() * 1.5,
              soldCount: Math.floor(Math.random() * 5000),
              reviewsCount: Math.floor(Math.random() * 500),
              image: category.image,
              category: category.id,
              subcategory: subcat.id,
              brand: BRANDS[Math.floor(Math.random() * BRANDS.length)],
              isMall: Math.random() > 0.7,
              isFlashSale: Math.random() > 0.85,
              badges: Math.random() > 0.6 ? ['Free Delivery'] : [],
            });
          }
        } else {
          // Subcategory with children (sub-subcategories)
          subcat.children.forEach(subsubcat => {
            // Add 8 products per sub-subcategory
            for (let i = 0; i < 8; i++) {
              const price = Math.floor(Math.random() * 100000) + 500;
              products.push({
                id: `prod-${productId++}`,
                name: `${subsubcat.name} Item ${i + 1} - Premium Quality`,
                price,
                originalPrice: Math.floor(price * (1 + Math.random() * 0.5)),
                rating: 3.5 + Math.random() * 1.5,
                soldCount: Math.floor(Math.random() * 5000),
                reviewsCount: Math.floor(Math.random() * 500),
                image: category.image,
                category: category.id,
                subcategory: subcat.id,
                subsubcategory: subsubcat.id,
                brand: BRANDS[Math.floor(Math.random() * BRANDS.length)],
                isMall: Math.random() > 0.7,
                isFlashSale: Math.random() > 0.85,
                badges: Math.random() > 0.6 ? ['Free Delivery'] : [],
              });
            }
          });
        }
      });
    }
  });

  return products;
};

export const PRODUCTS = generateProducts();

export const FLASH_SALE_PRODUCTS = PRODUCTS.filter(p => p.isFlashSale).slice(0, 6);
export const JUST_FOR_YOU_PRODUCTS = PRODUCTS.slice(0, 20);
