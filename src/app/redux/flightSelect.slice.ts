"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FlightData {
  name: string;
  code: string;
  city: string;
  country: string;
  arrivalTime: string;
  departureTime: string;
}

interface FlightState {
  FlightFrom: FlightData | null;
  FlightTo: FlightData | null;
  DepartureTime: number | null;
  ReturnTime: number | null;
}

const initialState: FlightState = {
  FlightFrom: null,
  FlightTo: null,
  DepartureTime: null,
  ReturnTime: null,
};

const saveStateToLocalStorage = (state: FlightState) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("flightData", JSON.stringify(state));
  }
};

const flightSelect = createSlice({
  name: "flightSelect",
  initialState,
  reducers: {
    selectFrom(state, action: PayloadAction<FlightData>) {
      state.FlightFrom = action.payload;
      saveStateToLocalStorage(state);
    },
    selectTo(state, action: PayloadAction<FlightData>) {
      state.FlightTo = action.payload;
      saveStateToLocalStorage(state);
    },
    selectDepartureTime(state, action: PayloadAction<number>) {
      state.DepartureTime = action.payload;
      saveStateToLocalStorage(state);
    },
    selectReturnTime(state, action: PayloadAction<number>) {
      state.ReturnTime = action.payload;
      saveStateToLocalStorage(state);
    },
  },
});

export const { selectFrom, selectTo, selectDepartureTime, selectReturnTime } =
  flightSelect.actions;

export default flightSelect.reducer;
