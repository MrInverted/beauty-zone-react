import { createSlice } from "@reduxjs/toolkit";

const modalsSlice = createSlice({
  name: "modals",

  initialState: {
    isLogin: false,
    isRegister: false,
    isRecovery: false
  },

  reducers: {
    showLoginModal(state) {
      state.isLogin = true;
      state.isRegister = false;
      state.isRecovery = false;
    },

    closeLoginModal(state) {
      state.isLogin = false;
      state.isRegister = false;
      state.isRecovery = false;
    },

    showRecoveryModal(state) {
      state.isRecovery = true;
      state.isLogin = false;
      state.isRegister = false;
    },

    closeRecoveryModal(state) {
      state.isLogin = false;
      state.isRegister = false;
      state.isRecovery = false;
    },

    showRegisterModal(state) {
      state.isRegister = true;
      state.isLogin = false;
      state.isRecovery = false;
    },

    closeRegisterModal(state) {
      state.isLogin = false;
      state.isRegister = false;
      state.isRecovery = false;
    },
  }
})

export { modalsSlice }

export const {
  showLoginModal,
  closeLoginModal,
  showRecoveryModal,
  closeRecoveryModal,
  showRegisterModal,
  closeRegisterModal
} = modalsSlice.actions;