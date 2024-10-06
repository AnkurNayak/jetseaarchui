"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import flightGif from "@/app/assets/flight.gif";
// Loading bar
export const LoadingBar = () => {
  return (
    <div className="w-full relative bg-gray-300">
      <motion.div
        className="h-1 bg-[linear-gradient(90deg,rgba(58,104,137,0.5)_0%,#3A6889_45.63%,rgba(58,104,137,0.5)_100%)] max-w-screen"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          duration: 2,
          ease: "linear",
          repeat: Infinity,
        }}
      />
    </div>
  );
};

// Loading cards
export const LoadingCards = () => {
  return (
    <div className="py-6 w-full flex gap-4 px-6 md:px-8">
      <div className="h-12 w-12 bg-gradient-to-r from-gray-300 to-gray-200 animate-pulse opacity-80 rounded"></div>
      <div className="flex flex-col">
        <div className="h-4 w-32 bg-gradient-to-r from-gray-300 to-gray-200 animate-pulse opacity-80 rounded-full"></div>
        <div className="mt-auto h-6 w-48 bg-gradient-to-r from-gray-300 to-gray-200 animate-pulse opacity-80 rounded-full"></div>
      </div>
    </div>
  );
};

// Over lay card
export const OverlayCard = () => {
  return (
    <div className="rounded-xl shadow-lg p-4 border border-gray-300 bg-card min-w-80 max-h-fit">
      <div className="flex items-center justify-center">
        <Image src={flightGif} width={0} height={0} alt="fligt_gif" />
      </div>
      <div className="flex items-center justify-center text-lg gap-2">
        <div>
          <motion.div
            className="w-4 h-4 border-4 border-t-transparent border-gray-600 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, ease: "linear", repeat: Infinity }}
          />
        </div>
        <div>Searching 400+ flights</div>
      </div>
      <div className="flex items-center justify-center text-gray-400">
        Attaching company rules
      </div>
      <div className="flex items-center justify-center text-gray-400">
        Serving best results
      </div>
    </div>
  );
};
