import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchAll",
  async () => {
   const res = await fetch("/api/products"); // <- IS THIS THE RIGHT ENDPOINT?
    const data = await res.json();            // <- this will break if res is HTML!
    return data;
  }
);

export const deleteProduct = createAsyncThunk(
  "products/delete",
  async (id) => {
    await axios.delete(`/api/products/${id}`);
    return id;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (prod) => prod.id !== action.payload
        );
      });
  },
});

export default productSlice.reducer;
