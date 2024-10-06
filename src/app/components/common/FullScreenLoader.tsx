"use client";

import {
  LoadingBar,
  LoadingCards,
  OverlayCard,
} from "@/app/components/common/LoadingComponents";

const FullScreenLoader = () => {
  return (
    <div className="flex flex-col z-10 bg-background overflow-hidden">
      <div className="h-full w-full flex absolute z-20 justify-center mt-40">
        <OverlayCard />
      </div>
      <div className="py-3">
        <LoadingBar />
      </div>
      <div className="container mx-auto space-y-4">
        {Array.from({ length: 4 }, (_, index) => (
          <div className="px-2" key={index}>
            <div className="rounded-xl border border-gray-300 grid grid-cols-1 sm:grid-cols-2 ">
              <LoadingCards />
              <LoadingCards />
              <LoadingCards />
              <LoadingCards />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FullScreenLoader;
