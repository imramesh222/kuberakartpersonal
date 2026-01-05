// API base configuration
const API_BASE_URL = 'http://localhost:8000/api'; // Update this with your Django backend URL

export const apiConfig = {
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  timeout: 10000, // 10 seconds
  withCredentials: true, // Important for cookies/sessions
};

// Helper function to handle API responses
const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.detail || 'Something went wrong');
  }
  return response.json();
};

// Generic API request function
export const apiRequest = async (endpoint: string, options: RequestInit = {}) => {
  const url = `${apiConfig.baseURL}${endpoint}`;
  
  const defaultHeaders = {
    ...apiConfig.headers,
    ...(options.headers || {}),
  };

  try {
    const response = await fetch(url, {
      ...options,
      headers: defaultHeaders,
      credentials: 'include', // Important for cookies/sessions
    });

    return handleResponse(response);
  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
};

// Auth API
export const authApi = {
  login: async (email: string, password: string) => {
    return apiRequest('/auth/jwt/create/', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  },
  
  register: async (userData: any) => {
    return apiRequest('/auth/users/', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  },
  
  getCurrentUser: async () => {
    return apiRequest('/auth/users/me/');
  },
};

// Products API
export const productsApi = {
  getProducts: async (params = {}) => {
    const queryString = new URLSearchParams(params as any).toString();
    return apiRequest(`/products/${queryString ? `?${queryString}` : ''}`);
  },
  
  getProduct: async (id: string) => {
    return apiRequest(`/products/${id}/`);
  },
};

// Cart API
export const cartApi = {
  getCart: async () => {
    return apiRequest('/orders/cart/');
  },
  
  addToCart: async (productId: string, quantity: number = 1) => {
    return apiRequest('/orders/cart/add_item/', {
      method: 'POST',
      body: JSON.stringify({
        product_id: productId,
        quantity,
      }),
    });
  },
  
  updateCartItem: async (itemId: string, quantity: number) => {
    return apiRequest(`/orders/cart/items/${itemId}/`, {
      method: 'PATCH',
      body: JSON.stringify({ quantity }),
    });
  },
  
  removeFromCart: async (itemId: string) => {
    return apiRequest(`/orders/cart/items/${itemId}/`, {
      method: 'DELETE',
    });
  },
};

// Orders API
export const ordersApi = {
  getOrders: async () => {
    return apiRequest('/orders/orders/');
  },
  
  createOrder: async (cartId: string) => {
    return apiRequest('/orders/orders/', {
      method: 'POST',
      body: JSON.stringify({ cart_id: cartId }),
    });
  },
  
  cancelOrder: async (orderId: string) => {
    return apiRequest(`/orders/orders/${orderId}/cancel/`, {
      method: 'POST',
    });
  },
};

export default {
  auth: authApi,
  products: productsApi,
  cart: cartApi,
  orders: ordersApi,
};
