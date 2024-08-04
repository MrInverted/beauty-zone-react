import { configureStore } from "@reduxjs/toolkit";

import { modalsSlice } from "./modals-slice";
import { cardSlice } from "./card-slice";
import { useDispatch, useSelector } from "react-redux";
import { sortingSlice } from "./sorting-slice";
import { addArticleSlice } from "./add-article-slice";
import { authSlice } from "./auth-slice";
import { registerSlice } from "./register-slice";
import { requestSlice } from "./account-slice";
import { articleSlice } from "./article-slice";

const store = configureStore({
  reducer: {
    articles: articleSlice.reducer,
    sorting: sortingSlice.reducer,

    modals: modalsSlice.reducer,
    card: cardSlice.reducer,

    auth: authSlice.reducer,
    register: registerSlice.reducer,

    account: requestSlice.reducer,
    addArticle: addArticleSlice.reducer,
  }
})

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const useAppDispatch = useDispatch.withTypes<AppDispatch>();
const useAppSelector = useSelector.withTypes<RootState>();

export { store, useAppDispatch, useAppSelector }