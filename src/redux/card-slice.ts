import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "card",

  initialState: {
    isCard: false,
    isMakeReview: false,
    isRequest: false,
    isPremium: true,

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
    state: "Калифорния",
    city: "Лос-Анджелес",
    portfolio: ["/images/card/1.jpg", "/images/card/2.jpg", "/images/card/3.jpg", "/images/card/4.jpg", "/images/card/1.jpg", "/images/card/2.jpg", "/images/card/3.jpg", "/images/card/4.jpg",]
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
  }
})

export { cardSlice }

export const {
  showCardModal,
  closeCardModal,
  showCardMakeReview,
  closeCardMakeReview,
  showCardRequest,
  closeCardRequest
} = cardSlice.actions;