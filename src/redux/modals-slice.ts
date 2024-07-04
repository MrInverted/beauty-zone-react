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
    },

    showRecoveryModal(state) {
      state.isRecovery = true;
      state.isLogin = false;
      state.isRegister = false;
    },

    showRegisterModal(state) {
      state.isRegister = true;
      state.isLogin = false;
      state.isRecovery = false;
    },

    closeLoginRegisterRecoveryModals(state) {
      state.isLogin = false;
      state.isRegister = false;
      state.isRecovery = false;
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