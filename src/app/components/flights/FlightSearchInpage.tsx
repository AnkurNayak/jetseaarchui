import {
  InputDataHorizontal,
  InputDataVertical,
} from "@/app/components/common/InputData";

const FlightSearchInpage = () => {
  return (
    <div className="container mx-auto">
      <div className="container mx-auto">
        <div className="hidden md:flex w-full">
          <InputDataHorizontal />
        </div>
        <div className="flex md:hidden w-full px-2">
          <InputDataVertical />
        </div>
      </div>
    </div>
  );
};

export default FlightSearchInpage;
