import React from 'react';
import clsxm from '@/lib/clsxm';
import { ButtonProps } from '@/types/buttons';

const Button = ({
  children,
  className,
  onClick,
  style,
  type,
  isIcon = false,
  size = "medium",
  LeftIcon ,
  RightIcon,
}: ButtonProps): React.ReactElement => {
  return (
    <button
      className={clsxm([
        "py-2 px-6 w-40 h-12 rounded-3xl flex gap-2 items-center justify-center",
        [
          size === "small" && "p-4",
          size === "medium" && "p-5",
          size === "large" && "p-6",
        ],
        
        [type === "primary" && 
         "bg-AddsOn-white font-Poppins   "],
        [type === "secondary" && 
          "border-[1px] border-AddsOn-white border-solid font-Poppins "],
        
      ])}
      onClick={onClick}
      style={style}
    >
       {!isIcon && (
          <div className='ml-2'>
            {LeftIcon}
          </div>
        )}
        {children}
        {!isIcon && (
          <div className='ml-2'>
           {RightIcon}
          </div>
        )}
    </button>
  );
};

export default Button;
