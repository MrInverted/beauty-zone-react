import { createSlice } from "@reduxjs/toolkit";
import { AllServiceType } from './../utils/catalogue';
import { AllCitiesType, AllStatesType } from "../utils/location";

interface ISortingState {
  state: AllStatesType | "Выберите штат";
  city: AllCitiesType | "Выберите город";
  service: AllServiceType[] | [];
  price: { min: number, max: number };
}

const initialState: ISortingState = {
  state: "Выберите штат",
  city: "Выберите город",
  service: [],
  price: { min: 0, max: 0 }
}

const sortingSlice = createSlice({
  name: "sorting",

  initialState: initialState,

  reducers: {
    setSortingState(state, action) {
      state.state = action.payload;
    },

    setSortingCity(state, action) {
      state.city = action.payload;
    },

    setSortingServiceSingle(state, action) {
      state.service = [action.payload];
    },

    setSortingService(state, action) {
      const arr = [action.payload, ...state.service];
      state.service = arr.filter((item, index, array) => array.indexOf(item) === index);
    },

    deleteSortingService(state, action) {
      state.service = state.service.filter((item) => item !== action.payload);
    },

    setSortingPrice(state, action) {
      state.price = action.payload;
    },
  }
})

export { sortingSlice }

export const {
  setSortingState,
  setSortingCity,
  setSortingServiceSingle,
  setSortingService,
  deleteSortingService,
  setSortingPrice
} = sortingSlice.actions;