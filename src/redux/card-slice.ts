import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IArticleModel, ICommentModel } from './../data/models';
import axios from "axios";
import { BACKEND_URL } from "../data/url";

interface IThunkPayload {
  article: IArticleModel;
  comments: ICommentModel[];
}

const fetchCard = createAsyncThunk(
  "card/fetchOne",
  async (link: string, api) => {
    try {
      const { data } = await axios.get(`${BACKEND_URL}/api/article/${link}`);
      return data;
    } catch (error) {
      return api.rejectWithValue("Error while fetching single card")
    }
  }
);

const cardSlice = createSlice({
  name: "card",

  initialState: {
    isCard: false,
    isMakeReview: false,
    isRequest: false,
    isPremium: true,

    _id: "",
    _ownerId: "",
    state: "Калифорния",
    city: "Лос-Анджелес",
    name: "Мария Василенко",

    image: "/images/masters/1.jpg",
    excerpt: "Мастер с 10 летним опытом. Стрижки для длинных волос, тонирование, подбор профессионального ухода.",
    description: "Мастер с 10 летним опытом. Стрижки для длинных волос, тонирование, подбор профессионального ухода. На первое посещение даю скидку 10%! С нетерпением жду знакомства :)",
    service: "Парихмахерские услуги",
    phone: "+ 1 XXX-XXX-XXXX",
    rating: "4.8",
    price: "40-55",
    workingDays: "Пн-Пт",
    workingHours: "8.00-16.00",

    services: ["Услуга 1, 10$", "Услуга 2, 20$"],
    portfolio: ["/images/card/1.jpg", "/images/card/2.jpg", "/images/card/3.jpg", "/images/card/4.jpg", "/images/card/1.jpg", "/images/card/2.jpg", "/images/card/3.jpg", "/images/card/4.jpg",],

    comments: [{
      createdAt: "2024-07-23T18:42:34.924Z",
      email: "some email",
      imageUrl: "\\uploads\\1721760154922---l-1.jpg",
      name: "Тестий Тестович Третий",
      rating: 4,
      text: "Некий текст",
    }]
  },

  reducers: {
    showCardModal(state) {
      state.isCard = true;
      document.body.style.overflow = "hidden";
    },

    closeCardModal(state) {
      state.isCard = false;
      document.body.style.overflow = "";
    },

    showCardMakeReview(state) {
      state.isMakeReview = true;
    },

    closeCardMakeReview(state) {
      state.isMakeReview = false;
    },

    showCardRequest(state) {
      state.isRequest = true;
    },

    closeCardRequest(state) {
      state.isRequest = false;
    },

    setCardData(state, action: { payload: IArticleModel }) {
      state._id = action.payload._id;
      state.image = action.payload.mainFileLink;
      state.portfolio = action.payload.portfolioLink;

      state.excerpt = action.payload.description.slice(0, 150);
      state.description = action.payload.description;
      state.service = action.payload.service;
      state.phone = action.payload.phoneNumber;
      state.rating = action.payload.rating.toString();
      state.price = action.payload.priceMin + "-" + action.payload.priceMax;
      state.workingDays = action.payload.workingDays;
      state.workingHours = action.payload.workingHours;
      state.services = action.payload.services;

      state._ownerId = action.payload.ownerId._id;
      state.name = action.payload.ownerId.name + " " + action.payload.ownerId.surname;
      state.state = action.payload.ownerId.state;
      state.city = action.payload.ownerId.city;
    },

    setCardComments(state, action) {
      state.comments = action.payload;
    }
  },

  extraReducers: builder => {
    builder.addCase(fetchCard.fulfilled, (state, action: { payload: IThunkPayload }) => {
      console.log(action.payload)

      state._id = action.payload.article._id;
      state.image = action.payload.article.mainFileLink;
      state.portfolio = action.payload.article.portfolioLink;

      state.excerpt = action.payload.article.description.slice(0, 150);
      state.description = action.payload.article.description;
      state.service = action.payload.article.service;
      state.phone = action.payload.article.phoneNumber;
      state.rating = action.payload.article.rating.toString();
      state.price = action.payload.article.priceMin + "-" + action.payload.article.priceMax;
      state.workingDays = action.payload.article.workingDays;
      state.workingHours = action.payload.article.workingHours;
      state.services = action.payload.article.services;

      state._ownerId = action.payload.article.ownerId._id;
      state.name = action.payload.article.ownerId.name + " " + action.payload.article.ownerId.surname;
      state.state = action.payload.article.ownerId.state;
      state.city = action.payload.article.ownerId.city;

      state.comments = action.payload.comments;
    })
  }
})

export { cardSlice, fetchCard }

export const {
  showCardModal,
  closeCardModal,
  showCardMakeReview,
  closeCardMakeReview,
  showCardRequest,
  closeCardRequest,
  setCardData,
  setCardComments,
} = cardSlice.actions;