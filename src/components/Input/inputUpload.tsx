import { useContext, useRef, useState } from "react";
import Typography from "../Typography/Typography";
import { FaRegTimesCircle } from "react-icons/fa";
import { useFileContext } from "@/pages/oprec/components/useFormContext"; // Update the import path as necessary
import { useFormikContext, ErrorMessage } from "formik";
import clsxm from "@/lib/clsxm";
interface InputUploadProps {
  name: string;
  label: string;
  required?: boolean;
  filetypes?: string;
  onFileChange: (files: { [key: string]: File | undefined }) => void;
  disabled?: boolean;
  readonly?: boolean;
  suffix?: React.ReactNode;
}

export default function InputUpload({
  name,
  label,
  required = false,
  onFileChange,
  filetypes,
  disabled = false,
  readonly = false,
  suffix
}: InputUploadProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [buttonError, setButtonError] = useState(false);
  const { uploadedFiles, addUploadedFile } = useFileContext(); // Use the context
  const { setFieldValue, errors, touched, values, setFieldTouched , setFieldError} = useFormikContext<{
    [key: string]: any;
  }>();
  const errorsLogic = touched[name] && errors[name] && !disabled && !readonly;
  const successLogic = touched[name] && !errors[name] && !disabled && !readonly;

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      onFileChange({ [name]: file });
      addUploadedFile(name, file); // Add file to context
      setFieldValue(name, file);
      setFieldTouched(name, true)
      setButtonError(false);
    } 
  };
  const handleRemoveFile = () => {
    onFileChange({ [name]: undefined });
    addUploadedFile(name, null); // Hapus file dari context
    setFieldValue(name, undefined); // Reset nilai di Formik
    setFieldTouched(name, false); // Set touched menjadi true untuk memicu validasi
    setFieldError(name, `${label} is required`); // Set error jika file wajib
  };
  return (
    <div className={`mb-3 w-full `}>
      <div className="w-full flex flex-col justify-between gap-2 mb-2">
        <label htmlFor={`inputfor-${name}`}>
          <Typography
            variant="Header"
            size="xs"
            className="font-bold text-AddsOn-neutral"
          >
            {label}
            {required && <span className="text-accent-error-500"> *</span>}
          </Typography>
        </label>

        <button
          type="button"
          onClick={handleButtonClick}
          className={clsxm(["flex w-full rounded-sm  justify-between items-center p-2 border border-primary-light-light border-solid gap-3 text-primary-light-light"],[
            errorsLogic ? "border-accent-error-500" : successLogic ? "border-accent-success-500" : "border-primary-light-active",
            disabled && "bg-primary-light-light",
            readonly && "bg-primary-light-light",
          ])
          }
        >
          
          Select File
          <span className="">{suffix && <div className="text-primary-light-active">{suffix}</div>}</span>
        </button>

        <input
          type="file"
          name={name}
          ref={fileInputRef}
          onChange={handleFileChange}
          accept={filetypes ?? "*"}
          className="hidden"
        />
        <ErrorMessage name={name}>
          {(msg) => (
            <Typography
              variant="Paragraph"
              as="span"
              size="sm"
              className="text-accent-error-500 font-semibold flex gap-1.5 mt-1 items-center"
            >
              {msg}
            </Typography>
          )}
        </ErrorMessage>
        {uploadedFiles[name] && uploadedFiles[name]?.name && (
          <div className=" flex flex-row  p-1 justify-between items-center text-primary-light-active">
            <Typography as="div" variant="Header" size="sm">
              <strong>Uploaded File:</strong> {uploadedFiles[name].name}
            </Typography>
            <button
              type="button"
              onClick={handleRemoveFile}
              className="text-primary-light-active"
            >
              <FaRegTimesCircle size={30} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
