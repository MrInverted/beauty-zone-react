import { createSlice } from "@reduxjs/toolkit";
import { IArticleModel } from "../data/models";
import { fetchArticlesLimitedForIntroPage, fetchArticlesWithSorting } from "./sorting-slice-fetching";

const articleSlice = createSlice({
  name: "article",

  initialState: {
    articles: [] as IArticleModel[],
    totalDocuments: 0,
    currentPage: 1,
  },

  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    }
  },

  extraReducers: (builder) => {
    builder.addCase(fetchArticlesWithSorting.fulfilled, (state, action) => {
      state.articles = action.payload.articles;
      state.totalDocuments = action.payload.totalDocuments;
    });

    builder.addCase(fetchArticlesLimitedForIntroPage.fulfilled, (state, action) => {
      state.articles = action.payload.articles;
    })
  },
})

export { articleSlice }

export const { setCurrentPage } = articleSlice.actions;