"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useField, useFormikContext } from "formik";
import { AiOutlineCloseCircle, AiOutlineDown } from "react-icons/ai";
import Typography from "../Typography/Typography";
import clsxm from "@/lib/clsxm";

interface DropdownOption {
  value: string | number;
  label: string;
}

interface InputDropdownProps {
  name: string;
  label: string;
  options?: DropdownOption[];
  fetchOptions?: () => Promise<DropdownOption[]>;
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
}

export default function InputDropdown({
  name,
  label,
  options = [],
  fetchOptions,
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
}: InputDropdownProps) {
  const [field, meta, helpers] = useField(name);
  const { setValue, setTouched } = helpers;
  const { validateField } = useFormikContext();
  const [dropdownOptions, setDropdownOptions] = useState<DropdownOption[]>(options);
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(null);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const isError = meta.touched && meta.error;
  const isSuccess = meta.touched && !meta.error && field.value;

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

  useEffect(() => {
    if (required && !field.value) {
      setTouched(true, false);
      validateField(name);
    }
  }, [required, field.value, setTouched, validateField, name]);

  const handleSelect = useCallback((option: DropdownOption) => {
    setSelectedOption(option);
    setValue(option.value);
    setTouched(true, false);
    validateField(name);
    setShowDropdown(false);
  }, [setValue, setTouched, validateField, name]);

  const handleClear = useCallback(() => {
    setSelectedOption(null);
    setValue("");
    setTouched(true, false);
    validateField(name);
  }, [setValue, setTouched, validateField, name]);

  const toggleDropdown = useCallback(() => {
    setShowDropdown((prev) => !prev);
  }, []);

  return (
    <div className={clsxm("mb-3", className)} style={style}>
      <div className="w-full flex justify-between items-center gap-3 mb-2">
        <label htmlFor={name}>
          <Typography variant="Header" size="xs" className="font-bold text-AddsOn-neutral">
            {label}
            {required && <span className="text-accent-error-500"> *</span>}
          </Typography>
        </label>
      </div>

      <div
        className={clsxm(
          "flex w-full rounded-sm items-center p-2 border border-solid gap-3",
          [
            isError ? "border-accent-error-500" : isSuccess ? "border-accent-success-500" : "border-primary-light-active",
            disabled && "bg-primary-light-light",
            readonly && "bg-primary-light-light",
          ]
        )}
      >
        {prefix && <div className="input-text-addons">{prefix}</div>}

        <input
          type="text"
          {...field}
          id={`inputfor-${name}`}
          className="w-full h-full bg-transparent text-primary-light-active 
            border-transparent focus:border-transparent active:border-transparent 
            focus:bg-transparent active:bg-transparent 
            outline-none cursor-pointer p-2"
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

        <div className="text-primary-light-light">
          <AiOutlineDown
            size={20}
            className={clsxm("transition-transform duration-300", [
              showDropdown ? "rotate-180" : "rotate-0"
            ])}
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

      {isError && (
        <Typography
          variant="Paragraph"
          as="span"
          size="sm"
          className="text-accent-error-500 font-semibold flex gap-1.5 mt-1 items-center"
        >
          {meta.error}
        </Typography>
      )}

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
}