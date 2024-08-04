import { createSlice } from "@reduxjs/toolkit";

const addArticleSlice = createSlice({
  name: "add-article",

  initialState: {
    isArticleForm: false,
    service: "",
  },

  reducers: {
    setAddAnArticleService(state, action) {
      state.service = action.payload;
      state.isArticleForm = true;
    },
  }
})

export { addArticleSlice };

export const { setAddAnArticleService } = addArticleSlice.actions