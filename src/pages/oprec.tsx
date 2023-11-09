import React from 'react';
import StepFlow from './stepflow';
import Navbar from './components/navbar';
import StepperTailwind from './stepper';
import useResponsive from './components/useResponsive';
const Oprec = () => {
  const {isDesktop} = useResponsive()
  return (
    <div>
       <Navbar />
    <div className="min-h-screen flex justify-center items-center bg-cover bg-center" style={{backgroundImage: "url('/bg.png')"}}>
      
      {/* <div className='md:w-1/2 md:px-20 sm:w-full bg-white py-16 md:m-20 sm:m-0 rounded-3xl'>
        
        <StepperTailwind />
      </div> */}
      {isDesktop ?
      
      <div className='bg-white py-16 w-1/2 px-20 m-20 rounded-3xl'>
      <StepperTailwind></StepperTailwind>
    </div>
    :
    <div className='bg-white py-16 w-full p-10 rounded-3xl'>
        <StepperTailwind></StepperTailwind>
      </div>
    }
    </div>

    </div>
   
  );
}

export default Oprec;
