"use client";
import { ReactNode } from "react";
import {
  selectDepartureTime,
  selectFrom,
  selectReturnTime,
  selectTo,
} from "@/app/redux/flightSelect.slice";
import FlightDetails from "@/app/utils/db/flight_details.database";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

interface BaseLayoutProps {
  children: ReactNode;
}
export default function BaseLayout({ children }: BaseLayoutProps) {
  const dispatch = useDispatch();
  // Set Initial State for from _ to
  useEffect(() => {
    const loadLocal = () => {
      const storage = localStorage.getItem("flightData") || "";
      if (storage) {
        const { FlightFrom, FlightTo, ReturnTime, DepartureTime } =
          JSON.parse(storage);
        dispatch(selectFrom(FlightFrom));
        dispatch(selectTo(FlightTo));
        dispatch(selectDepartureTime(DepartureTime));
        dispatch(selectReturnTime(ReturnTime));
      } else {
        dispatch(selectFrom(FlightDetails[0]));
        dispatch(selectTo(FlightDetails[FlightDetails.length - 1]));
        dispatch(selectDepartureTime(Date.now()));
      }
    };
    loadLocal();
  }, [dispatch]);

  return <>{children}</>;
}
