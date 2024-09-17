import React from 'react';
import Typography from '../Typography/Typography';
import { Field, useFormikContext, ErrorMessage } from 'formik';
import { InputProps } from '@/types/Input';

const Input = ({
    placeholder,
    name,
    label,
    prefix,
    suffix,
    maxLength,
    type,
    disabled,
    readonly,
    helpertext,
    onChange
}: InputProps):React.ReactElement => {

    const inputRef = React.useRef<HTMLInputElement>(null);
    const { setFieldValue, errors, touched, values } = useFormikContext<{
        [key: string]: any;
    }>();
    const errorsLogic = touched[name] && errors[name] && !disabled && !readonly;
    const successLogic = touched[name] && !errors[name] && !disabled && !readonly;

    
    return (
        <div className='mb-3 w-full '>
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
                    placeholder={placeholder}
                    maxLength={maxLength}
                    type={type}
                    disabled={disabled}
                    onChange={(e:any) => {
                        setFieldValue(name, e.target.value);
                        if (onChange) {
                            onChange(e);
                        }
                    }}
                    ref={inputRef}
                    className={`bg-transparent w-full focus:outline-none focus:bg-transparent text-neutral-300 placeholder:text-secondary-dark-dark font-regular `}
                />
                {suffix && <div className='text-AddsOn-neutral'>{suffix}</div>}
            </div>
            <>
                {errorsLogic ? (
                    <ErrorMessage name={name}>
                        {(msg) => (
                            <Typography
                                variant='Header'
                                size="xs"
                                className="flex gap-1.5 items-center text-accent-error-500 font-semibold mt-2"
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

export default Input;
