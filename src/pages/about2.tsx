import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import Button from "@/components/Buttons";
import Card from "@/components/Cards/Card";
import Typography from "@/components/Typography/Typography";
import LecturerCard from "@/components/Cards/LecturerCard";

import Image from "next/image";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { usePathname } from "next/navigation";
import Link from "next/link";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}
function SampleNextArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <Image
      src="/about/right.svg"
      className={`${className} absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer z-10
    w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12`}
      onClick={onClick}
      style={{ ...style, display: "block" }}
      alt="Next"
      width={24}
      height={24}
    />
  );
}



function SamplePrevArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <Image
      src="/about/left.svg"
      className={`${className} absolute top-1/2 left-0 transform -translate-y-1/2 cursor-pointer z-10
    w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12`} // Adjusted sizes for responsive behavior
      onClick={onClick}
      style={{ ...style, display: "block" }}
      alt="Previous"
      width={24}
      height={24}
    />
  );
}

const About = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    "Artificial Intelligence"
  );

  
  const data = [
    {
      Variant: "AssistantCard",
      ImageSrc: "/azzua.png",
      Width: 180,
      Height: 150,
      ImageAlt: "image1",
      Header: "M. W. Azzuhaili",
      Paragraph: "Artificial Intelligence",
      category: "Artificial Intelligence",
      Coordinator: true,
    },
    {
      Variant: "AssistantCard",
      ImageSrc: "/abrar.png",
      Width: 180,
      Height: 150,
      ImageAlt: "M. Abrar",
      Header: "M. Abrar",
      Paragraph: "Artificial Intelligence",
      category: "Artificial Intelligence",
      Coordinator: false,
    },
    {
      Variant: "AssistantCard",
      ImageSrc: "/revi.png",
      Width: 180,
      Height: 150,
      ImageAlt: "M. Revi",
      Header: "M. Revi",
      Paragraph: "Artificial Intelligence",
      category: "Artificial Intelligence",
      Coordinator: false,
    },
    {
      Variant: "AssistantCard",
      ImageSrc: "/safira.png",
      Width: 180,
      Height: 150,
      ImageAlt: "Safira",
      Header: "Safira F.",
      Paragraph: "Artificial Intelligence",
      category: "Artificial Intelligence",
      Coordinator: false,
    },
    {
      Variant: "AssistantCard",
      ImageSrc: "/arfan.png",
      Width: 180,
      Height: 150,
      ImageAlt: "M. Arfan N.",
      Header: "M. Arfan N.",
      Paragraph: "Artificial Intelligence",
      category: "Artificial Intelligence",
      Coordinator: false,
    },
    {
      Variant: "AssistantCard",
      ImageSrc: "/willy.png",
      Width: 180,
      Height: 150,
      ImageAlt: "Willy",
      Header: "I. G. P. William",
      Paragraph: "Artificial Intelligence",
      category: "Artificial Intelligence",
      Coordinator: false,
    },
    {
      Variant: "AssistantCard",
      ImageSrc: "/alifah.png",
      Width: 180,
      Height: 150,
      ImageAlt: "M.",
      Header: "R. N. Alifah",
      Paragraph: "Artificial Intelligence",
      category: "Artificial Intelligence",
      Coordinator: false,
    },
    {
      Variant: "AssistantCard",
      ImageSrc: "/adam.png",
      Width: 180,
      Height: 150,
      ImageAlt: "adam",
      Header: "Adam M.",
      Paragraph: "Embedded Systems",
      category: "Embedded Systems",
      Coordinator: true,
    },
    {
      Variant: "AssistantCard",
      ImageSrc: "/alif.png",
      Width: 180,
      Height: 150,
      ImageAlt: "alif",
      Header: "Alif A.",
      Paragraph: "Embedded Systems",
      category: "Embedded Systems",
      Coordinator: true,
    },
    {
      Variant: "AssistantCard",
      ImageSrc: "/seha.png",
      Width: 180,
      Height: 150,
      ImageAlt: "seha",
      Header: "Seha B.",
      Paragraph: "Embedded Systems",
      category: "Embedded Systems",
      Coordinator: false,
    },
    {
      Variant: "AssistantCard",
      ImageSrc: "/rezi.png",
      Width: 180,
      Height: 150,
      ImageAlt: "rezi",
      Header: "Rezi R.",
      Paragraph: "Embedded Systems",
      category: "Embedded Systems",
      Coordinator: false,
    },
    {
      Variant: "AssistantCard",
      ImageSrc: "/chania.png",
      Width: 180,
      Height: 150,
      ImageAlt: "chania",
      Header: "Chania A.",
      Paragraph: "Embedded Systems",
      category: "Embedded Systems",
      Coordinator: false,
    },
    {
      Variant: "AssistantCard",
      ImageSrc: "/rama.png",
      Width: 180,
      Height: 150,
      ImageAlt: "rama",
      Header: "Rama S. B.",
      Paragraph: "Embedded Systems",
      category: "Embedded Systems",
      Coordinator: false,
    },
    {
      Variant: "AssistantCard",
      ImageSrc: "/andre.png",
      Width: 180,
      Height: 150,
      ImageAlt: "andre",
      Header: "Andre R.",
      Paragraph: "Embedded Systems",
      category: "Embedded Systems",
      Coordinator: false,
    },
    {
      Variant: "AssistantCard",
      ImageSrc: "/ijat.png",
      Width: 180,
      Height: 150,
      ImageAlt: "ijat",
      Header: "Arief I.",
      Paragraph: "Embedded Systems",
      category: "Embedded Systems",
      Coordinator: false,
    },

    {
      Variant: "AssistantCard",
      ImageSrc: "/dzul.png",
      Width: 180,
      Height: 150,
      ImageAlt: "dzul",
      Header: "A. Dzulfikar U.",
      Paragraph: "Internet of Things",
      category: "Internet of Things",
      Coordinator: true,
    },
    {
      Variant: "AssistantCard",
      ImageSrc: "/ghazi.png",
      Width: 180,
      Height: 150,
      ImageAlt: "ghazi",
      Header: "Ghazi A. P.",
      Paragraph: "Internet of Things",
      category: "Internet of Things",
      Coordinator: false,
    },
    {
      Variant: "AssistantCard",
      ImageSrc: "/adinda.png",
      Width: 180,
      Height: 150,
      ImageAlt: "adinda",
      Header: "Adinda K.",
      Paragraph: "Internet of Things",
      category: "Internet of Things",
      Coordinator: false,
    },
    {
      Variant: "AssistantCard",
      ImageSrc: "/dayat.png",
      Width: 180,
      Height: 150,
      ImageAlt: "dayat",
      Header:
        "M. Hidayat T.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ",
      Paragraph: "Internet of Things",
      category: "Internet of Things",
      Coordinator: false,
    },
    {
      Variant: "AssistantCard",
      ImageSrc: "/nando.png",
      Width: 180,
      Height: 150,
      ImageAlt: "nando",
      Header: "Fernando W.",
      Paragraph: "Internet of Things",
      category: "Internet of Things",
      Coordinator: false,
    },
    {
      Variant: "AssistantCard",
      ImageSrc: "/jordan.png",
      Width: 180,
      Height: 150,
      ImageAlt: "jordan",
      Header: "Jordan A.",
      Paragraph: "Internet of Things",
      category: "Internet of Things",
      Coordinator: false,
    },
    {
      Variant: "AssistantCard",
      ImageSrc: "/olif.png",
      Width: 180,
      Height: 150,
      ImageAlt: "olif",
      Header: "Kholifah T.",
      Paragraph: "Internet of Things",
      category: "Internet of Things",
      Coordinator: false,
    },
  ];



  const filteredData = data.filter(
    (card) => card.category === selectedCategory
  );

  return (
    <Layout>
      <div className=" h-full w-full min-h-screen bg-primary-normal-normal overflow-x-hidden">
        <div className="relative h-screen px-8 py-10 w-full ">
          <Image src={`/Background-Default.png`} alt="bg" fill objectFit="cover" className="" />
          {/* Logo and About Us */}
          <section className="lg:relative lg:top-[30%]  ">

            <div className="flex justify-center lg:flex-row flex-col gap-5">
              <div className="w-full  mb-5  lg:w-[420px] h-[300px] rounded-2xl bg-AddsOn-gray border-[0.2px] border-opacity-10 border-AddsOn-white bg-opacity-10 transition-all text-AddsOn-white duration-300 flex items-center justify-center">
                <Image
                  src="/LOGO ECS HD 2.svg"
                  alt="logoecs"
                  className="absolute z-50"
                  width={300}
                  height={250}
                />
              </div>
              <div className="w-full  lg:max-w-[420px] sm:h-[250px] h-full py-8 px-6  rounded-2xl bg-AddsOn-gray border-[0.2px] border-opacity-10 border-AddsOn-white bg-opacity-10 transition-all text-AddsOn-white duration-300">
                <Typography size="xl" variant="Header" className="mb-3">
                  About Us
                </Typography>
                <Typography size="lg" variant="Paragraph" className="">
                  Embedded and Cyber Physical System Laboratory is one of seven
                  laboratories in Engineering Physics Department ITS Surabaya.
                  The laboratory focuses on doing research in the Internet of
                  Things, Artificial Intelligence, and our newest field of
                  interest Embedded System.
                </Typography>

              </div>
            </div>

            <div className="mt-14 lg:mt-0 flex  lg:px-72 w-full">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
               
                className=" scale-125 lg:scale-100"
                breakpoints={{

                  500: {
                    slidesPerView: 1,
                  },
                  1173: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1440: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  }
                }}
              >
                <SwiperSlide>
                  <div className="w-full flex ">
                    <div className="relative m-auto">
                      <Card
                        Variant="GlassHover"
                        Header="Embedded System"
                        Paragraph="Embedded System merupakan devisi yang yang mendalami sistem kontrol yang dirancang spesifik untuk fungsi tertentu menggunakan perangkat keras dan perangkat lunak komputer yang diintegrasikan agar produk yang dihasilkan lebih mudah dan efisien."
                        ImageSrc="/ComponentCard1.svg"
                        ImageAlt=""
                        Width={50}
                        Height={50}
                        className=" "
                      
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex w-full">
                    <div className="m-auto relative">
                      <Card
                        Variant="GlassHover"
                        Header="Internet of Things"
                        Paragraph="Internet of Things merupakan divisi yang mempelajari dan mengembangkan riset terkait sistem kontrol yang terintegrasi dengan internet secara realtime. Selain itu, juga mempelajari tentang pemrograman mikrokontroler dan pemograman web."
                        ImageSrc="/ComponentCard2.svg"
                        ImageAlt=""
                        Width={50}
                        Height={50}
                        className=" "
                      />
                    </div>

                  </div>

                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex w-full">
                    <div className="relative m-auto ">
                      <Card
                        Variant="GlassHover"
                        Header="Artificial Intelligence"
                        Paragraph="Artificial Intelligent merupakan divisi yang berfokus pada ilmu dan rekayasa pembuatan mesin cerdas, melibatkan mekanisme yang memungkinkan sistem komputer, perangkat lunak, program, dan robot untuk 'berpikir' secara cerdas layaknya manusia."
                        ImageSrc="/ComponentCard3.svg"
                        ImageAlt="e"
                        Width={50}
                        Height={50}
                        className=""
                        
                      />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </section>


        </div>

        <section className="h-screen w-screen relative mt-[10rem] pt-[8rem]">
          <Image src={`/Background-Default.png`} alt="bg" fill objectFit="cover" className="" />
          <Image src={`/Vector 1.svg`} alt="vector" width={2000} height={2000} objectFit="cover" className="absolute top-[5%] z-[1]" />
          <Typography
            size="3xl"
            variant="Header"
            className="font-bold md:text-5xl px-10 text-center text-[#AFACA2] relative z-10"
          >
            THE FACULTY MEMBERS OF THE LABORATORY
          </Typography>

          <LecturerCard />
          <div className=" lg:hidden mt-[200px] ">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
              autoplay
              spaceBetween={50}
              slidesPerView={1}
              scrollbar={{ draggable: true }}
              direction="horizontal"
              className="scale-[1.2] md:scale-[1.8]"
            >


              <SwiperSlide className="relative flex-row items-center justify-center w-full  ">
                <div className="m-auto flex w-[251px] h-[334px]">
                  <div className="relative w-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="251"
                      height="334"
                      viewBox="0 -100 251 334"
                      fill="none"
                      className="absolute top-0 left-0"
                    >
                      <rect
                        x="25.7"
                        y="-90"
                        width="194.106"
                        height="194.106"
                        rx="97.0532"
                        fill="url(#paint0_linear_432_161)"
                        fill-opacity="0.1"
                      />
                      <rect
                        x="25.7"
                        y="-90"
                        width="194.106"
                        height="194.106"
                        rx="97.0532"
                        stroke="white"
                        stroke-width="0.292329"
                      />

                      <g filter="url(#filter0_bd_432_169)">
                        <mask id="path-1-inside-1_432_169" fill="white">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M122.239 118.975C180.681 118.975 228.057 71.5986 228.057 13.1569C228.057 10.9676 227.99 8.79374 227.859 6.63736C234.188 9.506 238.591 15.8788 238.591 23.2798V182.111C238.591 192.197 230.414 200.373 220.328 200.373H26.0648C15.9785 200.373 7.802 192.197 7.802 182.111V23.2798C7.802 16.6753 11.3078 10.8897 16.5599 7.6823C16.4675 9.49549 16.4207 11.3207 16.4207 13.1569C16.4207 71.5986 63.7971 118.975 122.239 118.975Z"
                          />
                        </mask>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M122.239 118.975C180.681 118.975 228.057 71.5986 228.057 13.1569C228.057 10.9676 227.99 8.79374 227.859 6.63736C234.188 9.506 238.591 15.8788 238.591 23.2798V182.111C238.591 192.197 230.414 200.373 220.328 200.373H26.0648C15.9785 200.373 7.802 192.197 7.802 182.111V23.2798C7.802 16.6753 11.3078 10.8897 16.5599 7.6823C16.4675 9.49549 16.4207 11.3207 16.4207 13.1569C16.4207 71.5986 63.7971 118.975 122.239 118.975Z"
                          fill="url(#paint0_linear_432_169)"
                          fill-opacity="0.1"
                          shape-rendering="crispEdges"
                        />
                        <path
                          d="M227.859 6.63736L227.915 6.51415L227.711 6.42145L227.724 6.64557L227.859 6.63736ZM16.5599 7.6823L16.695 7.68918L16.7081 7.43332L16.4894 7.56685L16.5599 7.6823ZM227.922 13.1569C227.922 71.5239 180.606 118.84 122.239 118.84V119.11C180.755 119.11 228.192 71.6733 228.192 13.1569H227.922ZM227.724 6.64557C227.855 8.79922 227.922 10.9703 227.922 13.1569H228.192C228.192 10.9648 228.126 8.78826 227.994 6.62915L227.724 6.64557ZM227.803 6.76057C234.086 9.6081 238.455 15.9338 238.455 23.2798H238.726C238.726 15.8238 234.291 9.4039 227.915 6.51415L227.803 6.76057ZM238.455 23.2798V182.111H238.726V23.2798H238.455ZM238.455 182.111C238.455 192.122 230.34 200.238 220.328 200.238V200.509C230.489 200.509 238.726 192.272 238.726 182.111H238.455ZM220.328 200.238H26.0648V200.509H220.328V200.238ZM26.0648 200.238C16.0532 200.238 7.93728 192.122 7.93728 182.111H7.66672C7.66672 192.272 15.9038 200.509 26.0648 200.509V200.238ZM7.93728 182.111V23.2798H7.66672V182.111H7.93728ZM7.93728 23.2798C7.93728 16.7244 11.4168 10.9816 16.6304 7.79775L16.4894 7.56685C11.1987 10.7978 7.66672 16.6263 7.66672 23.2798H7.93728ZM16.556 13.1569C16.556 11.323 16.6027 9.50009 16.695 7.68918L16.4248 7.67541C16.3323 9.4909 16.2855 11.3184 16.2855 13.1569H16.556ZM122.239 118.84C63.8718 118.84 16.556 71.5239 16.556 13.1569H16.2855C16.2855 71.6733 63.7224 119.11 122.239 119.11V118.84Z"
                          fill="white"
                          mask="url(#path-1-inside-1_432_169)"
                        />
                      </g>

                      <defs>
                        <linearGradient
                          id="paint0_linear_432_161"
                          x1="420.688"
                          y1="147.943"
                          x2="83.1439"
                          y2="-86.6507"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#AFACA2" />
                          <stop offset="1" stop-color="#323231" />
                        </linearGradient>

                        <filter
                          id="filter0_bd_432_169"
                          x="0.158691"
                          y="0.346847"
                          width="250.134"
                          height="213.081"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood flood-opacity="0" result="BackgroundImageFix" />
                          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2.0292" />
                          <feComposite
                            in2="SourceAlpha"
                            operator="in"
                            result="effect1_backgroundBlur_432_169"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feMorphology
                            radius="1.3528"
                            operator="dilate"
                            in="SourceAlpha"
                            result="effect2_dropShadow_432_169"
                          />
                          <feOffset dx="2.0292" dy="3.382" />
                          <feGaussianBlur stdDeviation="4.15985" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="effect1_backgroundBlur_432_169"
                            result="effect2_dropShadow_432_169"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect2_dropShadow_432_169"
                            result="shape"
                          />
                        </filter>

                        <linearGradient
                          id="paint0_linear_432_169"
                          x1="240.132"
                          y1="169.715"
                          x2="42.2791"
                          y2="31.8987"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#AFACA2" />
                          <stop offset="1" stop-color="#323231" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <Image
                      src="/dosen/bambang.png"
                      alt=""
                      className="absolute rounded-full object-cover top-[107px] left-[122.9px] transform -translate-x-1/2 -translate-y-1/2 bg-[#AFACA2]"
                      width={165}
                      height={165}
                    />
                    <Typography
                      size="sm"
                      variant="Header"
                      className="text-white absolute top-[242px] left-[122.9px] transform -translate-x-1/2 -translate-y-1/2 text-center w-[200px] "
                    >
                      Dr. Bambang L. Widjiantoro, S.T., M.T.
                    </Typography>
                    <Link target="_blank" href="https://sinta.kemdikbud.go.id/authors/profile/6035511">
                      <Image
                        src="/sinta.svg"
                        alt=""
                        className="absolute top-[275px] left-[122.9px] transform -translate-x-1/2 -translate-y-1/2"
                        height={20}
                        width={20}
                      />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex m-auto  w-[251px] h-[334px]">
                  <div className="relative w-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="251"
                      height="334"
                      viewBox="0 -100 251 334"
                      fill="none"
                      className="absolute top-0 left-0"
                    >
                      <rect
                        x="25.7"
                        y="-90"
                        width="194.106"
                        height="194.106"
                        rx="97.0532"
                        fill="url(#paint0_linear_432_161)"
                        fill-opacity="0.1"
                      />
                      <rect
                        x="25.7"
                        y="-90"
                        width="194.106"
                        height="194.106"
                        rx="97.0532"
                        stroke="white"
                        stroke-width="0.292329"
                      />

                      <g filter="url(#filter0_bd_432_169)">
                        <mask id="path-1-inside-1_432_169" fill="white">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M122.239 118.975C180.681 118.975 228.057 71.5986 228.057 13.1569C228.057 10.9676 227.99 8.79374 227.859 6.63736C234.188 9.506 238.591 15.8788 238.591 23.2798V182.111C238.591 192.197 230.414 200.373 220.328 200.373H26.0648C15.9785 200.373 7.802 192.197 7.802 182.111V23.2798C7.802 16.6753 11.3078 10.8897 16.5599 7.6823C16.4675 9.49549 16.4207 11.3207 16.4207 13.1569C16.4207 71.5986 63.7971 118.975 122.239 118.975Z"
                          />
                        </mask>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M122.239 118.975C180.681 118.975 228.057 71.5986 228.057 13.1569C228.057 10.9676 227.99 8.79374 227.859 6.63736C234.188 9.506 238.591 15.8788 238.591 23.2798V182.111C238.591 192.197 230.414 200.373 220.328 200.373H26.0648C15.9785 200.373 7.802 192.197 7.802 182.111V23.2798C7.802 16.6753 11.3078 10.8897 16.5599 7.6823C16.4675 9.49549 16.4207 11.3207 16.4207 13.1569C16.4207 71.5986 63.7971 118.975 122.239 118.975Z"
                          fill="url(#paint0_linear_432_169)"
                          fill-opacity="0.1"
                          shape-rendering="crispEdges"
                        />
                        <path
                          d="M227.859 6.63736L227.915 6.51415L227.711 6.42145L227.724 6.64557L227.859 6.63736ZM16.5599 7.6823L16.695 7.68918L16.7081 7.43332L16.4894 7.56685L16.5599 7.6823ZM227.922 13.1569C227.922 71.5239 180.606 118.84 122.239 118.84V119.11C180.755 119.11 228.192 71.6733 228.192 13.1569H227.922ZM227.724 6.64557C227.855 8.79922 227.922 10.9703 227.922 13.1569H228.192C228.192 10.9648 228.126 8.78826 227.994 6.62915L227.724 6.64557ZM227.803 6.76057C234.086 9.6081 238.455 15.9338 238.455 23.2798H238.726C238.726 15.8238 234.291 9.4039 227.915 6.51415L227.803 6.76057ZM238.455 23.2798V182.111H238.726V23.2798H238.455ZM238.455 182.111C238.455 192.122 230.34 200.238 220.328 200.238V200.509C230.489 200.509 238.726 192.272 238.726 182.111H238.455ZM220.328 200.238H26.0648V200.509H220.328V200.238ZM26.0648 200.238C16.0532 200.238 7.93728 192.122 7.93728 182.111H7.66672C7.66672 192.272 15.9038 200.509 26.0648 200.509V200.238ZM7.93728 182.111V23.2798H7.66672V182.111H7.93728ZM7.93728 23.2798C7.93728 16.7244 11.4168 10.9816 16.6304 7.79775L16.4894 7.56685C11.1987 10.7978 7.66672 16.6263 7.66672 23.2798H7.93728ZM16.556 13.1569C16.556 11.323 16.6027 9.50009 16.695 7.68918L16.4248 7.67541C16.3323 9.4909 16.2855 11.3184 16.2855 13.1569H16.556ZM122.239 118.84C63.8718 118.84 16.556 71.5239 16.556 13.1569H16.2855C16.2855 71.6733 63.7224 119.11 122.239 119.11V118.84Z"
                          fill="white"
                          mask="url(#path-1-inside-1_432_169)"
                        />
                      </g>

                      <defs>
                        <linearGradient
                          id="paint0_linear_432_161"
                          x1="420.688"
                          y1="147.943"
                          x2="83.1439"
                          y2="-86.6507"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#AFACA2" />
                          <stop offset="1" stop-color="#323231" />
                        </linearGradient>

                        <filter
                          id="filter0_bd_432_169"
                          x="0.158691"
                          y="0.346847"
                          width="250.134"
                          height="213.081"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood flood-opacity="0" result="BackgroundImageFix" />
                          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2.0292" />
                          <feComposite
                            in2="SourceAlpha"
                            operator="in"
                            result="effect1_backgroundBlur_432_169"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feMorphology
                            radius="1.3528"
                            operator="dilate"
                            in="SourceAlpha"
                            result="effect2_dropShadow_432_169"
                          />
                          <feOffset dx="2.0292" dy="3.382" />
                          <feGaussianBlur stdDeviation="4.15985" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="effect1_backgroundBlur_432_169"
                            result="effect2_dropShadow_432_169"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect2_dropShadow_432_169"
                            result="shape"
                          />
                        </filter>

                        <linearGradient
                          id="paint0_linear_432_169"
                          x1="240.132"
                          y1="169.715"
                          x2="42.2791"
                          y2="31.8987"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#AFACA2" />
                          <stop offset="1" stop-color="#323231" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <Image
                      src="/dosen/syamsul.png"
                      alt=""
                      className="absolute  rounded-full object-cover top-[107px] left-[122.9px] transform -translate-x-1/2 -translate-y-1/2 bg-[#AFACA2]"
                      width={165}
                      height={165}
                    />
                    <Typography
                      size="sm"
                      variant="Header"
                      className="text-white absolute top-[242px] left-[122.9px] transform -translate-x-1/2 -translate-y-1/2 text-center w-[250px] "
                    >
                      Dr. Ir. Syamsul Arifin, M.T.
                    </Typography>
                    <Link target="_blank" href="http://sinta3.kemdikbud.go.id/authors/profile/6042960">
                      <Image
                        src="/sinta.svg"
                        alt=""
                        className="absolute top-[275px] left-[122.9px] transform -translate-x-1/2 -translate-y-1/2"
                        width={20}
                        height={20}
                      />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex m-auto w-[251px] h-[334px]">
                  <div className="relative w-full  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="251"
                      height="334"
                      viewBox="0 -100 251 334"
                      fill="none"
                      className="absolute top-0 left-0"
                    >
                      <rect
                        x="25.7"
                        y="-90"
                        width="194.106"
                        height="194.106"
                        rx="97.0532"
                        fill="url(#paint0_linear_432_161)"
                        fill-opacity="0.1"
                      />
                      <rect
                        x="25.7"
                        y="-90"
                        width="194.106"
                        height="194.106"
                        rx="97.0532"
                        stroke="white"
                        stroke-width="0.292329"
                      />

                      <g filter="url(#filter0_bd_432_169)">
                        <mask id="path-1-inside-1_432_169" fill="white">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M122.239 118.975C180.681 118.975 228.057 71.5986 228.057 13.1569C228.057 10.9676 227.99 8.79374 227.859 6.63736C234.188 9.506 238.591 15.8788 238.591 23.2798V182.111C238.591 192.197 230.414 200.373 220.328 200.373H26.0648C15.9785 200.373 7.802 192.197 7.802 182.111V23.2798C7.802 16.6753 11.3078 10.8897 16.5599 7.6823C16.4675 9.49549 16.4207 11.3207 16.4207 13.1569C16.4207 71.5986 63.7971 118.975 122.239 118.975Z"
                          />
                        </mask>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M122.239 118.975C180.681 118.975 228.057 71.5986 228.057 13.1569C228.057 10.9676 227.99 8.79374 227.859 6.63736C234.188 9.506 238.591 15.8788 238.591 23.2798V182.111C238.591 192.197 230.414 200.373 220.328 200.373H26.0648C15.9785 200.373 7.802 192.197 7.802 182.111V23.2798C7.802 16.6753 11.3078 10.8897 16.5599 7.6823C16.4675 9.49549 16.4207 11.3207 16.4207 13.1569C16.4207 71.5986 63.7971 118.975 122.239 118.975Z"
                          fill="url(#paint0_linear_432_169)"
                          fill-opacity="0.1"
                          shape-rendering="crispEdges"
                        />
                        <path
                          d="M227.859 6.63736L227.915 6.51415L227.711 6.42145L227.724 6.64557L227.859 6.63736ZM16.5599 7.6823L16.695 7.68918L16.7081 7.43332L16.4894 7.56685L16.5599 7.6823ZM227.922 13.1569C227.922 71.5239 180.606 118.84 122.239 118.84V119.11C180.755 119.11 228.192 71.6733 228.192 13.1569H227.922ZM227.724 6.64557C227.855 8.79922 227.922 10.9703 227.922 13.1569H228.192C228.192 10.9648 228.126 8.78826 227.994 6.62915L227.724 6.64557ZM227.803 6.76057C234.086 9.6081 238.455 15.9338 238.455 23.2798H238.726C238.726 15.8238 234.291 9.4039 227.915 6.51415L227.803 6.76057ZM238.455 23.2798V182.111H238.726V23.2798H238.455ZM238.455 182.111C238.455 192.122 230.34 200.238 220.328 200.238V200.509C230.489 200.509 238.726 192.272 238.726 182.111H238.455ZM220.328 200.238H26.0648V200.509H220.328V200.238ZM26.0648 200.238C16.0532 200.238 7.93728 192.122 7.93728 182.111H7.66672C7.66672 192.272 15.9038 200.509 26.0648 200.509V200.238ZM7.93728 182.111V23.2798H7.66672V182.111H7.93728ZM7.93728 23.2798C7.93728 16.7244 11.4168 10.9816 16.6304 7.79775L16.4894 7.56685C11.1987 10.7978 7.66672 16.6263 7.66672 23.2798H7.93728ZM16.556 13.1569C16.556 11.323 16.6027 9.50009 16.695 7.68918L16.4248 7.67541C16.3323 9.4909 16.2855 11.3184 16.2855 13.1569H16.556ZM122.239 118.84C63.8718 118.84 16.556 71.5239 16.556 13.1569H16.2855C16.2855 71.6733 63.7224 119.11 122.239 119.11V118.84Z"
                          fill="white"
                          mask="url(#path-1-inside-1_432_169)"
                        />
                      </g>

                      <defs>
                        <linearGradient
                          id="paint0_linear_432_161"
                          x1="420.688"
                          y1="147.943"
                          x2="83.1439"
                          y2="-86.6507"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#AFACA2" />
                          <stop offset="1" stop-color="#323231" />
                        </linearGradient>

                        <filter
                          id="filter0_bd_432_169"
                          x="0.158691"
                          y="0.346847"
                          width="250.134"
                          height="213.081"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood flood-opacity="0" result="BackgroundImageFix" />
                          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2.0292" />
                          <feComposite
                            in2="SourceAlpha"
                            operator="in"
                            result="effect1_backgroundBlur_432_169"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feMorphology
                            radius="1.3528"
                            operator="dilate"
                            in="SourceAlpha"
                            result="effect2_dropShadow_432_169"
                          />
                          <feOffset dx="2.0292" dy="3.382" />
                          <feGaussianBlur stdDeviation="4.15985" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="effect1_backgroundBlur_432_169"
                            result="effect2_dropShadow_432_169"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect2_dropShadow_432_169"
                            result="shape"
                          />
                        </filter>

                        <linearGradient
                          id="paint0_linear_432_169"
                          x1="240.132"
                          y1="169.715"
                          x2="42.2791"
                          y2="31.8987"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#AFACA2" />
                          <stop offset="1" stop-color="#323231" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <Image
                      src="/dosen/kathrine.png"
                      alt=""
                      className="absolute  rounded-full object-cover top-[107px] left-[122.9px] transform -translate-x-1/2 -translate-y-1/2 bg-[#AFACA2]"
                      width={165}
                      height={165}
                    />
                    <Typography
                      size="sm"
                      variant="Header"
                      className="text-white absolute top-[242px] left-[122.9px] transform -translate-x-1/2 -translate-y-1/2 text-center w-[200px] "
                    >
                      Prof. Dr. Katherin Indriawati, S.T, M.T.
                    </Typography>
                    <Link target="_blank" href="https://sinta.kemdikbud.go.id/authors/profile/5979423">
                      <Image
                        src="/sinta.svg"
                        alt=""
                        className="absolute top-[275px] left-[122.9px] transform -translate-x-1/2 -translate-y-1/2"
                        width={20}
                        height={20}
                      />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex m-auto w-[251px] h-[334px]">

                  <div className=" w-full relative ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="251"
                      height="334"
                      viewBox="0 -100 251 334"
                      fill="none"
                      className="absolute top-0 left-0"
                    >
                      <rect
                        x="25.7"
                        y="-90"
                        width="194.106"
                        height="194.106"
                        rx="97.0532"
                        fill="url(#paint0_linear_432_161)"
                        fill-opacity="0.1"
                      />
                      <rect
                        x="25.7"
                        y="-90"
                        width="194.106"
                        height="194.106"
                        rx="97.0532"
                        stroke="white"
                        stroke-width="0.292329"
                      />

                      <g filter="url(#filter0_bd_432_169)">
                        <mask id="path-1-inside-1_432_169" fill="white">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M122.239 118.975C180.681 118.975 228.057 71.5986 228.057 13.1569C228.057 10.9676 227.99 8.79374 227.859 6.63736C234.188 9.506 238.591 15.8788 238.591 23.2798V182.111C238.591 192.197 230.414 200.373 220.328 200.373H26.0648C15.9785 200.373 7.802 192.197 7.802 182.111V23.2798C7.802 16.6753 11.3078 10.8897 16.5599 7.6823C16.4675 9.49549 16.4207 11.3207 16.4207 13.1569C16.4207 71.5986 63.7971 118.975 122.239 118.975Z"
                          />
                        </mask>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M122.239 118.975C180.681 118.975 228.057 71.5986 228.057 13.1569C228.057 10.9676 227.99 8.79374 227.859 6.63736C234.188 9.506 238.591 15.8788 238.591 23.2798V182.111C238.591 192.197 230.414 200.373 220.328 200.373H26.0648C15.9785 200.373 7.802 192.197 7.802 182.111V23.2798C7.802 16.6753 11.3078 10.8897 16.5599 7.6823C16.4675 9.49549 16.4207 11.3207 16.4207 13.1569C16.4207 71.5986 63.7971 118.975 122.239 118.975Z"
                          fill="url(#paint0_linear_432_169)"
                          fill-opacity="0.1"
                          shape-rendering="crispEdges"
                        />
                        <path
                          d="M227.859 6.63736L227.915 6.51415L227.711 6.42145L227.724 6.64557L227.859 6.63736ZM16.5599 7.6823L16.695 7.68918L16.7081 7.43332L16.4894 7.56685L16.5599 7.6823ZM227.922 13.1569C227.922 71.5239 180.606 118.84 122.239 118.84V119.11C180.755 119.11 228.192 71.6733 228.192 13.1569H227.922ZM227.724 6.64557C227.855 8.79922 227.922 10.9703 227.922 13.1569H228.192C228.192 10.9648 228.126 8.78826 227.994 6.62915L227.724 6.64557ZM227.803 6.76057C234.086 9.6081 238.455 15.9338 238.455 23.2798H238.726C238.726 15.8238 234.291 9.4039 227.915 6.51415L227.803 6.76057ZM238.455 23.2798V182.111H238.726V23.2798H238.455ZM238.455 182.111C238.455 192.122 230.34 200.238 220.328 200.238V200.509C230.489 200.509 238.726 192.272 238.726 182.111H238.455ZM220.328 200.238H26.0648V200.509H220.328V200.238ZM26.0648 200.238C16.0532 200.238 7.93728 192.122 7.93728 182.111H7.66672C7.66672 192.272 15.9038 200.509 26.0648 200.509V200.238ZM7.93728 182.111V23.2798H7.66672V182.111H7.93728ZM7.93728 23.2798C7.93728 16.7244 11.4168 10.9816 16.6304 7.79775L16.4894 7.56685C11.1987 10.7978 7.66672 16.6263 7.66672 23.2798H7.93728ZM16.556 13.1569C16.556 11.323 16.6027 9.50009 16.695 7.68918L16.4248 7.67541C16.3323 9.4909 16.2855 11.3184 16.2855 13.1569H16.556ZM122.239 118.84C63.8718 118.84 16.556 71.5239 16.556 13.1569H16.2855C16.2855 71.6733 63.7224 119.11 122.239 119.11V118.84Z"
                          fill="white"
                          mask="url(#path-1-inside-1_432_169)"
                        />
                      </g>

                      <defs>
                        <linearGradient
                          id="paint0_linear_432_161"
                          x1="420.688"
                          y1="147.943"
                          x2="83.1439"
                          y2="-86.6507"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#AFACA2" />
                          <stop offset="1" stop-color="#323231" />
                        </linearGradient>

                        <filter
                          id="filter0_bd_432_169"
                          x="0.158691"
                          y="0.346847"
                          width="250.134"
                          height="213.081"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood flood-opacity="0" result="BackgroundImageFix" />
                          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2.0292" />
                          <feComposite
                            in2="SourceAlpha"
                            operator="in"
                            result="effect1_backgroundBlur_432_169"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feMorphology
                            radius="1.3528"
                            operator="dilate"
                            in="SourceAlpha"
                            result="effect2_dropShadow_432_169"
                          />
                          <feOffset dx="2.0292" dy="3.382" />
                          <feGaussianBlur stdDeviation="4.15985" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="effect1_backgroundBlur_432_169"
                            result="effect2_dropShadow_432_169"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect2_dropShadow_432_169"
                            result="shape"
                          />
                        </filter>

                        <linearGradient
                          id="paint0_linear_432_169"
                          x1="240.132"
                          y1="169.715"
                          x2="42.2791"
                          y2="31.8987"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#AFACA2" />
                          <stop offset="1" stop-color="#323231" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <Image
                      src="/dosen/suyanto.png"
                      alt=""
                      className="absolute rounded-full object-cover top-[107px] left-[122.9px] transform -translate-x-1/2 -translate-y-1/2 bg-[#AFACA2]"
                      width={165}
                      height={165}
                    />
                    <Typography
                      size="sm"
                      variant="Header"
                      className="text-white absolute top-[242px] left-[122.9px] transform -translate-x-1/2 -translate-y-1/2 text-center w-[250px] "
                    >
                      Dr. Suyanto, S.T, M.T.
                    </Typography>
                    <Link target="_blank" href="https://sinta.kemdikbud.go.id/authors/profile/6658698">
                      <Image
                        src="/sinta.svg"
                        alt=""
                        className="absolute top-[275px] left-[122.9px] transform -translate-x-1/2 -translate-y-1/2"
                        width={20}
                        height={20}
                      />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" flex m-auto w-[251px] h-[334px]">
                  <div className="relative w-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="251"
                      height="334"
                      viewBox="0 -100 251 334"
                      fill="none"
                      className="absolute top-0 left-0"
                    >
                      <rect
                        x="25.7"
                        y="-90"
                        width="194.106"
                        height="194.106"
                        rx="97.0532"
                        fill="url(#paint0_linear_432_161)"
                        fill-opacity="0.1"
                      />
                      <rect
                        x="25.7"
                        y="-90"
                        width="194.106"
                        height="194.106"
                        rx="97.0532"
                        stroke="white"
                        stroke-width="0.292329"
                      />

                      <g filter="url(#filter0_bd_432_169)">
                        <mask id="path-1-inside-1_432_169" fill="white">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M122.239 118.975C180.681 118.975 228.057 71.5986 228.057 13.1569C228.057 10.9676 227.99 8.79374 227.859 6.63736C234.188 9.506 238.591 15.8788 238.591 23.2798V182.111C238.591 192.197 230.414 200.373 220.328 200.373H26.0648C15.9785 200.373 7.802 192.197 7.802 182.111V23.2798C7.802 16.6753 11.3078 10.8897 16.5599 7.6823C16.4675 9.49549 16.4207 11.3207 16.4207 13.1569C16.4207 71.5986 63.7971 118.975 122.239 118.975Z"
                          />
                        </mask>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M122.239 118.975C180.681 118.975 228.057 71.5986 228.057 13.1569C228.057 10.9676 227.99 8.79374 227.859 6.63736C234.188 9.506 238.591 15.8788 238.591 23.2798V182.111C238.591 192.197 230.414 200.373 220.328 200.373H26.0648C15.9785 200.373 7.802 192.197 7.802 182.111V23.2798C7.802 16.6753 11.3078 10.8897 16.5599 7.6823C16.4675 9.49549 16.4207 11.3207 16.4207 13.1569C16.4207 71.5986 63.7971 118.975 122.239 118.975Z"
                          fill="url(#paint0_linear_432_169)"
                          fill-opacity="0.1"
                          shape-rendering="crispEdges"
                        />
                        <path
                          d="M227.859 6.63736L227.915 6.51415L227.711 6.42145L227.724 6.64557L227.859 6.63736ZM16.5599 7.6823L16.695 7.68918L16.7081 7.43332L16.4894 7.56685L16.5599 7.6823ZM227.922 13.1569C227.922 71.5239 180.606 118.84 122.239 118.84V119.11C180.755 119.11 228.192 71.6733 228.192 13.1569H227.922ZM227.724 6.64557C227.855 8.79922 227.922 10.9703 227.922 13.1569H228.192C228.192 10.9648 228.126 8.78826 227.994 6.62915L227.724 6.64557ZM227.803 6.76057C234.086 9.6081 238.455 15.9338 238.455 23.2798H238.726C238.726 15.8238 234.291 9.4039 227.915 6.51415L227.803 6.76057ZM238.455 23.2798V182.111H238.726V23.2798H238.455ZM238.455 182.111C238.455 192.122 230.34 200.238 220.328 200.238V200.509C230.489 200.509 238.726 192.272 238.726 182.111H238.455ZM220.328 200.238H26.0648V200.509H220.328V200.238ZM26.0648 200.238C16.0532 200.238 7.93728 192.122 7.93728 182.111H7.66672C7.66672 192.272 15.9038 200.509 26.0648 200.509V200.238ZM7.93728 182.111V23.2798H7.66672V182.111H7.93728ZM7.93728 23.2798C7.93728 16.7244 11.4168 10.9816 16.6304 7.79775L16.4894 7.56685C11.1987 10.7978 7.66672 16.6263 7.66672 23.2798H7.93728ZM16.556 13.1569C16.556 11.323 16.6027 9.50009 16.695 7.68918L16.4248 7.67541C16.3323 9.4909 16.2855 11.3184 16.2855 13.1569H16.556ZM122.239 118.84C63.8718 118.84 16.556 71.5239 16.556 13.1569H16.2855C16.2855 71.6733 63.7224 119.11 122.239 119.11V118.84Z"
                          fill="white"
                          mask="url(#path-1-inside-1_432_169)"
                        />
                      </g>

                      <defs>
                        <linearGradient
                          id="paint0_linear_432_161"
                          x1="420.688"
                          y1="147.943"
                          x2="83.1439"
                          y2="-86.6507"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#AFACA2" />
                          <stop offset="1" stop-color="#323231" />
                        </linearGradient>

                        <filter
                          id="filter0_bd_432_169"
                          x="0.158691"
                          y="0.346847"
                          width="250.134"
                          height="213.081"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood flood-opacity="0" result="BackgroundImageFix" />
                          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2.0292" />
                          <feComposite
                            in2="SourceAlpha"
                            operator="in"
                            result="effect1_backgroundBlur_432_169"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feMorphology
                            radius="1.3528"
                            operator="dilate"
                            in="SourceAlpha"
                            result="effect2_dropShadow_432_169"
                          />
                          <feOffset dx="2.0292" dy="3.382" />
                          <feGaussianBlur stdDeviation="4.15985" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="effect1_backgroundBlur_432_169"
                            result="effect2_dropShadow_432_169"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect2_dropShadow_432_169"
                            result="shape"
                          />
                        </filter>

                        <linearGradient
                          id="paint0_linear_432_169"
                          x1="240.132"
                          y1="169.715"
                          x2="42.2791"
                          y2="31.8987"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#AFACA2" />
                          <stop offset="1" stop-color="#323231" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <Image
                      src="/dosen/andi.png"
                      alt=""
                      className="absolute rounded-full object-cover top-[107px] left-[122.9px] transform -translate-x-1/2 -translate-y-1/2 bg-[#AFACA2]"
                      width={165}
                      height={165}
                    />
                    <Typography
                      size="sm"
                      variant="Header"
                      className="text-white absolute top-[242px] left-[122.9px] transform -translate-x-1/2 -translate-y-1/2 text-center w-[250px] "
                    >
                      Andi Rahmadiansah, S.T, M.T.
                    </Typography>
                    <Link target="_blank" href="https://sinta.kemdikbud.go.id/authors/profile/29804">
                      <Image
                        src="/sinta.svg"
                        alt=""
                        className="absolute top-[275px] left-[122.9px] transform -translate-x-1/2 -translate-y-1/2"
                        width={20}
                        height={20}
                      />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

            </Swiper>
          </div>
        </section>
        <div className="hidden lg:flex relative h-screen w-screen mt-[10rem] pt-[2rem]">
          <Image src={`/Background-Default.png`} alt="bg" fill objectFit="cover" className="" />
          <Image src={`/Vector 2.svg`} alt="vector" width={2000} height={2000} objectFit="cover" className="absolute z-[1]" />
          <div className="flex flex-col w-full ">
            <Typography
              size="2xl"
              variant="Paragraph"
              className=" text-center  text-[#AFACA2]"
            >
              Lets introduce our
            </Typography>
            <Typography
              size="7xl"
              variant="Header"
              className="font-bold text-center mt-4 relative z-10 text-[#AFACA2]"
            >
              LABORATORY <br />ASSISTANT
            </Typography>
          </div>
          <Image src="/about/fotoecs.png" alt="" className="absolute  -bottom-20  " width={1700} height={720} />
        </div>


        <section className="relative w-full h-full  mt-[15rem] pt-[5rem] ">
          <Image src={`/Background-Default.png`} alt="bg" fill objectFit="cover" className="" />
          <div className="flex flex-col items-center w-full justify-center mx-auto">
            <Typography
              size="4xl"
              variant="Header"
              className="md:text-5xl lg:text-7xl mb-10 font-bold mt-4 text-secondary-normal-normal"
            >
              MEET THE MEMBER
            </Typography>
            <Typography
              size="xl"
              variant="Paragraph"
              className="  px-32 text-secondary-normal-normal hidden lg:block text-center"
            >
              Discover our team - a dedicated, and passionate group of excellence with variety of interest. From seasoned experts to fresh innovators, work together to break boundaries. Lets get to know them!*
            </Typography>
          </div>

          <div className="w-full flex flex-row justify-center px-20 lg:px-52 mt-10">

            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={10}
              slidesPerView={1}

              breakpoints={{

                500: {
                  slidesPerView: 1,
                  spaceBetween:1,
                },

                800: {
                  slidesPerView: 2,
                  spaceBetween:1,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 5,
                }
              }}
              className="scale-125 "
            >

              <SwiperSlide>
                <div className="flex w-full mb-10">
                  <div className="relative mx-auto ">

                    <Button
                      variant={"outline"}
                      size="large"
                      type="button"
                      className={`${selectedCategory === "Artificial Intelligence" ? 'bg-white text-black' : 'bg-transparent'
                        }`}
                      onClick={() => setSelectedCategory("Artificial Intelligence")}

                    >
                      Artificial Intelligence
                    </Button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex w-full mb-10">
                  <div className="relative mx-auto ">
                    <Button
                      variant={"outline"}
                      size="large"
                      type="button"
                      className={`${selectedCategory === "Embedded Systems" ? 'bg-white text-black' : 'bg-transparent'
                        }`}
                      onClick={() => setSelectedCategory("Embedded Systems")}
                    >
                      Embedded Systems
                    </Button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex w-full mb-10">
                  <div className="relative mx-auto ">
                    <Button
                      variant={"outline"}
                      size="large"
                      type="button"
                      className={`${selectedCategory === "Internet of Things" ? 'bg-white text-black' : 'bg-transparent'
                        }`}
                      onClick={() => setSelectedCategory("Internet of Things")}
                    >
                      Internet of Things
                    </Button>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

          </div>
          <div className=" px-10 pb-32 md:px-28 lg:px-48">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{

                700: {
                  slidesPerView: 1,
                },

                800: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                }
              }}
              className="scale-125 mt-20 lg:scale-100 "
            >
              {filteredData.map((card, index) => (
                <SwiperSlide key={index}>
                  <div className="flex w-full">
                    <div className="relative mx-auto">
                      <Card
                        Variant="AssistantCard"
                        AddImage
                        ImageSrc={card.ImageSrc}
                        Width={card.Width}
                        Height={card.Height}
                        ImageAlt={card.ImageAlt}
                        Header={card.Header}
                        Paragraph={card.Paragraph}
                        Coordinator={card.Coordinator}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}

            </Swiper>
          </div>

        </section>
      </div>


    </Layout >
  );
};

export default About;
