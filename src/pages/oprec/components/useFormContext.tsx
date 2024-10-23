import { createContext, useContext, useState } from "react";

const FileContext = createContext<any>(null);

export function useFileContext() {
  return useContext(FileContext);
}

export function FileProvider({ children }: any) {
  const [formData, setFormData] = useState({
    full_name: "",
    NRP: "",
    phone_number: "",
    email: "",
    batch: "",
    curriculum_vitae: null,
    ktm: null,
    transcript_gpa: null,
    motivation_letter: null,
    statement_letter: null,
  });

  const [uploadedFiles, setUploadedFiles] = useState<{ [key: string]: File | null }>({});

  const updateFormData = (key: string, value: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const addUploadedFile = (name: string, file: File | null) => {
    setUploadedFiles((prevFiles) => ({
      ...prevFiles,
      [name]: file,
    }));
  };

  return (
    <FileContext.Provider value={{ formData, updateFormData, uploadedFiles, addUploadedFile }}>
      {children}
    </FileContext.Provider>
  );
}
