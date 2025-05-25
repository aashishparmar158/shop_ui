// redux/slices/productSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: "1",
      name: "Lunar Explorer Jacket",
      price: 149.99,
      description: "Designed for the modern adventurer, this high-performance jacket features space-grade insulation and water resistance.",
      image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQIpAXJIhgo6DFuf920VCi6pHF4_ZybKyvDTBz5qi2M-cSWfZOMAZyYe00lX1jczo-96cp2h1XKnbSsx-yjVRtyJTVDfk2zAzSsA86si8qWYANrZdCIFAwdDXDuP622onmmVUs3XMjnAw&usqp=CAc",
      stock: 15,
      colors: ["#000000", "#ffffff", "#1f1f1f"],
      rating: 4.8,
      brand: "lunAR Gear",
      category: "Apparel",
      discount: 10, // in percentage
    },
    {
      id: "2",
      name: "Zero Gravity Sneakers",
      price: 99.99,
      description: "Experience the ultimate comfort with our ultra-lightweight, futuristic sneakers designed for everyday spacewalks.",
      image: "../src/assets/images/nebulaSneakers.jpg",
      stock: 25,
      colors: ["#ffdf00", "#202020"],
      rating: 4.5,
      brand: "lunAR Footwear",
      category: "Footwear",
      discount: 20,
    },
    {
      id: "3",
      name: "Galactic Smartwatch",
      price: 249.99,
      description: "Track time across planets and monitor your vitals with the most advanced wearable in the galaxy.",
      image: "https://via.placeholder.com/300x400.png?text=Smartwatch",
      stock: 8,
      colors: ["#silver", "#black", "#navy"],
      rating: 4.9,
      brand: "lunAR Tech",
      category: "Accessories",
      discount: 15,
    },
    // Add more if needed
  ],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // Add reducer logic later for filtering, sorting, etc.
  },
});

export default productSlice.reducer;
export const selectAllProducts = (state) => state.products.products;
