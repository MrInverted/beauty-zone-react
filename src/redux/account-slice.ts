import { createSlice } from "@reduxjs/toolkit";
import { IArticleModel, IRequest, IUserModel } from "../data/models";

const requestSlice = createSlice({
  name: "request",

  initialState: {
    requests: [] as IRequest[],
    articles: [] as IArticleModel[],
    personalInfo: {} as IUserModel
  },

  reducers: {
    setRequests(state, action) {
      state.requests = action.payload;
    },

    setArticles(state, action) {
      state.articles = action.payload;
    },

    setPersonalInfo(state, action) {
      state.personalInfo = action.payload;
    }
  }
})

export { requestSlice };

export const { setRequests, setArticles, setPersonalInfo } = requestSlice.actions;