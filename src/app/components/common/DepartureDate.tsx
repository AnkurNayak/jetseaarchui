"use client";

import { RootState } from "@/app/redux/store";
import { convertTimestampToDate } from "@/app/utils/dateFormater";
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import flatpickr from "flatpickr";
import { selectDepartureTime } from "@/app/redux/flightSelect.slice";
import useLoading from "@/app/utils/useLoading";

const DepartureDate = () => {
  const { DepartureTime } = useSelector((state: RootState) => state.flight);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedDate, setSelectedDate] = useState<any>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();
  const [, setTimeStamp] = useState(0);
  const { mount } = useLoading();

  const loadStyle: string =
    "text-gray-300 bg-gray-300 animate-pulse rounded text-gray-300 bg-gray-300 animate-pulse rounded";

  useEffect(() => {
    if (DepartureTime !== undefined) {
      const dateDetails = convertTimestampToDate(DepartureTime || 0);
      setSelectedDate(dateDetails);
    }
  }, [DepartureTime]);

  useEffect(() => {
    if (inputRef.current) {
      flatpickr(inputRef.current, {
        enableTime: false,
        dateFormat: "Y-m-d H:i",
        minDate: "today",
        onChange: (selectedDates) => {
          const timestamp = selectedDates[0].getTime();
          setTimeStamp(timestamp);
          dispatch(selectDepartureTime(timestamp));
          const dateDetails = convertTimestampToDate(timestamp);
          setSelectedDate(dateDetails);
        },
      });
    }
  }, [dispatch, selectedDate]);

  return (
    <div className="relative flex rounded-xl border-gray-300 border bg-card flex-col">
      <div className="flex flex-col">
        <div
          className="mb-4 cursor-pointer capitalize font-semibold px-4 py-3 border-b border-dashed border-gray-300"
          ref={inputRef}
        >
          <span className={`${!mount && loadStyle}`}>Departure</span>
        </div>
        <div className="flex flex-col px-4 py-2">
          <div className="flex items-baseline">
            <div className={`text-2xl md:text-5xl font-medium `}>
              <span className={`${!mount && loadStyle}`}>
                {!mount ? "07" : selectedDate?.date}
              </span>
            </div>
            <div className={`text-lg md:text-2xl capitalize`}>
              <span className={`${!mount && loadStyle}`}>
                {!mount ? "oct" : selectedDate?.month}
              </span>
            </div>
            <div className={`text-lg md:text-2xl`}>
              &apos;
              <span className={`${!mount && loadStyle}`}>
                {!mount ? "24" : selectedDate?.year}
              </span>
            </div>
          </div>
          <div className="capitalize">
            <span className={`${!mount && loadStyle}`}>
              {!mount ? "monday" : selectedDate?.day}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartureDate;
