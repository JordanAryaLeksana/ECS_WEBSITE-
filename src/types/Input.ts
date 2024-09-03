
import { FormikConfig, FormikValues } from "formik"
import { InputHTMLAttributes } from "react";

export interface FormGroupProps<T extends FormikValues>
    extends Omit<FormikConfig<T>, "children"> {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>,  "prefix" | "suffix"> {
    placeholder: string;
    name: string;
    label: string;
    prefix?: React.ReactNode | null;
    suffix?: React.ReactNode | null;
    maxLength?: number;
    type?: string;
    disabled?: boolean;
    readonly?: boolean;
    helpertext?: React.ReactNode;
    className?:string
    style?: React.CSSProperties
    required?:boolean;
    showCount?:boolean
    showPassword? : boolean
    tabIndex?: number;
}



