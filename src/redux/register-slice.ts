import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
  name: "register",

  initialState: {
    name: "",
    surname: "",
    email: "",
    password: "",
    state: "",
    city: "",
    street: "",
    building: "",
  },

  reducers: {
    setFirstStepRegister(state, action) {
      state.name = action.payload.name;
      state.surname = action.payload.surname;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },

    setSecondStepRegister(state, action) {
      state.state = action.payload.state;
      state.city = action.payload.city;
      state.street = action.payload.street;
      state.building = action.payload.building;
    },

    setEmail(state, action) {
      state.email = action.payload;
    }
  }
})

export { registerSlice };

export const { setFirstStepRegister, setSecondStepRegister, setEmail } = registerSlice.actions;