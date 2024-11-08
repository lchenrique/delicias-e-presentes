export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  categoryId: string;
  stock: number;
  createdAt: Date;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
}

export interface Address {
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  status: 'pending' | 'paid' | 'shipped' | 'delivered';
  total: number;
  shippingAddress: Address;
  paymentId: string;
  createdAt: Date;
}

export interface User {
  id: string;
  email: string;
  name: string;
  addresses: Address[];
  orders: Order[];
}