import { configureStore } from "@reduxjs/toolkit";
import { modalsSlice } from "./modals-slice";
import { cardSlice } from "./card-slice";
import { useDispatch, useSelector } from "react-redux";
import { sortingSlice } from "./sorting-slice";

const store = configureStore({
  reducer: {
    modals: modalsSlice.reducer,
    card: cardSlice.reducer,
    sorting: sortingSlice.reducer
  }
})

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const useAppDispatch = useDispatch.withTypes<AppDispatch>();
const useAppSelector = useSelector.withTypes<RootState>();

export { store, useAppDispatch, useAppSelector }