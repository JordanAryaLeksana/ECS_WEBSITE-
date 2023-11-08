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
import { auth, db, storage } from "./firebase/firebase_config";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Success from "./success/[id]";
import { DialogDefault } from "./components/dialog";
import { TypeAnimation } from "react-type-animation";
import { only } from "node:test";
import { setDoc, doc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
export default function StepperTailwind() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [typingStatus, setTypingStatus] = React.useState("");
  const [isFirstStep, setIsFirstStep] = React.useState(false);
  const [email, setEmail] = useState("");
  const [percent, setPercent] = useState(0);
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [cPassword, setCPassword] = useState("");
  const { push } = useRouter();
  const [nrp, setNrp] = useState("");
  const [y, setY] = useState("");
  const [cv, setCv] = useState<any>("");
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const yInput = useCallback((inputElement: any) => {
    if (inputElement) {
      inputElement.focus();
    }
  }, []);
  const onSubmit = async (e: any) => {
    e.preventDefault();

    // Check if email is empty
    if (email === "") {
      setError("Email is required");
      toast("Email is required");
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
    if (y === "" || y != "y") {
      setError("Y/n?");
      toast("Masukkan Y untuk mendaftar");
      return;
    }
    if (cv === "") {
      setError("CV is required");
      toast("CV is required");
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
    const userData = {
      email: email,
      password: password,
      name: name,
      nrp: nrp,
      status: y,
    };
    handleUpload();
    try {
      const users = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      ).catch((error) => {
        console.log(error.code);
        if (error.code === "auth/email-already-in-use") {
          setError("Email already in use");
          toast("Email already in use");
          return;
        }
        if (error.code === "auth/invalid-email") {
          setError("Invalid email");
          toast("Invalid email");
          return;
        }
        if (error.code === "auth/weak-password") {
          setError("Minimum password length is 6 characters");
          toast("Minimum password length is 6 characters");
          return;
        }
      });
      if (users) {
        await updateProfile(users.user, { displayName: name });
        setIsSuccess(true);
        await setDoc(doc(db, "users", users.user.uid), userData, {
          merge: true,
        });
      }
    } catch {
      (error: any) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setError(errorMessage);
        toast(errorMessage);
      };
    }
  };
  if (typingStatus === "done") {
    push(`/success/${nrp}`);
  }
  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);
  const handleFinish = () => toast("Finish");

  const handleUpload = () => {
    if (!cv) {
      toast("Please upload an image first!");
      return
    }
    else{
      
    }

    const storageRef = ref(storage, `/files/${cv.name}`);

    const uploadTask = uploadBytesResumable(storageRef, cv);

    uploadTask.on(
      "state_changed",
      (snapshot: any) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // update progress
        setPercent(percent);
      },
      (err: any) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
        });
      }
    );
  };

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
                onChange={(e) => setName(e.target.value)}
                value={name}
                crossOrigin={"anonymous"}
                size="lg"
                placeholder="Masukkan nama selengkap mungkin"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                NRP
              </Typography>

              <Input
                onChange={(e) => setNrp(e.target.value)}
                value={nrp}
                type="text"
                crossOrigin={"anonymous"}
                size="lg"
                placeholder="Masukkan NRP"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Email
              </Typography>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                crossOrigin={"anonymous"}
                size="lg"
                placeholder="Masukkan email"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Password
              </Typography>
              <Input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                crossOrigin={"anonymous"}
                size="lg"
                value={password}
                placeholder="Masukkan password"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Konfirmasi Password
              </Typography>
              <Input
                onChange={(e) => setCPassword(e.target.value)}
                type="password"
                value={cPassword}
                crossOrigin={"anonymous"}
                size="lg"
                placeholder="Masukkan konfirmasi password"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
          )}
          {activeStep === 1 && (
            <div className="w-full flex-col gap-4 flex">
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
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                KTM
              </Typography>
              <input
                className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                type="file"
                id="formFileMultiple"
                multiple={false}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Pas Foto 3x4
              </Typography>
              <input
                className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                type="file"
                id="formFileMultiple"
                multiple={false}
              />
            </div>
          )}
          {activeStep === 2 && (
            <div className="flex flex-col justify-center items-center text-center mb-6">
              <h1 className=" text-3xl font-extrabold">
                Apakah anda yakin ingin mendaftar sebagai asisten laboratorium
                ECS?
              </h1>

              <div className="flex flex-row gap-2 w-full mt-10 justify-center">
                <h1 className="">Apakah anda yakin? [Y/n]</h1>
                <input
                  value={y}
                  maxLength={1}
                  onChange={(e) => setY(e.target.value)}
                  ref={yInput}
                  className="w-[16px] focus:outline-none"
                  type="text"
                />
              </div>
            </div>
          )}
        </div>
        {isSuccess && (
          <TypeAnimation
            className="pb-20"
            style={{ whiteSpace: "pre-line", height: "80px", display: "block" }}
            sequence={[
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
                setTypingStatus("done");
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
