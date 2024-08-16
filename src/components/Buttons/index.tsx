import React, { useState } from 'react';
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
  prefix,
  suffix,
  variant = "default",
  isHovered = false
}: ButtonProps): React.ReactElement => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <button
      className={clsxm([
        "relative rounded-3xl flex gap-2 items-center justify-center text-center",
        [
          size === 'small' && ['min-h-[32px] py-1 px-[18px]'],
          size === 'medium' && ['min-h-[40px] py-2 px-[22px]'],
          size === 'large' && ['min-h-[48px] py-3 px-[26px]'],
        ],
        [
          variant === "default" && [
            "bg-AddsOn-neutral text-primary-normal-normal",
            isHovered && isHover && "shadow-[0_-2px_10px_rgba(255,255,255,1),0_2px_10px_rgba(255,255,255,1)] ",
          ],
          variant === "outline" && [
            "border border-AddsOn-neutral border-solid text-AddsOn-neutral",
            isHovered && isHover && "border-AddsOn-gray text-AddsOn-gray",
          ],
          variant === "text" && [
            "text-AddsOn-neutral",
            isHovered && isHover && "text-AddsOn-gray",
          ],
        ],
        className,
      ])}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={style}
    >
      {isIcon && <div>{prefix}</div>}
      {children}
      {isIcon && <div>{suffix}</div>}
    </button>
  );
};

export default Button;
