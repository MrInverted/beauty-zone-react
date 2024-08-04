import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    isAuth: false,
    token: "",
    ownerId: "",
  },

  reducers: {
    setIsAuth(state, action) {
      state.isAuth = true;
      state.token = action.payload.token;
      state.ownerId = action.payload.ownerId;
    },

    removeIsAuth(state) {
      state.isAuth = false;
      state.token = "";
      state.ownerId = "";
    }
  }
})

export { authSlice }

export const { setIsAuth, removeIsAuth } = authSlice.actions;