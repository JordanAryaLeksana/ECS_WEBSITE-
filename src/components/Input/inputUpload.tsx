import React, { useRef, useCallback, useEffect } from 'react';
import { useField, useFormikContext } from 'formik';
import { FaRegTimesCircle } from 'react-icons/fa';
import { useFileContext } from '@/pages/oprec/components/useFormContext';
import Typography from '../Typography/Typography';
import clsxm from '@/lib/clsxm';

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
  const [field, meta, helpers] = useField(name);
  const { setValue, setTouched } = helpers;
  const { validateField } = useFormikContext();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { uploadedFiles, addUploadedFile } = useFileContext();

  const handleButtonClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      onFileChange({ [name]: file });
      addUploadedFile(name, file);
      setValue(file);
      setTouched(true, false);
      validateField(name);
    }
  }, [name, onFileChange, addUploadedFile, setValue, setTouched, validateField]);

  const handleRemoveFile = useCallback(() => {
    onFileChange({ [name]: undefined });
    addUploadedFile(name, null);
    setValue(undefined);
    setTouched(true, false);
    validateField(name);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, [name, onFileChange, addUploadedFile, setValue, setTouched, validateField]);

  useEffect(() => {
    if (required && !field.value) {
      setTouched(true, false);
      validateField(name);
    }
  }, [required, field.value, setTouched, validateField, name]);

  const isError = meta.touched && meta.error;
  const isSuccess = meta.touched && !meta.error && field.value;

  return (
    <div className="mb-3 w-full">
      <div className="w-full flex flex-col justify-between gap-2 mb-2">
        <label htmlFor={`inputfor-${name}`}>
          <Typography variant="Header" size="xs" className="font-bold text-AddsOn-neutral">
            {label}
            {required && <span className="text-accent-error-500"> *</span>}
          </Typography>
        </label>

        <button
          type="button"
          onClick={handleButtonClick}
          className={clsxm(
            "flex w-full rounded-sm justify-between items-center p-2 border border-solid gap-3 text-primary-light-light",
            [
              isError ? "border-accent-error-500" : isSuccess ? "border-accent-success-500" : "border-primary-light-active",
              disabled && "bg-primary-light-light",
              readonly && "bg-primary-light-light",
            ]
          )}
          disabled={disabled || readonly}
        >
          {field.value ? 'Change File' : 'Select File'}
          {suffix && <div className="text-primary-light-active">{suffix}</div>}
        </button>

        <input
          type="file"
          name={name}
          ref={fileInputRef}
          onChange={handleFileChange}
          accept={filetypes ?? "*"}
          className="hidden"
        />

        {isError && (
          <Typography variant="Paragraph" as="span" size="sm" className="text-accent-error-500 font-semibold flex gap-1.5 mt-1 items-center">
            {meta.error}
          </Typography>
        )}

        {field.value && (
          <div className="flex flex-row p-1 justify-between items-center text-primary-light-active">
            <Typography as="div" variant="Header" size="sm">
              <strong>Uploaded File:</strong> {(field.value as File).name}
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