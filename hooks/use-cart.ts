"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  images: string[];
}

interface CartStore {
  items: CartItem[];
  cartTotal: number;
  addItem: (item: Omit<CartItem, "quantity"> & { quantity?: number }) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      cartTotal: 0,
      addItem: (item) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((i) => i.id === item.id);

        if (existingItem) {
          const updatedItems = currentItems.map((i) =>
            i.id === item.id
              ? { ...i, quantity: i.quantity + (item.quantity || 1) }
              : i
          );
          set({
            items: updatedItems,
            cartTotal: calculateTotal(updatedItems),
          });
        } else {
          const newItems = [...currentItems, { ...item, quantity: item.quantity || 1 }];
          set({
            items: newItems,
            cartTotal: calculateTotal(newItems),
          });
        }
      },
      removeItem: (id) => {
        const newItems = get().items.filter((item) => item.id !== id);
        set({
          items: newItems,
          cartTotal: calculateTotal(newItems),
        });
      },
      updateQuantity: (id, quantity) => {
        const newItems = get().items.map((item) =>
          item.id === id ? { ...item, quantity } : item
        );
        set({
          items: newItems,
          cartTotal: calculateTotal(newItems),
        });
      },
      clearCart: () => {
        set({ items: [], cartTotal: 0 });
      },
    }),
    {
      name: "shopping-cart",
    }
  )
);

function calculateTotal(items: CartItem[]): number {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}