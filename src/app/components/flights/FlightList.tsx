"use client";
import FullScreenLoader from "@/app/components/common/FullScreenLoader";
import OverlayScreen from "@/app/components/common/OverlayScreen";
import FlightListDetailBox from "@/app/components/flights/FlightListDetailBox";
import FlightRightDetailView from "@/app/components/flights/FlightRightDetailView";
import { RootState } from "@/app/redux/store";
import { staggerParentVariant } from "@/app/utils/animationVariants";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import { useSelector } from "react-redux";

export interface NavigationProps {
  isInView: boolean;
  toggleView: () => void;
}

const FlightList = () => {
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);
  const { dummyLoading } = useSelector((state: RootState) => state.ui);

  const toggleViewFlight = () => {
    setIsSidenavOpen((pv) => !pv);
  };

  useEffect(() => {
    if (isSidenavOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }
  }, [isSidenavOpen]);

  return (
    <>
      {isSidenavOpen && <OverlayScreen toogleScreen={toggleViewFlight} />}
      <FlightRightDetailView
        isInView={isSidenavOpen}
        toggleView={toggleViewFlight}
      />
      {dummyLoading ? (
        <FullScreenLoader />
      ) : (
        <div className="container mx-auto px-3 md:px-8 py-6">
          <div className="text-secondary-text underline flex items-center space-x-4">
            <Link
              href="/"
              className="relative flex items-center justify-center"
            >
              <span className="h-10 w-10 rounded-full bg-gray-200 absolute -z-10"></span>
              <HiOutlineArrowLeft size={24} />
            </Link>
            <div>Showing 356 of 767 results</div>
          </div>
          <div className="mt-4">
            <motion.div
              className="space-y-4"
              initial="initial"
              animate="animate"
              variants={staggerParentVariant}
            >
              <FlightListDetailBox isInView toggleView={toggleViewFlight} />
              <FlightListDetailBox isInView toggleView={toggleViewFlight} />
              <FlightListDetailBox isInView toggleView={toggleViewFlight} />
              <FlightListDetailBox isInView toggleView={toggleViewFlight} />
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};

export default FlightList;
