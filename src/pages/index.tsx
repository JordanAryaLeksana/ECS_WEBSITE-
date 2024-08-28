import Layout from "@/components/layout/Layout";
import { useEffect, useState } from "react";
import { BiLogoGmail, BiLogoInstagram, BiLogoLinkedin, BiLogoWhatsapp, BiX } from "react-icons/bi";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Typography from "@/components/Typography/Typography";
import Button from "@/components/Buttons";
import { HiExternalLink, HiX } from "react-icons/hi";

const Home = () => {
    const bidmin = ["Internet of Things", "Artificial intelligence", "Embedded System"];
    const [bid, setBidmin] = useState("Internet of Things");
    const [popup, setPopup] = useState(true);
    const [flipped, setFlipped] = useState(false);

    const HandleClick = () => {
        window.location.href = "/epta/register";
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setFlipped((prevFlipped) => !prevFlipped);
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

        return () => clearInterval(interval);
    }, []);

    return (
        <Layout>
            <Image
                src={`/Background-Default.png`}
                alt="background"
                fill
                objectFit="cover"
                className="fixed inset-0 block"
            />

            {popup && (
                <div className="absolute bg-primary-dark-dark rounded-xl top-1/2 flex -translate-y-1/2 left-1/2 -translate-x-1/2 w-[1000px] h-[calc(100vh-68px)] z-[99999]">
                    <div className="relative w-full h-full">
                        <Image
                            src={`/Vector.png`}
                            alt="vector"
                            width={1000}
                            height={1000}
                            className="absolute top-3 scale-y-[1.04]"
                        />
                        <div
                            className="w-full h-full rounded-xl p-8 bg-accent-warning-600 flex justify-start text-white"
                            style={{
                                clipPath: "polygon(0% 0, 55% 0, 45% 100%, 0 100%)", // 90-degree trapezoid
                            }}
                        >
                            <div className="relative h-fit w-fit top-[10%] left-[4%] flex flex-col justify-center items-start gap-10 ">
                                <Image src={`/EPTA TEXT 2.svg`} alt="epta 2" width={340} height={340} />
                                <Typography variant="Paragraph" size="lg" className="font-light tracking-wide">
                                    Lorem ipsum dolor sit amet consectetur.
                                    <br /> Donec lectus velit tortor risus felis <br /> facilisi nullam senectus. Aliquam
                                    neque <br /> suspendisse feugiat elit massa.
                                </Typography>
                                <Button
                                    type="button"
                                    variant="default"
                                    isIcon
                                    prefix={<HiExternalLink size={30} />}
                                    onClick={HandleClick}
                                    size="medium"
                                    className="w-full text-base text-center "
                                >
                                    Register Now
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div
                        onClick={() => setPopup(false)}
                        className="absolute cursor-pointer top-4 right-4 flex flex-row-reverse rounded-full  p-4 bg-white"
                    >
                        <HiX size={24} />
                    </div>
                </div>
            )}
            <div className="h-screen w-screen flex flex-col bg-primary-normal-normal justify-center items-center text-secondary-normal-normal font-Poppins">
                <Typography size="7xl" variant="Header" className=" font-bold mb-6">
                    ECS LABORATORY
                </Typography>
                <Typography size="base" variant="Paragraph" className="font-base  ">
                    The world where we explore{" "}
                    <span className="ml-3 border-[1.5px] p-2 px-4 rounded-3xl border-secondary-normal-normal">
                        <motion.span
                            key={bid}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            transition={{ duration: 1 }}
                        >
                            {bid}
                        </motion.span>
                    </span>
                </Typography>
                <div className="absolute left-0 bottom-24 flex flex-row gap-10 w-full h-fit items-center justify-center text-secondary-normal-normal z-[2]">
                    <Link href="">
                        <BiLogoLinkedin className="w-[24px] h-[24px]"></BiLogoLinkedin>
                    </Link>
                    <Link href="https://www.instagram.com/ecs_epits?igsh=MWRvdm13YWNiNmg3bg==">
                        <BiLogoInstagram className="w-[24px] h-[24px]"></BiLogoInstagram>
                    </Link>
                    <Link href="">
                        <BiLogoGmail className="w-[24px] h-[24px]"></BiLogoGmail>
                    </Link>
                    <Link href="">
                        <BiLogoWhatsapp className="w-[24px] h-[24px]"></BiLogoWhatsapp>
                    </Link>
                </div>
                {!popup && (
                    <motion.div className="absolute right-20 bottom-24 flex flex-row-reverse gap-10 w-full h-fit text-white">
                        <motion.button
                            whileHover={{ scale: 1.2 }}
                            onHoverStart={(e) => { }}
                            onHoverEnd={(e) => { }}
                            animate={{ y: [0, -50, 0] }}
                            drag
                            transition={{
                                duration: 1,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatType: "loop",
                                repeatDelay: 0.5,
                                bounce: 0.5,
                            }}
                            onClick={() => setPopup(true)}
                            className="flex flex-col"
                        >
                            <Typography variant="Header" size="xs" className="font-bold">
                                REGISTER NOW!!!
                            </Typography>
                            <Image src="/Frame 279.png" width={143} height={45} alt="gambar" />
                            {flipped ? (
                                <Typography size="6xl" variant="Header" className="text-left font-bold">
                                    GASS
                                </Typography>
                            ) : (
                                <Typography variant="Header" size="6xl" className="text-left font-bold">
                                    2024
                                </Typography>
                            )}
                        </motion.button>
                    </motion.div>
                )}
            </div>
        </Layout>
    );
};

export default Home;
