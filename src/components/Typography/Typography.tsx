import * as React from 'react';

import clsxm from '@/lib/clsxm';
import TypographyProps from '@/types/typography';

export default function Typography({
  as = 'p',
  className,
  variant,
  children,
  size = 'base',
  ...rest
}: TypographyProps) {
  const Component = as;
  return (
    <Component
      className={clsxm(
        [
          variant === 'Header' && 'font-Poppins',
          variant === 'Paragraph' && 'font-Inter',
        ],
        [
          size === "7xl" && "text-[64px] leading-[62px]",
          size === "6xl" && "text-[48px] leading-[58px]",
          size === "5xl" && "text-[42px] leading-[52px]",
          size === "4xl" && "text-[36px] leading-[44px]",
          size === "3xl" && "text-[32px] leading-[38px]",
          size === "2xl" && "text-[24px] leading-[30px]",
          size === "xl" && "text-[20px] leading-[24px]",
          size === "lg" && "text-[18px] leading-[22px]",
          size === "base" && "text-[16px] leading-[18px]",
          size === "sm" && "text-[14px] leading-[16px]",
          size === "xs" && "text-[12px] leading-[14px]",
        ],
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}
