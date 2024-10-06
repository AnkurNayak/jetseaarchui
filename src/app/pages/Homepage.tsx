import FlightSearch from "@/app/components/homepage/FlightSearch";
import HomepageIntro from "@/app/components/homepage/HomepageIntro";
// import FullScreenLoader from "@/app/components/FullScreenLoader";

const Homepage = () => {
  return (
    <div>
      {/* <FullScreenLoader /> */}
      <HomepageIntro />
      <FlightSearch />
    </div>
  );
};

export default Homepage;
