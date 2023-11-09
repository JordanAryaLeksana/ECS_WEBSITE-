import React from "react";
import StepFlow from "./stepflow";
import Navbar from "./components/navbar";
import StepperTailwind from "./stepper";
import useResponsive from "@/components/useResponsive";
const Oprec = () => {
  const { isDesktop } = useResponsive();
  return (
    <>
      <Navbar />
      <div
        className="min-h-screen w-full flex justify-center lg:items-center sm:  bg-cover overflow-x-hidden "
        style={{ backgroundImage: "url('/bg.png')" }}
      >
        {/* <div className='md:w-1/2 md:px-20 sm:w-full bg-white py-16 md:m-20 sm:m-0 rounded-3xl'>
        
        <StepperTailwind />
      </div> */}
        {isDesktop ? (
          <div className="bg-white py-16 w-1/2 px-20 m-20 rounded-3xl">
            <StepperTailwind></StepperTailwind>
          </div>
        ) : (
          <div className="bg-white py-8 my-10 w-full mx-6 p-8 rounded-3xl h-fit">
            <StepperTailwind></StepperTailwind>
          </div>
        )}
      </div>
    </>
  );
};

export default Oprec;
