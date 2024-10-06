"use client";
import {
  FlightData,
  selectFrom,
  selectTo,
} from "@/app/redux/flightSelect.slice";
import { RootState } from "@/app/redux/store";
import FlightDetails from "@/app/utils/db/flight_details.database";
import useLoading from "@/app/utils/useLoading";
import { useEffect, useState } from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";

interface InputBoxProps {
  flightData: FlightData | null;
  type: string;
}

const InputBox = ({ flightData, type }: InputBoxProps) => {
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const { mount } = useLoading();

  const toggleSearchClick = () => {
    setIsSearchClicked((prev) => !prev);
  };

  return (
    <div className="relative flex rounded-xl border-gray-300 border bg-card flex-col">
      <div className="flex flex-col">
        {isSearchClicked ? (
          <SearchBox type={type} action={toggleSearchClick} />
        ) : (
          <div
            className="mb-4 cursor-pointer capitalize font-semibold px-4 py-3 border-b border-dashed border-gray-300"
            onClick={toggleSearchClick}
          >
            <span
              className={`${
                !mount && "text-gray-300 bg-gray-300 animate-pulse"
              }`}
            >
              {type}
            </span>
          </div>
        )}
        <div className="flex flex-col px-4 py-2">
          {mount ? (
            <>
              <div className="text-2xl md:text-5xl font-black">
                {flightData?.code}
              </div>
              <div>
                {flightData?.city}, {flightData?.country}
              </div>
            </>
          ) : (
            <>
              <div className="text-2xl md:text-4xl font-black mb-2">
                <span className="text-gray-300 bg-gray-300 rounded animate-pulse">
                  ABCD
                </span>
              </div>
              <div className="text-gray-300 bg-gray-300 rounded animate-pulse mt-1">
                Lorem ipsum dolor sit
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// Searchbox Select

interface SearchBoxProps {
  type: string;
  action: () => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ type, action }) => {
  const dispatch = useDispatch();
  const [selectedFlight, setSelectedFlight] = useState<FlightData | null>(null);
  const [searchInput, setSearchInput] = useState("");

  const { FlightFrom, FlightTo } = useSelector(
    (state: RootState) => state.flight
  );

  const handleFlightSelect = (flight: FlightData) => {
    setSelectedFlight(flight);
  };

  useEffect(() => {
    if (selectedFlight && type === "from") {
      dispatch(selectFrom(selectedFlight));
      action();
    }
    if (selectedFlight && type === "to") {
      dispatch(selectTo(selectedFlight));
      action();
    }
  }, [selectedFlight, dispatch, action, type]);

  // Should not be able to pick same destination
  const filteredFlightDetails = FlightDetails.filter((flight) => {
    const matchesSearch =
      flight.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      flight.city.toLowerCase().includes(searchInput.toLowerCase()) ||
      flight.country.toLowerCase().includes(searchInput.toLowerCase());

    if (type === "from") {
      return matchesSearch && FlightTo?.code !== flight.code;
    } else {
      return matchesSearch && FlightFrom?.code !== flight.code;
    }
  });

  return (
    <div className="flex flex-col border border-gray-300 shadow-lg rounded-xl absolute bg-card overflow-hidden z-10 w-full">
      <div className="flex space-x-2 border-b px-2 py-3">
        <HiOutlineMagnifyingGlass size={24} />
        <input
          className="w-full outline-none bg-transparent"
          autoFocus
          placeholder="Search airports..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      <div className="py-2 max-h-80 overflow-y-scroll">
        {filteredFlightDetails.length > 0 ? (
          filteredFlightDetails.map((flight) => (
            <div
              key={flight.code}
              className="py-2 px-4 border-b last:border-b-0 cursor-pointer"
              onClick={() => handleFlightSelect(flight)}
            >
              <div className="font-semibold text-md">{flight.name}</div>
              <div className="text-sm">
                {flight.city}, {flight.country}
              </div>
            </div>
          ))
        ) : (
          <div className="py-2 px-4 text-gray-500 text-center">
            No results found
          </div>
        )}
      </div>
    </div>
  );
};

export default InputBox;
