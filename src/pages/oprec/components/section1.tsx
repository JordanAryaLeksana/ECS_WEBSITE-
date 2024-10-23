import Typography from "@/components/Typography/Typography";
import Image from "next/image";
import Link from "next/link";
export default function Section1() {
  return (
    <div className="w-full h-full m-auto">
      <div className="flex flex-col m-auto justify-center items-center md:items-start ">
        <div className="flex flex-col md:flex-row  items-center justify-between w-[70%] mb-10">
          <Typography
            variant="Paragraph"
            size="4xl"
            className="text-white font-bold"
          >
            Requirements for
            <br />
            <span className="text-accent-warning-600">
              Registration<span className="text-white">.</span>
            </span>
          </Typography>
          <Image
            src="/OPREC-1.svg"
            alt="OPREC-2"
            width={100}
            height={100}
            layout=""
            className="w-[70%] h-[70%]"
          />
        </div>
        <div className="flex flex-col gap-5">
          <Typography
            variant="Paragraph"
            size="xl"
            className="text-white font-bold"
          >
            <span className="text-accent-warning-600 text-2xl">
              Requirements:
            </span>{" "}
            <br />- Have a high commitment to being part of Embedded and
            Cyber-Physical System Laboratory assistant <br />- An active S1
            engineering physics student batch 2022 and 2023
          </Typography>
          <Typography
            variant="Paragraph"
            size="xl"
            className="text-white font-bold"
          >
            <span className="text-accent-warning-600 text-2xl">
              Documents:{" "}
            </span>{" "}
            <br />- ATS friendly CV
            <br /> - KTM <br />- academic transcript of GPA <br /> - Essay about
            your motivation to become Embedded  and Cyber-Physical System
            Laboratory assistant <br />- Statement letter
            <span className="text-accent-error-500">
              <Link href={`https://its.ac.id/statementletter`}>
                {" "}
                (its.ac.id/statementletter)
              </Link>
            </span>
          </Typography>
        </div>
      </div>
    </div>
  );
}
