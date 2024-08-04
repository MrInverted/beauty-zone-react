import { createSlice } from "@reduxjs/toolkit";
import { AllServiceType } from '../data/catalogue';
import { AllCitiesType, AllStatesType } from "../data/location";

interface ISortingState {
  state: AllStatesType | "";
  city: AllCitiesType | "";
  service: AllServiceType[] | [];
  price: { min: number, max: number };
  sort: "" | "По популярности" | "По рейтингу" | "По цене";
  page: number;
}

const initialState: ISortingState = {
  state: "",
  city: "",
  service: [],
  price: { min: 0, max: 0 },
  sort: "",
  page: 0
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

    setSortingBy(state, action) {
      state.sort = action.payload;
    },

    setSortingPage(state, action) {
      state.page = action.payload;
    }
  }
})

export { sortingSlice }

export const {
  setSortingState,
  setSortingCity,
  setSortingServiceSingle,
  setSortingService,
  deleteSortingService,
  setSortingPrice,
  setSortingBy,
  setSortingPage
} = sortingSlice.actions;