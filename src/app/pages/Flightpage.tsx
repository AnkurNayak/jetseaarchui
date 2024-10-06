
import FlightList from "@/app/components/flights/FlightList";
import FlightSearchInpage from "@/app/components/flights/FlightSearchInpage";

const Flightpage = () => {
  return (
    <div>
      <FlightSearchInpage />
      <FlightList />
    </div>
  );
};

export default Flightpage;
