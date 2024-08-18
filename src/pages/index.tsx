import Layout from "@/components/layout/Layout";
import { useEffect, useState } from "react";
import { BiLogoGmail, BiLogoInstagram, BiLogoLinkedin, BiLogoWhatsapp, BiX } from "react-icons/bi"
import { motion } from "framer-motion"
const Home = () => {
    const bidmin = ["Internet of Things", "Artificial intelligence", "Embedded System"];
    const [bid, setBidmin] = useState("Internet of Things");
    const [popup, setPopup] = useState(true)
    const [flipped, setFlipped] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFlipped(prevFlipped => !prevFlipped);
        }, 2000);

        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setBidmin(bidmin[i]);
            i += 1;
            if (i === bidmin.length) {
                i = 0;
            }
        }, 2000);

        return () => clearInterval(interval); // Membersihkan interval saat komponen unmount
    }, []);

    return (
        <Layout>
            {popup && <div className="absolute rounded-xl top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[1000px] h-[calc(100vh-68px)] bg-white z-10">
                <button onClick={() => setPopup(false)} className="flex flex-row-reverse w-full p-4"><BiX size={24}></BiX></button>
            </div>}
            <div className='h-screen w-screen flex flex-col bg-primary-normal-normal justify-center items-center text-secondary-normal-normal font-Poppins'>
                <h1 className=" font-bold text-[64px]">ECS LABORATORY</h1>
                <p className="text-[16px]">The world where we explore <span className="ml-3 border-[1.5px] p-2 px-4 rounded-3xl border-secondary-normal-normal">
                    <motion.span key={bid}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 1 }} >{bid}</motion.span>
                </span></p>
                <div className="absolute left-0 bottom-24 flex flex-row gap-10 w-full h-fit items-center justify-center text-secondary-normal-normal z-[2]">
                    <a href=""><BiLogoLinkedin className="w-[24px] h-[24px]"></BiLogoLinkedin></a>
                    <a href=""><BiLogoInstagram className="w-[24px] h-[24px]"></BiLogoInstagram></a>
                    <a href=""><BiLogoGmail className="w-[24px] h-[24px]"></BiLogoGmail></a>
                    <a href=""><BiLogoWhatsapp className="w-[24px] h-[24px]"></BiLogoWhatsapp></a>
                </div>
                {
                    !popup &&
                    <motion.div className="absolute right-20 bottom-24 flex flex-row-reverse gap-10 w-full h-fit text-white">
                        <motion.button whileHover={{ scale: 1.2 }} onHoverStart={e => { }}
                            onHoverEnd={e => { }} animate={{ y: [0, -50, 0] }} drag transition={{ duration: 1, ease: "easeInOut", repeat: Infinity, repeatType: "loop", repeatDelay: 0.5, bounce: 0.5 }} onClick={() => setPopup(true)} className="flex flex-col">
                            <h1 className="font-bold text-[9.89px]">REGISTER NOW!!!</h1>
                            <img src="/Frame 279.png" width={143} height={45} alt="" />
                            {
                                flipped ?
                                    <h1 className="text-left font-bold text-[50px]">GASS</h1>
                                    :
                                    <h1 className="text-left font-bold text-[50px]">2024</h1>
                            }
                        </motion.button>
                    </motion.div>
                }
            </div>
        </Layout>
    );
}

export default Home;
