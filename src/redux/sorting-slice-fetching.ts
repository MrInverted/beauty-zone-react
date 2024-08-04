import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { store } from "./store";
import { BACKEND_URL } from "../data/url";

export const fetchArticlesWithSorting = createAsyncThunk(
  "sorting/fetch",
  async (inc, api) => {
    const { state, city, service, price, sort, page } = store.getState().sorting;


    const priceMin = price.min;
    const priceMax = price.max;
    const queryParams = { state, city, service, sort, priceMin, priceMax, page };
    const query = Object.entries(queryParams).map(([key, value]) => key + "=" + (value ?? ""));
    const queryToString = query.join("&");

    const url = `${BACKEND_URL}/api/article/?${queryToString}`;

    try {
      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      console.log(error);
      return api.rejectWithValue("Error while fetching with sorting");
    }
  }
);

export const fetchArticlesLimitedForIntroPage = createAsyncThunk(
  "sorting/fetch-limited",
  async (inc, api) => {
    const url = `${BACKEND_URL}/api/article/limited`;

    try {
      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      console.log(error);
      return api.rejectWithValue("Error while fetching limited");
    }
  }
)