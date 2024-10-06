"use client";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { motion } from "framer-motion";
import { itemVariants, wrapperVariants } from "@/app/utils/animationVariants";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { convertTimestampToDate } from "@/app/utils/dateFormater";
import flatpickr from "flatpickr";
import {
  FlightData,
  selectDepartureTime,
  selectFrom,
  selectReturnTime,
  selectTo,
} from "@/app/redux/flightSelect.slice";
import FlightDetails from "@/app/utils/db/flight_details.database";
import { startDummyLoading, stopDummyLoading } from "@/app/redux/uiSlice";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleReload = (dispatch: any) => {
  dispatch(startDummyLoading());
  setTimeout(() => {
    dispatch(stopDummyLoading());
  }, 2000);
};

export const InputDataHorizontal = () => {
  const [openType, setOpenType] = useState<string | null>(null);
  const dispatch = useDispatch();
  const { dummyLoading } = useSelector((state: RootState) => state.ui);

  const toggleAccordion = (type: string) => {
    setOpenType((prevType) => (prevType === type ? null : type));
  };

  useEffect(() => {
    if (dummyLoading) {
      setOpenType(null);
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }
  }, [dummyLoading]);

  return (
    <div className="my-3 w-full">
      <div className="flex items-center justify-center">
        <motion.div className="bg-card border border-gray-300 flex divide-x-2 rounded-full px-4 py-2 items-center max-md:flex-col">
          <SearchboxSmall
            setOpen={() => !dummyLoading && toggleAccordion("from")}
            type="from"
            isOpen={openType === "from"}
          />
          <SearchboxSmall
            setOpen={() => !dummyLoading && toggleAccordion("to")}
            type="to"
            isOpen={openType === "to"}
          />
          <div className="px-2 font-semibold">
            <DateInput
            // setOpen={() => setOpenDate(!openDate)}
            // isOpen={openDate}
            />
          </div>
          <div className="pr-2 pl-4">
            <div
              className="relative flex items-center justify-center cursor-pointer"
              onClick={() => handleReload(dispatch)}
            >
              <div className="h-8 w-8 absolute rounded-full bg-gray-300"></div>
              <HiMiniMagnifyingGlass size={16} className="z-10" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

interface SearchboxProps {
  setOpen: () => void;
  type: string;
  isOpen: boolean;
}

export const SearchboxSmall = ({ setOpen, type, isOpen }: SearchboxProps) => {
  const { FlightFrom, FlightTo } = useSelector(
    (state: RootState) => state.flight
  );
  const [mounted, setMounted] = useState(false);

  const filteredFlightDetails = FlightDetails.filter((flight) => {
    if (type === "from") {
      return FlightTo?.code !== flight.code;
    } else {
      return FlightFrom?.code !== flight.code;
    }
  });

  // console.log(filteredFlightDetails);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Loading
  if (!mounted)
    return (
      <div className="px-4 py-1 flex items-center gap-1 truncate cursor-pointer md:max-w-60">
        <div className="font-semibold text-gray-300 rounded animate-pulse bg-gray-300">
          ABCD
        </div>
        <div className="truncate text-gray-300 rounded animate-pulse bg-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
          veniam.
        </div>
      </div>
    );

  return (
    <div className="relative">
      <div
        className="px-4 py-1 flex items-center gap-1 truncate cursor-pointer md:max-w-60"
        onClick={setOpen}
      >
        <div className="font-semibold">
          {type === "from" ? FlightFrom?.code : FlightTo?.code}
        </div>
        <div className="text-secondary-text truncate">
          {type === "from" ? FlightFrom?.name : FlightTo?.name}
        </div>
      </div>
      {isOpen && (
        <motion.ul
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-60 z-20 overflow-hidden"
        >
          {filteredFlightDetails.map((airport) => (
            <Option
              key={airport.code}
              setOpen={setOpen}
              airport={airport}
              type={type}
            />
          ))}
        </motion.ul>
      )}
    </div>
  );
};

// Vertical View : small screen
export const InputDataVertical = () => {
  const [openType, setOpenType] = useState<string | null>(null);

  const toggleAccordion = (type: string) => {
    setOpenType((prevType) => (prevType === type ? null : type));
  };

  return (
    <div className="my-3 w-full">
      <div className="flex items-center w-full">
        <div className="bg-card border w-full border-gray-300 flex flex-col rounded-xl space-y-4 py-4">
          <SearchboxSmall
            setOpen={() => toggleAccordion("from")}
            type="from"
            isOpen={openType === "from"}
          />
          <SearchboxSmall
            setOpen={() => toggleAccordion("to")}
            type="to"
            isOpen={openType === "to"}
          />
          <div className="px-3 font-semibold flex gap-8 items-center border-b">
            <DateInput />
          </div>
          <div className="relative flex p-2 items-center justify-center">
            <div className="h-8 w-8 bg-gray-300 absolute rounded-full"></div>
            <HiMiniMagnifyingGlass size={16} className="z-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

interface OptionProps {
  airport: FlightData;
  setOpen: (param: boolean) => void;
  type: string;
}

const Option = ({ airport, setOpen, type }: OptionProps) => {
  const dispatch = useDispatch();
  const dispatchAirport = () => {
    setOpen(false);
    if (type === "from") {
      dispatch(selectFrom(airport));
    } else {
      dispatch(selectTo(airport));
    }
  };

  return (
    <motion.li
      variants={itemVariants}
      onClick={() => dispatchAirport()}
      className="flex items-center gap-2 w-full p-2 font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
    >
      <span className="font-semibold">{airport.code}</span>
      <span className="truncate">{airport.name}</span>
    </motion.li>
  );
};

// Select date
const DateInput = () => {
  const { DepartureTime, ReturnTime } = useSelector(
    (state: RootState) => state.flight
  );
  const depRef = useRef<HTMLInputElement | null>(null);
  const returnRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();

  const [selectedDate, setSelectedDate] = useState<{
    departure: { date: string; month: string } | null;
    return: { date: string; month: string } | null;
  }>({
    departure: null,
    return: null,
  });

  useEffect(() => {
    const departure = DepartureTime
      ? convertTimestampToDate(DepartureTime)
      : null;
    const returnDate = ReturnTime ? convertTimestampToDate(ReturnTime) : null;

    setSelectedDate({ departure, return: returnDate });
  }, [DepartureTime, ReturnTime]);

  useEffect(() => {
    const flatpickrInstance = flatpickr(depRef.current!, {
      enableTime: false,
      dateFormat: "Y-m-d H:i",
      minDate: "today",
      onChange: (selectedDates) => {
        const timestamp = selectedDates[0].getTime();
        dispatch(selectDepartureTime(timestamp));
      },
    });

    return () => {
      flatpickrInstance.destroy();
    };
  }, [dispatch]);

  useEffect(() => {
    const flatpickrInstance = flatpickr(returnRef.current!, {
      enableTime: false,
      dateFormat: "Y-m-d H:i",
      minDate: "today",
      onChange: (selectedDates) => {
        const timestamp = selectedDates[0].getTime();
        dispatch(selectReturnTime(timestamp));
      },
    });

    return () => {
      flatpickrInstance.destroy();
    };
  }, [dispatch, returnRef]);

  return (
    <div className="flex items-center gap-1 capitalize">
      <div ref={depRef}>
        {selectedDate.departure && (
          <div className="cursor-pointer">
            {selectedDate.departure.date} {selectedDate.departure.month}
          </div>
        )}
      </div>
      <div ref={returnRef}>
        {selectedDate.return && (
          <div className="cursor-pointer">
            — {selectedDate.return.date} {selectedDate.return.month}
          </div>
        )}
      </div>
    </div>
  );
};

export default DateInput;
