import React from 'react';
import Typography from '../Typography/Typography';
import { Field, useFormikContext, ErrorMessage } from 'formik';
import { useState } from 'react';
import { InputProps } from '@/types/Input';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
const InputPassword = ({
    placeholder,
    name,
    label,
    prefix,
    suffix,
    maxLength,
   
    disabled,
    readonly,
    helpertext,
}: InputProps) => {

    const inputRef = React.useRef<HTMLInputElement>(null);
    const { setFieldValue, errors, touched, values } = useFormikContext<{
        [key: string]: any;
    }>();
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const errorsLogic = touched[name] && errors[name] && !disabled && !readonly;
    const successLogic = touched[name] && !errors[name] && !disabled && !readonly;

   

    return (
        <div className='mb-3'>
            <div className="w-full flex justify-between items-center gap-3 mb-2">
                <label htmlFor={name}>
                    <Typography variant='Header' size='xs' className='font-bold text-AddsOn-neutral'>
                        {label}
                    </Typography>
                </label>
                {maxLength && (
                    <Typography variant='Header' size="sm" className="text-AddsOn-neutral">
                        {values[name] ? values[name].length : 0} / {maxLength}
                    </Typography>
                )}
            </div>

            <div
                className={`
                    flex w-full rounded-sm items-center p-2 border border-solid gap-3 
                    ${errorsLogic ? "border-accent-error-500" : successLogic ? "border-accent-success-500" : "border-primary-light-active"}
                `}
            >
                {prefix && <div className="text-AddsOn-neutral">{prefix}</div>}
                <Field
                    name={name}
                    type={showPassword ? "text" : "password"}
                    placeholder={placeholder}
                    maxLength={maxLength}
                    ref={inputRef}
                    disabled={disabled || readonly}
                    autoComplete="new-password"
                    className={` bg-transparent w-full focus:outline-none  text-neutral-300 placeholder:text-secondary-dark-dark font-regular `}
                />
                {suffix && <div className='text-AddsOn-neutral'>{suffix}</div>}
                {/* Input Show Password Icon */}
                <div
                    className={`text-AddsOn-neutral ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
                    onClick={() => !disabled && setShowPassword(!showPassword)}
                >
                    {showPassword ? (
                        <AiOutlineEye size={20} />
                    ) : (
                        <AiOutlineEyeInvisible size={20} />
                    )}
                </div>
            </div>
            <>
                {errorsLogic ? (
                    <ErrorMessage name={name}>
                        {(msg) => (
                            <Typography
                                variant='Header'
                                size="xs"
                                className="flex gap-1.5 items-center text-accent-error-500 font-semibold mt-2 "
                            >
                                {msg}
                            </Typography>
                        )}
                    </ErrorMessage>
                ) : (
                    helpertext && (
                        <Typography variant="Header" size="xs" className="block text-secondary-dark-dark mt-2 font-semibold">
                            {helpertext}
                        </Typography>
                    )
                )}
            </>
        </div>
    );
}

export default InputPassword;
