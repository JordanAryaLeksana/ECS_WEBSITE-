import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BiLogoLinkedin } from 'react-icons/bi';
const Splash = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 30);
        return () => clearTimeout(timeout);
    }, []);


    return isMounted ? (
        <div className='flex flex-col h-screen justify-center items-center bg-AddsOn-white text-secondary-normal-normal font-Poppins'>
            <h1 className='text-[32px] font-bold z-[2] sm:text-[64px]' >ECS LABORATORY</h1>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, scale:30}} transition={{ duration: 1 }} style={{ filter: 'blur(2px)' }} className='absolute w-20 h-20 bg-primary-normal-normal rounded-full z-[1]'></motion.div>
            <p className="text-[16px] opacity-0">The world where we explore <span className="ml-3 border-[1.5px] p-2 px-4 rounded-3xl border-secondary-normal-normal">
                <span >Artificial Intelligence</span>
            </span></p>

        </div>
    ) : null;
};

export default Splash;