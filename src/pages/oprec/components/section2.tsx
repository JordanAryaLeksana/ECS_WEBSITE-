import Image from "next/image";
import Link from "next/link";
import Typography from "@/components/Typography/Typography";
import Input from "@/components/Input/Input";
import InputDropdown from "@/components/Input/inputDropdown";
import InputUpload from "@/components/Input/inputUpload";
import { HiDownload, HiUpload } from "react-icons/hi";

interface InputUploadProps {
  setUploadedFile: (file: { [key: string]: File | undefined }) => void;
}

export default function Section2({ setUploadedFile }: InputUploadProps) {

  
  const setValueUtils = (x: { [key: string]: File | undefined }) => {
    setUploadedFile(x);
  };
  return (
    <div className="w-full h-full m-auto">
      <div className="flex flex-col m-auto justify-center items-center md:items-start ">
        <div className="flex flex-col md:flex-row  items-center justify-between w-[70%] mb-10">
          <Typography
            variant="Paragraph"
            size="4xl"
            className="text-white font-bold"
          >
            Hi! Please Fill Out The Form for
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
        <div className="flex flex-col w-full md:flex-row gap-5">
          <div className="flex flex-col w-full">
            <Input
              label="Nama Lengkap"
              name="full_name"
              type="text"
              placeholder="Input Your Full Name"
            />
            <Input
              label="NRP"
              name="NRP"
              type="text"
              placeholder="Input Your NRP"
            />
            <Input
              label="No Telepon"
              name="phone_number"
              type="text"
              placeholder="Input Your Phone Number"
            />
            <Input
              label="email"
              name="email"
              type="text"
              placeholder="Input Your Email"
            />
            <InputDropdown
              label="Angkatan"
              name="batch"
              placeholder="Select Your Batch"
              options={[
                { value: "2022", label: "2022" },
                { value: "2023", label: "2023" },
              ]}
            />
          </div>
          <div className="flex flex-col w-full">
            <InputUpload
              name="curriculum_vitae"
              label="Curriculum Vitae"
              filetypes=".pdf"
              onFileChange={setValueUtils}
              suffix={<HiUpload size={20} />}
            />
            <InputUpload
              name="ktm"
              label="KTM"
              filetypes=".pdf"
              onFileChange={setValueUtils}
              suffix={<HiUpload size={20} />}
            />
            <InputUpload
              name="transcript_gpa"
              label="Transcript GPA"
              filetypes=".pdf"
              onFileChange={setValueUtils}
              suffix={<HiUpload size={20} />}
            />
            <InputUpload
              name="motivation_letter"
              label="Motivation Letter"
              filetypes=".pdf"
              onFileChange={setValueUtils}
              suffix={<HiUpload size={20} />}
            />
            <InputUpload
              name="statement_letter"
              label="Statement Letter"
              filetypes=".pdf"
              onFileChange={setValueUtils}
              suffix={<HiUpload size={20} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
