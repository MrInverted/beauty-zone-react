import { configureStore } from "@reduxjs/toolkit";
import { modalsSlice } from "./modals-slice";
import { useDispatch, useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    modals: modalsSlice.reducer,
  }
})

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const useAppDispatch = useDispatch.withTypes<AppDispatch>();
const useAppSelector = useSelector.withTypes<RootState>();

export { store, useAppDispatch, useAppSelector }