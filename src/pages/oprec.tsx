import React from "react";
import StepFlow from "./stepflow";
import Navbar from "./components/navbar";
import StepperTailwind from "./stepper";
import useResponsive from "@/components/useResponsive";
import Head from "next/head";
import Link from "next/link";
const Oprec = () => {
  const { isDesktop } = useResponsive();
  return (
    <>
    <Head><title>oprec - ecs-laboratory</title></Head>
      <Navbar />

      <div
        className="min-h-screen w-full flex flex-col justify-center items-center  overflow-x-hidden "
        style={{ backgroundImage: "url('/bg.png')", backgroundSize: 'contain', backgroundRepeat: 'repeat' }}
      >
       
        {isDesktop ? (
          <div className="bg-white py-16 my-10 w-1/2 px-20 mx-20 rounded-3xl">
            <StepperTailwind></StepperTailwind>
          </div>
        ) : (
          <div className="bg-white py-8 my-10 w-full p-8 rounded-3xl h-fit">
          
            <StepperTailwind></StepperTailwind>
          </div>
        )}
      </div>
    </>
  );
};

export default Oprec;
