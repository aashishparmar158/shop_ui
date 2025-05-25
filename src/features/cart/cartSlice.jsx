import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [
    {
      id: 1,
      description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque doloribus perferendis, magnam maiores  aliquid, illo, tempora voluptatum laboriosam.",
      title: "Lunar Backpack",
      image: "../src/assets/images/whiteBackpack.jpg",
      price: 79.99,
      shipping:10,
      quantity: 1,
    },
    {
      id: 2,
      description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque doloribus perferendis, magnam maiores  aliquid, illo, tempora voluptatum laboriosam.",
      title: "Nebula Sneakers",
      image: "../src/assets/images/nebulaSneakers.jpg",
      price: 23.99,
      shipping:17,
      quantity: 1,
    },
    {
      id: 3,
      description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque doloribus perferendis, magnam maiores  aliquid, illo, tempora voluptatum laboriosam.",
      title: "Lunar Jacket",
      image: "../src/assets/images/jacketOriginal.jpg",
      price: 79.99,
      shipping:20,
      quantity: 1,
    },
    {
      id: 4,
      description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque doloribus perferendis, magnam maiores  aliquid, illo, tempora voluptatum laboriosam.",
      title: "Galactic Watch",
      image: "../src/assets/images/galacticWatch.avif",
      price: 59.99,
      shipping:30,
      quantity: 1,
    }
  ], // or include dummy items for testing
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const { id, ...rest } = action.payload;
      const existing = state.cartItems.find(item => item.id === id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.cartItems.push({ id, ...rest, quantity: 1 });
      }
    },
    removeItem(state, action) {
      const itemIndex = state.cartItems.findIndex(item => item.id === action.payload);
      if (itemIndex !== -1) {
        if (state.cartItems[itemIndex].quantity > 1) {
          state.cartItems[itemIndex].quantity -= 1;
        } else {
          state.cartItems.splice(itemIndex, 1);
        }
      }
    },
    deleteItemCompletely(state, action) {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },
    clearCart(state) {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
