import { NavigationProps } from "@/app/components/flights/FlightList";
import { staggerChildrenVariant } from "@/app/utils/animationVariants";
import {
  Flight,
  FlightTimeDatabase,
} from "@/app/utils/db/flight_time.database";
import { motion } from "framer-motion";
import Image from "next/image";

const FlightListDetailBox = ({ toggleView }: NavigationProps) => {
  return (
    <motion.div
      className="border rounded-xl border-gray-300 bg-card"
      variants={staggerChildrenVariant}
    >
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 w-full">
          {FlightTimeDatabase.map((flight, index) => (
            <CardFlexBox key={index} fly={flight} />
          ))}
        </div>
        <div className="flex min-w-40 max-md:border-t md:border-l md:justify-center px-4 py-6 flex-col">
          <div>from</div>
          <div className="sm:text-2xl">AED 2,456.90</div>
          <button
            className="mt-4 px-2 py-1 rounded-md bg-sky-400 text-white font-semibold"
            onClick={toggleView}
          >
            Select
          </button>
        </div>
      </div>
    </motion.div>
  );
};

interface CardFlexBoxProps {
  fly: Flight;
}
const CardFlexBox = ({ fly }: CardFlexBoxProps) => {
  return (
    <div className="flex flex-col md:flex-row px-4 py-6 border-b">
      <div className="flex items-center">
        <div className="h-14 w-20 flex items-center justify-center">
          <Image
            src={fly.image}
            alt="fligt_logo"
            width={0}
            height={0}
            priority
            className="max-h-11 max-w-11 min-w-11 min-h-11 object-contain"
          />
        </div>
        <div className="flex flex-col">
          <div className="text-xs">
            {fly.airline} • {fly.flightNumber}
          </div>
          <div className="font-medium">
            {fly.departureTime} - {fly.arrivalTime}
          </div>
        </div>
      </div>
      <div className="md:ml-auto flex md:items-center max-md:flex-col max-md:ml-20">
        <div className="flex flex-col mr-8">
          <div className="text-xs text-secondary-text">
            {fly.departureAirport} - {fly.arrivalAirport}
          </div>
          <div>{fly.flightDuration}</div>
        </div>
        <div className="flex flex-col md:min-w-40 md:max-w-40 md:text-center overflow-hidden">
          {fly.layovers.length > 0 ? (
            <>
              <div className="text-xs text-secondary-text font-medium">
                {fly.layovers[0].duration} in {fly.layovers[0].location}
                {fly.layovers.length > 1 && `, ${fly.layovers[1].location}`}
              </div>
              <div>
                {fly.layovers.length} stop{fly.layovers.length > 1 ? "s" : ""}
              </div>
            </>
          ) : (
            <div>Non stop</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlightListDetailBox;
