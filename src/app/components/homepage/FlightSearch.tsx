"use client";
import InputBox from "@/app/components/homepage/InputBox";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { MdOutlineFlightTakeoff } from "react-icons/md";
import Link from "next/link";
import DepartureDate from "@/app/components/common/DepartureDate";
import ReturnDate from "@/app/components/common/ReturnDate";
import useLoading from "@/app/utils/useLoading";

const FlightSearch = () => {
  const { FlightFrom, FlightTo } = useSelector(
    (state: RootState) => state.flight
  );

  const { mount } = useLoading();

  return (
    <div className="-mt-px flex-auto border-t pt-4 sm:pt-6">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="sm:px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="px-2 md:px-1">
            <InputBox flightData={FlightFrom} type="from" />
          </div>
          <div className="px-2">
            <InputBox flightData={FlightTo} type="to" />
          </div>
          <div className="px-2">
            <DepartureDate />
          </div>
          <div className="px-2">
            <ReturnDate />
          </div>
        </div>
        <div className="flex w-full justify-start md:justify-end mt-4 px-2">
          {!mount ? (
            <span className="bg-gray-300 text-gray-300 px-4 py-2 rounded-full flex gap-2 items-center">
              <MdOutlineFlightTakeoff size={24} />
              Search for flight
            </span>
          ) : (
            <Link
              href="/flights"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full flex gap-2 items-center"
            >
              <MdOutlineFlightTakeoff size={24} />
              Search for flight
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlightSearch;
