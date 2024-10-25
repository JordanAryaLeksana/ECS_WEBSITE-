import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Typography from "@/components/Typography/Typography";
import clsxm from "@/lib/clsxm";
import Button from "@/components/Buttons";
import { HiOutlineHome } from "react-icons/hi";
import { useRouter } from "next/navigation";
export default function Successful() {

  const [showRegist,setShowRegist] = useState(false)
  const router = useRouter();
  const HandleClick = () => {
    router.push("/");
  };
  useEffect(() => {
    if(typeof window !== undefined){
      const dataUser=  localStorage.getItem("oprec");
      if(dataUser == null || dataUser == "undefined"){
        router.push("/")
        alert("You Must Registration First")
      } else {
        setShowRegist(true)
      }
    }
  },[router])
    return showRegist ? (
      <div
      className={clsxm([
        "w-full h-full m-auto min-h-screen flex flex-col justify-center",
        "bg-primary-normal-normal",
      ])}
    >
      <div className=" w-[80vw] h-[80vh] flex flex-col m-auto items-center md:items-start justify-center">
        <div className="flex flex-col md:flex-row items-center justify-between w-[60%] gap-10 mb-10">
          <Typography
            variant="Paragraph"
            size="4xl"
            className="text-white font-bold"
          >
            Thankyou For
            <br />
            <span className="text-accent-warning-600">
              Submitting<span className="text-white">.</span>
            </span>
          </Typography>
          <Image
            src="/OPREC-1.svg"
            alt="OPREC-2"
            width={100}
            height={100}
            layout="responsive"
            className=""
          />
        </div>

        <Typography
          variant="Paragraph"
          size="xl"
          className="text-primary-light-light font-bold"
        >
          You’ll be hearing from us soon!
          <br /> May God Blessed your journey from now on.
        </Typography>
        <Button variant="default" size="medium" isHovered className="mt-10 self-end" onClick={HandleClick}>
          <HiOutlineHome size={30}/>Back to Home
        </Button>
      </div>
    </div>
  ) : <>
  </>;
}
