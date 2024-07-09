import { createSlice } from "@reduxjs/toolkit";

const addArticleSlice = createSlice({
  name: "add-article",

  initialState: {
    isArticleForm: false,

    image: "",
    excerpt: "",
    description: "",
    service: "",
    phone: "",
    price: "",
    workingDays: "",
    workingHours: "",
    portfolio: ['']
  },

  reducers: {
    setAddAnArticleService(state, action) {
      state.service = action.payload;
      state.isArticleForm = true;
    }
  }
})

export { addArticleSlice };

export const { setAddAnArticleService } = addArticleSlice.actions