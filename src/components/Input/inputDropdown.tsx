"use client";
import React, { useState, useEffect, Context, useContext } from "react";
import { useFormikContext } from "formik";
import { AiOutlineCloseCircle, AiOutlineDown } from "react-icons/ai"; // Tambahkan ikon panah
import Typography from "../Typography/Typography";
import { Field, ErrorMessage } from "formik";

interface DropdownOption {
  value: string | number;
  label: string;
}

interface InputDropdownProps {
  name: string;
  label: string;
  options?: DropdownOption[]; // Optional, bisa datang dari API
  fetchOptions?: () => Promise<DropdownOption[]>; // Fungsi untuk fetch API
  size?: "lg" | "base" | "sm";
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  showCount?: boolean;
  maxLength?: number;
  tabIndex?: number;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  helperText?: string;
  className?: string;
  style?: React.CSSProperties;
  context?: Context<
    {
      [key: string]: string;
    }[]
  >;
}

const InputDropdown: React.FC<InputDropdownProps> = ({
  name,
  label,
  options = [], // Default kosong jika tidak ada opsional
  fetchOptions, // Fungsi untuk fetch opsi dari API
  size = "base",
  placeholder,
  required = false,
  disabled = false,
  readonly = false,
  showCount = false,
  maxLength,
  prefix,
  suffix,
  helperText,
  className = "",
  style = {},
  context,
}) => {
    const { setFieldValue, errors, touched, values, setFieldTouched } = useFormikContext<{
        [key: string]: any;
    }>();
    const errorsLogic = touched[name] && errors[name] && !disabled && !readonly;
    const successLogic = touched[name] && !errors[name] && !disabled && !readonly;

  const [dropdownOptions, setDropdownOptions] =
    useState<DropdownOption[]>(options);
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(
    null
  );
  
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // Fetch data dari API jika fetchOptions disediakan
  useEffect(() => {
    if (fetchOptions) {
      setLoading(true);
      fetchOptions()
        .then((data) => {
          setDropdownOptions(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching options:", err);
          setLoading(false);
        });
    }
  }, [fetchOptions]);

  const handleSelect = (option: DropdownOption) => {
    setSelectedOption(option);
    setFieldValue(name, option.value);
    setFieldTouched(name, true);
    setShowDropdown(false); // Sembunyikan dropdown setelah memilih opsi
  };

  const handleClear = () => {
    setSelectedOption(null);
    setFieldValue(name, "");
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className={`mb-3 ${className}`} style={style}>
      <div className="w-full flex justify-between items-center gap-3 mb-2">
        <label htmlFor={name}>
          <Typography
            variant="Header"
            size="xs"
            className="font-bold text-AddsOn-neutral"
          >
            {label}
          </Typography>
        </label>
      </div>

      <div
        className={`
                    flex w-full rounded-sm items-center p-2 border border-solid gap-3 
                    ${
                      errorsLogic
                        ? "border-accent-error-500"
                        : successLogic
                        ? "border-accent-success-500"
                        : "border-primary-light-active"
                    }
                `}
      >
        {prefix && <div className="input-text-addons">{prefix}</div>}

        <Field
          type="text"
          name={name}
          id={`inputfor-${name}`}
          className={`w-full h-full bg-transparent text-primary-light-active 
          border-transparent focus:border-transparent active:border-transparent 
          focus:bg-transparent active:bg-transparent 
          outline-none cursor-pointer p-2`}
          disabled={disabled || readonly}
          readOnly
          value={selectedOption ? selectedOption.label : ""}
          placeholder={placeholder}
          onClick={toggleDropdown}
        />

        {selectedOption && !disabled && !readonly && (
          <div className="text-primary-light-light">
            <AiOutlineCloseCircle
              size={20}
              className="cursor-pointer"
              onClick={handleClear}
            />
          </div>
        )}

        {/* Tambahkan panah yang berubah arah */}
        <div className="text-primary-light-light">
          <AiOutlineDown
            size={20}
            className={`transition-transform duration-300 ${
              showDropdown ? "rotate-180" : "rotate-0"
            }`} // Kondisi untuk rotasi
            onClick={toggleDropdown}
          />
        </div>

        {suffix && <div className="">{suffix}</div>}
      </div>

      {showDropdown && (
        <ul className="sticky z-10 w-full bg-secondary-dark-dark rounded-md text-white max-h-60 overflow-auto">
          {loading ? (
            <li className="p-2">Loading...</li>
          ) : (
            dropdownOptions.map((option) => (
              <li
                key={option.value}
                className="p-2 cursor-pointer hover:bg-accent-neutral-600"
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </li>
            ))
          )}
        </ul>
      )}

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

      {helperText && (
        <Typography
          as="span"
          size="sm"
            variant="Paragraph"
          className="input-helper"
        >
          {helperText}
        </Typography>
      )}
    </div>
  );
};

export default InputDropdown;
