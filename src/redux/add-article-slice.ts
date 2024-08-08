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

    removeAnArticleForm(state) {
      state.service = "";
      state.isArticleForm = false;
    }
  }
})

export { addArticleSlice };

export const { setAddAnArticleService, removeAnArticleForm } = addArticleSlice.actions