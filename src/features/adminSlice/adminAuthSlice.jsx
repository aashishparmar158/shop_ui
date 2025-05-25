import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  admin: null,
};

const adminAuthSlice = createSlice({
  name: "adminAuth",
  initialState,
  reducers: {
    loginAdmin: (state, action) => {
      state.isLoggedIn = true;
      state.admin = action.payload;
    },
    logoutAdmin: (state) => {
      state.isLoggedIn = false;
      state.admin = null;
    },
  },
});

export const { loginAdmin, logoutAdmin } = adminAuthSlice.actions;
export default adminAuthSlice.reducer;
