import React, { useState } from "react";
import { useCallback } from "react";
import {
  Stepper,
  Step,
  Button,
  Typography,
  Input,
} from "@material-tailwind/react";
import {
  BookOpenIcon,
  DocumentIcon,
  CogIcon,
  UserIcon,
  BuildingLibraryIcon,
  CheckIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "@/firebase/firebase_config";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Success from "./success/[id]";

import { TypeAnimation } from "react-type-animation";
import { only } from "node:test";
import { setDoc, doc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
export default function StepperTailwind() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [typingStatus, setTypingStatus] = React.useState("");
  const [wa, setWa] = React.useState("");
  const [cvUrl, setCvUrl] = React.useState("");
  const [isFirstStep, setIsFirstStep] = React.useState(false);
  const [email, setEmail] = useState("");
  const [isSubmit, setIsSubmit] = useState(false)
  const [ktm, setKtm] = useState<any>("");
  const [sk, setSk] = useState<any>("");
  const [motlet, setMotlet] = useState<any>("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [cPassword, setCPassword] = useState("");
  const { push } = useRouter();
  const [nrp, setNrp] = useState("");
  const [y, setY] = useState("");
  const [cv, setCv] = useState<any>("");
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [foto, setFoto] = useState<any>("");
  const yInput = useCallback((inputElement: any) => {
    if (inputElement) {
      inputElement.focus();
    }
  }, []);
  const uploadFile = async (file: any, ref: any) => {
    const uploadTask = uploadBytesResumable(ref, file);

    return new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          // Add any progress handling logic here if needed
        },
        (error) => {
          console.error("Error uploading file:", error);
          reject(error);
        },
        async () => {
          try {
            const url = await getDownloadURL(uploadTask.snapshot.ref);
            console.log(`File ${file.name} uploaded successfully. URL: ${url}`);
            resolve(url);
          } catch (error) {
            console.error(`Error getting download URL for ${file.name}:`, error);
            reject(error);
          }
        }
      );
    });
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setError('')
    setIsSubmit(true)
    // Check if email is empty
    if (email === "") {
      setError("Email is required");
      toast("Email is required");
      return;
    }
    if (wa === ""){
      setError("Whatsapp is required");
      toast("Whatsapp is required");
      return;
    }

    // Check if password is empty
    if (password === "") {
      setError("Password is required");
      toast("Password is required");
      return;
    }

    // Check if name is empty
    if (name === "") {
      setError("Name is required");
      toast("Name is required");
      return;
    }

    // Check if confirmed password is empty
    if (cPassword === "") {
      setError("Confirmed password is required");
      toast("Confirmed password is required");
      return;
    }

    // Check if NRP is empty
    if (nrp === "") {
      setError("NRP is required");
      toast("NRP is required");
      return;
    }
    if (y != "y" && y != "Y") {
      setError("Y/n?");
      toast("Masukkan Y untuk mendaftar");
      return;
    }
    if (cv === "") {
      setError("CV is required");
      toast("CV is required");
      return;
    }
    if (foto === "") {
      setError("Pas Foto harus diisi");
      toast("Pas Foto harus diisi");
      return;
    }
    if (ktm === "") {
      setError("KTM harus diisi");
      toast("KTM is required");
      return;
    }
    if (motlet === "") {
      setError("Motlet harus diisi");
      toast("Motlet is required");
      return;
    }
    if (sk === "") {
      setError("SK harus diisi");
      toast("SK is required");
      return;
    }

    if (password !== cPassword) {
      setError("Password does not match");
      toast("Password does not match");
      return;
    }
    if (isNaN(Number(nrp)) || Number(nrp) <= 5000000000) {
      setError("Invalid NRP");
      toast("Invalid NRP");
      return;
    }
    const element = document.getElementById("bottom");
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    const cvRef = ref(storage, `/files/${cv.name}`);
    const ktmRef = ref(storage, `/files/${ktm.name}`);
    const fotoRef = ref(storage, `/files/${foto.name}`);
    const motletRef = ref(storage, `/files/${motlet.name}`);
    const skRef = ref(storage, `/files/${sk.name}`);

    try {
      const [cvUrl, ktmUrl, fotoUrl, motletUrl, skUrl] = await Promise.all([
        uploadFile(cv, cvRef),
        uploadFile(ktm, ktmRef),
        uploadFile(foto, fotoRef),
        uploadFile(motlet, motletRef),
        uploadFile(sk, skRef),

      ]);


      const userData = {
        email: email,
        password: password,
        name: name,
        nrp: nrp,
        wa: wa,
        cv: cvUrl,
        ktm: ktmUrl,
        foto: fotoUrl,
        motlet: motletUrl,
        sk: skUrl
      };
      const users = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(users.user, { displayName: name });

      await setDoc(doc(db, "users", users.user.uid), userData, {
        merge: true,
      });

      setIsSuccess(true);
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
      setError(errorMessage);
      toast(errorMessage);
    }
  };
  if (typingStatus === "done") {
    push(`/success/${nrp}`);
  }
  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);
  return (
    <div className=" ">
      <Stepper
        activeStep={activeStep}
        isLastStep={(value: any) => setIsLastStep(value)}
        isFirstStep={(value: any) => setIsFirstStep(value)}
      >
        <Step onClick={() => setActiveStep(0)}>
          <UserIcon className="h-5 w-5" />
          <div className="absolute -bottom-[4.5rem] w-max text-center">
            <Typography
              variant="h6"
              color={activeStep === 0 ? "blue-gray" : "gray"}
            >
              Data Diri
            </Typography>
            <Typography
              color={activeStep === 0 ? "white" : "white"}
              className="font-normal"
            >
              Masukkan data diri kamu
            </Typography>
          </div>
        </Step>
        <Step onClick={() => setActiveStep(1)}>
          <DocumentIcon className="h-5 w-5" />
          <div className="absolute -bottom-[4.5rem] w-max text-center">
            <Typography
              variant="h6"
              color={activeStep === 1 ? "blue-gray" : "gray"}
            >
              Dokumen
            </Typography>
            <Typography
              color={activeStep === 1 ? "white" : "white"}
              className="font-normal"
            >
              Details about yout account.
            </Typography>
          </div>
        </Step>
        <Step onClick={() => setActiveStep(2)}>
          <CheckIcon className="h-5 w-5" />
          <div className="absolute -bottom-[4.5rem] w-max text-center">
            <Typography
              variant="h6"
              color={activeStep === 2 ? "blue-gray" : "gray"}
            >
              Submit
            </Typography>
            <Typography
              color={activeStep === 2 ? "white" : "white"}
              className="font-normal"
            >
              Details about yout account.
            </Typography>
          </div>
        </Step>
      </Stepper>

      <div className="mt-32 ">
        <div className="flex w-full flex-col justify-center items-center">
          {activeStep === 0 && (
            <div className="w-full flex-col gap-4 flex">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Nama Lengkap
              </Typography>
              <Input
              label="Nama Lengkap"
                onChange={(e) => setName(e.target.value)}
                value={name}
                crossOrigin={"anonymous"}
                size="lg"


              
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                NRP
              </Typography>

              <Input
              label="NRP"
                onChange={(e) => setNrp(e.target.value)}
                value={nrp}
                type="text"
                crossOrigin={"anonymous"}
                size="lg"
        
          
          
              />
               <Typography variant="h6" color="blue-gray" className="-mb-3">
                Nomor WA
              </Typography>

              <Input
              label="Nomor WA"
                onChange={(e) => setWa(e.target.value)}
                value={wa}
                type="text"
                crossOrigin={"anonymous"}

  
            
               
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Email
              </Typography>
              <Input
              label="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                crossOrigin={"anonymous"}
                size="lg"
 
              
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Password
              </Typography>
              <Input
              label="Password"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                crossOrigin={"anonymous"}
                size="lg"
                value={password}

              
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Konfirmasi Password
              </Typography>
              <Input
              label="Konfirmasi Password"
                onChange={(e) => setCPassword(e.target.value)}
                type="password"
                value={cPassword}
                crossOrigin={"anonymous"}
                size="lg"
                
              
              />
            </div>
          )}
          {activeStep === 1 && (
            <div className="w-full flex-col gap-4 flex">
            <Link target={"_blank"} href={'https://docs.google.com/document/d/10T_NcsF5CxziQ2dt8Y2P3InMySAYmIHv/edit?usp=share_link&ouid=104950261130230777739&rtpof=true&sd=true'} className="w-full border-2 text-black rounded-xl py-2  text-center ">Download Template Surat Komitmen</Link>
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Curriculum Vitae
              </Typography>
              <input
                onChange={(e: any) => setCv(e?.target?.files[0])}
                className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                type="file"
                id="formFileMultiple"
                multiple={false}
              />
              <h1 className="text-sm">{cv.name}</h1>
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                KTM
              </Typography>
              <input
                onChange={(e: any) => setKtm(e?.target?.files[0])}
                className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                type="file"
                id="formFileMultiple"
                multiple={false}
              />
              <h1 className="text-sm">{ktm.name}</h1>
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Pas Foto 3x4
              </Typography>
              <input
                onChange={(e: any) => setFoto(e?.target?.files[0])}
                className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                type="file"
                accept="image/*"
                id="formFileMultiple"
                multiple={false}
              />
              <h1 className="text-sm">{foto.name}</h1>
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Surat Komitmen
              </Typography>
              <input
                onChange={(e: any) => setSk(e?.target?.files[0])}
                className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                type="file"
                id="formFileMultiple"
                multiple={false}
              />
              <h1 className="text-sm">{sk.name}</h1>
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Motivation Letter
              </Typography>
              <input
                onChange={(e: any) => setMotlet(e?.target?.files[0])}
                className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                type="file"

                id="formFileMultiple"
                multiple={false}
              />
              <h1 className="text-sm">{motlet.name}</h1>
              
            </div>
          )}
          {activeStep === 2 && (
            <div className="flex flex-col justify-center items-center text-center mb-6">
              <h1 className=" text-3xl font-extrabold">
                Apakah anda yakin ingin mendaftar sebagai asisten laboratorium
                ECS?
              </h1>

              <div className="flex flex-col gap-2 w-full text-left mt-10">
                <h1 className="">Apakah anda yakin? [Y/n]</h1>
                <div className="flex gap-2">
                  <h1>$</h1>
                  <input
                    value={y}
                    onChange={(e) => setY(e.target.value)}
                    ref={yInput}
                    className=" focus:outline-none"
                    type="text"
                  />
                </div>

              </div>
            </div>
          )}
        </div>
        {isSubmit && (
          <TypeAnimation
            className="pb-20"
            style={{ whiteSpace: "pre-line", height: "80px", display: "block" }}
            sequence={[
              `Memeriksa kesalahan`,
              1000,
              error ?
              `Memeriksa kesalahan
              Error: ${error}`:
              `Memeriksa kesalahan
              Memeriksa data`,
              2000,
              ()=>{ error &&
                setIsSubmit(false)
              },

              1000,
              `Memeriksa kesalahan
              Memeriksa data
              Memeriksa dokumen`,
              500,
              `Memeriksa kesalahan
              Memeriksa data
              Memeriksa dokumen
              Menyimpan data ke dalam database`,
              2000,
              `Memeriksa kesalahan
              Memeriksa data
              Memeriksa dokumen
              Menyimpan data ke dalam database
              Menyimpan dokumen ke dalam database`,
              2000,
              `Memeriksa kesalahan
              Memeriksa data
              Memeriksa dokumen
              Menyimpan data ke dalam database
              Menyimpan dokumen ke dalam database
              Berhasil`,
              2000,
              () => {
                !error ? setTypingStatus("done") : setTypingStatus("error");
              },
            ]}
            speed={80}
          />
        )}

        {isLastStep ? (
          <div className="flex justify-between mt-40">
            <Button id="bottom" onClick={handlePrev} disabled={isFirstStep}>
              Prev
            </Button>
            <Button onClick={onSubmit}>Submit</Button>
          </div>
        ) : (
          <div className="flex justify-between mt-20">
            <Button id="bottom" onClick={handlePrev} disabled={isFirstStep}>
              Prev
            </Button>
            <Button onClick={handleNext} disabled={isLastStep}>
              Next
            </Button>
          </div>
        )}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        icon={<ExclamationCircleIcon></ExclamationCircleIcon>}
      />
    </div>
  );
}
