import React, { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import Button from "@/components/Buttons";
import Card from "@/components/Cards/Card";
import Typography from "@/components/Typography/Typography";
import LecturerCard from "@/components/Cards/LecturerCard";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src="/about/right.svg"
      className={`${className} absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer z-10
    w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12`} // Adjusted sizes for responsive behavior
      onClick={onClick}
      style={{ ...style, display: "block" }}
      alt="Next"
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src="/about/left.svg"
      className={`${className} absolute top-1/2 left-0 transform -translate-y-1/2 cursor-pointer z-10
    w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12`} // Adjusted sizes for responsive behavior
      onClick={onClick}
      style={{ ...style, display: "block" }}
      alt="Previous"
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [showLayout, setShowLayout] = useState(true);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     // Get the "About Us" section position
  //     const aboutUsSection = document.getElementById("about-us-section");
  //     if (aboutUsSection) {
  //       const { top } = aboutUsSection.getBoundingClientRect();
  //       // Toggle the Layout visibility based on the scroll position
  //       setShowLayout(top > 50); // Adjust the threshold as needed
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const filteredData = data.filter(
    (card) => card.category === selectedCategory
  );
  // console.log("Selected Category:", selectedCategory);
  // console.log("Filtered Data:", filteredData);
  return (
    <div className="h-screen w-screen bg-primary-normal-normal overflow-x-hidden">
      <Layout className="fixed top-0">
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4 px-4 md:px-8 lg:px-16 mt-8">
          {/* Logo and About Us */}
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 items-center lg:items-start">
            <div className="w-full lg:w-[358px] h-[240px] rounded-2xl bg-AddsOn-gray border-[0.2px] border-opacity-10 border-AddsOn-white bg-opacity-10 transition-all text-AddsOn-white duration-300 flex items-center justify-center">
              <img
                src="/LOGO ECS HD 2.svg"
                alt="logoecs"
                className="max-w-full h-auto"
              />
            </div>
            <div className="w-full lg:w-[420px] h-auto lg:h-[180px] rounded-2xl bg-AddsOn-gray border-[0.2px] border-opacity-10 border-AddsOn-white bg-opacity-10 transition-all text-AddsOn-white duration-300">
              <div className="flex flex-col items-start m-4 px-2">
                <Typography size="xl" variant="Header" className="mt-4">
                  About Us
                </Typography>
                <Typography size="xs" variant="Paragraph" className="mt-2">
                  Embedded and Cyber Physical System Laboratory is one of seven
                  laboratories in Engineering Physics Department ITS Surabaya.
                  The laboratory focuses on doing research in the Internet of
                  Things, Artificial Intelligence, and our newest field of
                  interest Embedded System.
                </Typography>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-">
            <div>
              <Card
                Variant="GlassHover"
                Header="Embedded System"
                Paragraph="Embedded System merupakan devisi yang yang mendalami sistem kontrol yang dirancang spesifik untuk fungsi tertentu menggunakan perangkat keras dan perangkat lunak komputer yang diintegrasikan agar produk yang dihasilkan lebih mudah dan efisien."
                ImageSrc="/ComponentCard1.svg"
                ImageAlt=""
                Width={50}
                Height={50}
              />
            </div>
            <div>
              <Card
                Variant="GlassHover"
                Header="Internet of Things"
                Paragraph="Internet of Things merupakan divisi yang mempelajari dan mengembangkan riset terkait sistem kontrol yang terintegrasi dengan internet secara realtime. Selain itu, juga mempelajari tentang pemrograman mikrokontroler dan pemograman web."
                ImageSrc="/ComponentCard2.svg"
                ImageAlt=""
                Width={50}
                Height={50}
              />
            </div>
            <div>
              <Card
                Variant="GlassHover"
                Header="Artificial Intelligence"
                Paragraph="Artificial Intelligent merupakan divisi yang berfokus pada ilmu dan rekayasa pembuatan mesin cerdas, melibatkan mekanisme yang memungkinkan sistem komputer, perangkat lunak, program, dan robot untuk 'berpikir' secara cerdas layaknya manusia."
                ImageSrc="/ComponentCard3.svg"
                ImageAlt="e"
                Width={50}
                Height={50}
              />
            </div>
          </div>
        </div>
      </Layout>
      <div className="p-12 ">
        <Typography
          size="7xl"
          variant="Header"
          className="flex text-center text-[#AFACA2]"
        >
          THE FACULTY MEMBERS OF THE LABORATORY
        </Typography>

        <LecturerCard />
      </div>
      <div className="mt-[70px] ">
        <div className="">
          <Typography
            size="xs"
            variant="Paragraph"
            className="flex justify-center text-center  text-[#AFACA2]"
          >
            Let's introduce our
          </Typography>
          <Typography
            size="7xl"
            variant="Header"
            className="flex justify-center text-center mt-4 text-[#AFACA2]"
          >
            LABORATORY ASSISTANT
          </Typography>
        </div>
        <div>
          <img src="/about/fotoecs.png" alt="" className="mt-10 w-full" />
        </div>
      </div>

      <div className="mt-[140px]">
        <div>
          <Typography
            size="7xl"
            variant="Header"
            className="flex justify-center text-center mt-4 text-[#AFACA2]"
          >
            About Us
          </Typography>
        </div>
        <div className="px-32">
          <Typography
            size="sm"
            variant="Paragraph"
            className="flex justify-center text-center mt-4 text-[#AFACA2]"
          >
            Embedded and Cyber Physical System Laboratory is one of seven
            laboratories in Engineering Physics Department ITS Surabaya. The
            laboratory focuses on doing research in the Internet of Things,
            Artificial Intelligence, and our newest field of interest Embedded
            System.
          </Typography>
        </div>

        <div className="p-21 flex flex-col items-center justify-center mt-6">
          <div className="grid grid-cols-3 gap-2 mb-8">
            <Button
              variant={"outline"}
              size="large"
              type="primary"
              className="w-fit"
              onClick={() => setSelectedCategory("Artificial Intelligence")}
            >
              Artificial Intelligence
            </Button>
            <Button
              variant={"outline"}
              size="large"
              type="primary"
              className="w-fit"
              onClick={() => setSelectedCategory("Embedded Systems")}
            >
              Embedded Systems
            </Button>
            <Button
              variant={"outline"}
              size="large"
              type="primary"
              className="w-fit"
              onClick={() => setSelectedCategory("Internet of Things")}
            >
              Internet of Things
            </Button>
          </div>
          <div className="slider-container px-48 max-w-7xl mx-auto">
            <Slider {...settings} className="mt-6">
              {filteredData.map((card, index) => (
                <div key={index} className=" px-10">
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
                    className="object-cover"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
