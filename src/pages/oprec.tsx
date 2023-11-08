import React from 'react';
import StepFlow from './stepflow';
import Navbar from './components/navbar';
import StepperTailwind from './stepper';

const Oprec = () => {
  return (
    <div>
       <Navbar />
    <div className="min-h-screen flex justify-center items-center bg-cover bg-center" style={{backgroundImage: "url('/bg.png')"}}>
      
      <div className='md:w-1/2 md:px-20 sm:w-full bg-white py-16 md:m-20 sm:m-0 rounded-3xl'>
        
        <StepperTailwind />
      </div>
    </div>

    </div>
   
  );
}

export default Oprec;
