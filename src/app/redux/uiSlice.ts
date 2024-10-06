"use client";
import { createSlice } from "@reduxjs/toolkit";

interface UiState {
  dummyLoading: boolean;
}

const initialState: UiState = {
  dummyLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    startDummyLoading(state) {
      state.dummyLoading = true;
    },
    stopDummyLoading(state) {
      state.dummyLoading = false;
    },
  },
});

export const { startDummyLoading, stopDummyLoading } = uiSlice.actions;

export default uiSlice.reducer;
