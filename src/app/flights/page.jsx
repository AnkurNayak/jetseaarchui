"use client";
import Flightpage from "@/app/pages/Flightpage";
import { useEffect, useState } from "react";
import FullScreenLoader from "@/app/components/common/FullScreenLoader";
import FlightSearchInpage from "@/app/components/flights/FlightSearchInpage";

export default function FlightBasePage() {
  const [loading, setLoading] = useState(true);

  // Fake loader for displaying : 3sec
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="overflow-hidden">
          <FlightSearchInpage />
          <FullScreenLoader />
        </div>
      ) : (
        <Flightpage />
      )}
    </>
  );
}
