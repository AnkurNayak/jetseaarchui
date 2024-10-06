"use client";

import { RootState } from "@/app/redux/store";
import { convertTimestampToDate } from "@/app/utils/dateFormater";
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import flatpickr from "flatpickr";
import { selectReturnTime } from "@/app/redux/flightSelect.slice";
import useLoading from "@/app/utils/useLoading";

const ReturnDate = () => {
  const { ReturnTime } = useSelector((state: RootState) => state.flight);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedDate, setSelectedDate] = useState<any>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();
  const { mount } = useLoading();
  const loadStyle: string =
    "text-gray-300 bg-gray-300 animate-pulse rounded text-gray-300 bg-gray-300 animate-pulse rounded";

  useEffect(() => {
    if (ReturnTime !== undefined) {
      const dateDetails = convertTimestampToDate(ReturnTime || 0);
      setSelectedDate(dateDetails);
    }
  }, [ReturnTime]);

  useEffect(() => {
    if (inputRef.current) {
      flatpickr(inputRef.current, {
        enableTime: false,
        dateFormat: "Y-m-d H:i",
        minDate: "today",
        onChange: (selectedDates) => {
          const timestamp = selectedDates[0].getTime();
          if (!ReturnTime) dispatch(selectReturnTime(timestamp));
          const dateDetails = convertTimestampToDate(timestamp);
          setSelectedDate(dateDetails);
        },
      });
    }
  }, [dispatch, selectedDate, ReturnTime]);

  return (
    <div className="relative flex rounded-xl border-gray-300 border bg-card flex-col h-full">
      <div className="flex flex-col">
        <div
          className="mb-4 cursor-pointer capitalize font-semibold px-4 py-3 border-b border-dashed border-gray-300"
          ref={inputRef}
        >
          <span className={`${!mount && loadStyle}`}>Return</span>
        </div>
        {ReturnTime ? (
          <div className="flex flex-col px-4 py-2">
            <div className="flex items-baseline">
              <div className="text-2xl md:text-5xl font-medium">
                {selectedDate?.date}
              </div>
              <div className="text-lg md:text-2xl capitalize">
                {selectedDate?.month}
              </div>
              <div className="text-lg md:text-2xl">
                &apos;{selectedDate?.year}
              </div>
            </div>
            <div className="capitalize">{selectedDate?.day}</div>
          </div>
        ) : (
          <div className="flex h-full items-center justify-center text-center">
            <div className="px-2">
              <span className={`${!mount && loadStyle}`}>
                Select a return date to get discount upto 30%
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReturnDate;
