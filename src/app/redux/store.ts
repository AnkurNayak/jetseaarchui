import { configureStore } from "@reduxjs/toolkit";
import flightSelectReducer from "./flightSelect.slice";
import uiReducer from "./uiSlice";

const store = configureStore({
  reducer: {
    flight: flightSelectReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
