import React from 'react';
import clsx from 'clsx';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  type: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary'; // corrected typo in type names

}

const Button = ({
  children,
  className,
  onClick,
  style,
  type,
}: ButtonProps): React.ReactElement => {
  return (
    <button
      className={clsx([
        "py-2 px-6 w-40 rounded-3xl flex gap-2 items-center justify-center",
        type === "primary" && "bg-AddsOn-white font-Poppins   ",
        type === "secondary" && "border-[1px] border-AddsOn-white border-solid font-Poppins ",
        type === "tertiary" && "bg-AddsOn-white ",
        type === "quaternary" && "bg-AddsOn-white ",
        type === "quinary" && "bg-AddsOn-white ",
        
      ])}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
