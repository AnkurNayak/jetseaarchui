import { NavigationProps } from "@/app/components/flights/FlightList";
import { HiArrowLongLeft, HiMiniClock } from "react-icons/hi2";
import { SiLufthansa } from "react-icons/si";
import { motion } from "framer-motion";
import { itemVariants, wrapperVariants } from "@/app/utils/animationVariants";

const FlightRightDetailView = ({ isInView, toggleView }: NavigationProps) => {
  return (
    <motion.div
      initial="closed"
      animate={isInView ? "open" : "closed"}
      variants={wrapperVariants}
      className="no-scrollbar fixed right-0 top-0 bottom-0 bg-card w-full md:w-[640px] h-full shadow-lg overflow-y-auto z-[90]"
    >
      <div className="p-6 md:p-8 flex flex-col space-y-4">
        <button
          className="max-w-fit relative flex items-center justify-center"
          onClick={toggleView}
        >
          <p className="h-8 w-8 bg-gray-200 rounded-full absolute"></p>
          <HiArrowLongLeft size={20} className="z-10" />
        </button>
        <div className="py-4 text-xl font-semibold border-b-2 border-gray-300">
          Flight details
        </div>
        <div className="flex flex-1">
          <StepperComponent />
        </div>
      </div>
    </motion.div>
  );
};

const StepperComponent = () => {
  return (
    <div className="flex w-full h-full flex-col">
      <motion.div variants={itemVariants} className="flex items-start mb-6">
        <div className="relative h-4 w-4 border-2 border-black rounded-full dot_line mr-2"></div>
        <div>
          <div className="text-sm font-medium text-primary-text">
            Sat 28 Sept • 2:15
          </div>
          <div className="py-2 font-semibold">
            DXB • Dubai International Airport
          </div>
        </div>
        <div className="ml-auto">
          <SmallCard />
        </div>
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="flex items-start mb-6 min-h-52"
      >
        <div className="relative bg-black h-4 w-4 border-2 border-black rounded-full dot_line_dashed mr-2"></div>
        <div className="h-44">
          <div className="text-sm font-medium text-primary-text">
            Sat 28 Sept • 2:15
          </div>
          <div className="py-2 font-semibold">
            RUH • King Khalid International Airport
          </div>
          <div className="py-2 text-secondary-text flex items-center gap-2 h-full justify-center">
            <HiMiniClock size={16} />
            Layover 2h 25m
          </div>
        </div>
      </motion.div>
      <motion.div variants={itemVariants} className="flex items-start mb-6">
        <div className="relative h-4 w-4 border-2 border-black rounded-full dot_line mr-2"></div>
        <div>
          <div className="text-sm font-medium text-primary-text">
            Sat 28 Sept • 2:15
          </div>
          <div className="py-2 font-semibold">
            RUH • King Khalid International Airport
          </div>
        </div>
        <div className="ml-auto">
          <SmallCard />
        </div>
      </motion.div>
      <motion.div variants={itemVariants} className="flex items-start mb-6">
        <div className="relative h-4 w-4 border-2 border-black rounded-full mr-2"></div>
        <div>
          <div className="text-sm font-medium text-primary-text">
            Sat 28 Sept • 2:15
          </div>
          <div className="py-2 font-semibold">
            CDG • Paris - Charles de Gualle Airport
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Small card
const SmallCard = () => {
  return (
    <motion.div variants={itemVariants} className="flex gap-4">
      <div className="h-7 w-7">
        <SiLufthansa size={24} />
      </div>
      <div className="flex flex-col text-xs text-secondary-text">
        <div>Saudi Arabian Airlines • SV553</div>
        <div>Economy • A330</div>
        <div>Flight time 3h 45m</div>
      </div>
    </motion.div>
  );
};
export default FlightRightDetailView;
