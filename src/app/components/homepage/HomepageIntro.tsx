"use client";

import useLoading from "@/app/utils/useLoading";

const HomepageIntro = () => {
  const { mount } = useLoading();

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const greeting = getGreeting();

  return (
    <div className="bg-card">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col px-6 sm:px-8">
        <div className="my-8 flex min-w-0 flex-auto flex-col sm:my-12 sm:flex-row sm:items-center">
          <div className="flex min-w-0 flex-auto items-center">
            <div className="flex items-center gap-2 truncate text-2xl font-semibold leading-7 tracking-tight md:text-5xl md:leading-snug">
              <div
                className={`${
                  !mount && "bg-gray-300 text-gray-300 rounded-xl animate-pulse"
                }`}
              >
                {greeting.split(" ")[0]}
              </div>
              <div
                className={`${
                  !mount && "bg-gray-300 text-gray-300 rounded-xl animate-pulse"
                }`}
              >
                {greeting.split(" ")[1]}
                {greeting.split(" ").length > 2
                  ? ` ${greeting.split(" ")[2]}`
                  : ""}
                ,
              </div>
              <div
                className={`${
                  !mount && "bg-gray-300 text-gray-300 rounded-xl animate-pulse"
                }`}
              >
                Brian
              </div>
            </div>
          </div>
        </div>
        <div className="bg-background relative flex cursor-pointer self-start overflow-hidden rounded-t-xl border border-b-0 pb-1 pl-5 pr-4 pt-2 border-border max-w-fit">
          <div className="flex items-center">
            <div className="overflow-hidden">
              <div className="truncate font-medium leading-6">
                <span
                  className={`${
                    !mount && "text-gray-300 bg-gray-300 animate-pulse"
                  }`}
                >
                  Flights
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageIntro;
