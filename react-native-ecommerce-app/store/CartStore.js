// Zustand Package
import { create } from "zustand"

// AsyncStorage Package
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useCartStore = create((set) => ({
  cart: [],
  loadCart: async () => {
    try {
      const cartData = await AsyncStorage.getItem('cart');
      if (cartData) {
        set({ cart: JSON.parse(cartData) });
      }
    } catch (error) {
      console.error('Error loading cart from AsyncStorage:', error);
    }
  },
  addToCart: (product) =>
    set((state) => {
      const updatedCart = state.cart.some((item) => item.id === product.id)
        ? state.cart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          )
        : [...state.cart, { ...product, quantity: 1 }];

      AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }),
    updateQuantity: (productId, quantity) =>
    set((state) => {
      const updatedCart = state.cart.map((product) =>
        product.id === productId ? { ...product, quantity } : product
      );

      AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }),
    removeFromCart: (productId) =>
    set((state) => {
      const updatedCart = state.cart.filter((product) => product.id !== productId);
      AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }),

    clearCart: () =>
      set((state) => {
        AsyncStorage.removeItem('cart');
        return { cart: [] };
      }),
}));