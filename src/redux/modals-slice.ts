import { createSlice } from "@reduxjs/toolkit";

const modalsSlice = createSlice({
  name: "modals",

  initialState: {
    isLogin: false,
    isRegister: false,
    isRecovery: false,
  },

  reducers: {
    showLoginModal(state) {
      state.isLogin = true;
      state.isRegister = false;
      state.isRecovery = false;
      document.body.style.overflow = "hidden";
    },

    showRecoveryModal(state) {
      state.isRecovery = true;
      state.isLogin = false;
      state.isRegister = false;
      document.body.style.overflow = "hidden";
    },

    showRegisterModal(state) {
      state.isRegister = true;
      state.isLogin = false;
      state.isRecovery = false;
      document.body.style.overflow = "hidden";
    },

    closeLoginRegisterRecoveryModals(state) {
      state.isLogin = false;
      state.isRegister = false;
      state.isRecovery = false;
      document.body.style.overflow = "";
    },
  }
})

export { modalsSlice }

export const {
  showLoginModal,
  showRecoveryModal,
  showRegisterModal,
  closeLoginRegisterRecoveryModals
} = modalsSlice.actions;