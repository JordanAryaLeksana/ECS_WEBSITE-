

import * as React from 'react';

import clsxm from '@/lib/clsxm';

enum TypographyVariant {
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'title',
  'paragraph',
  'body',
  'button',
  'caption',
}

type TypographyProps<T extends React.ElementType> = {
  /** @default 'p' */
  as?: T;
  className?: string;
  /** Variant
   * | Variant  | Size Class | Font Size | Font Size (px) | Font Weight |
   * | -------- | ---------- | --------- | -------------- | ----------- |
   * | h1       | h1         | 6xl       | 48px           | 800         |
   * | h2       | h2         | 5xl       | 40px           | 800         |
   * | h3       | h3         | 4xl       | 32px           | 800         |
   * | h4       | h4         | 3xl       | 24px           | 800         |
   * | h5       | h5         | 2xl       | 20px           | 800         |
   * | h6       | h6         | xl        | 16px           | 800         |
   * | subtitle1| subtitle   | lg        | 14px           | 600         |
   * | subtitle2| subtitle   | md        | 12px           | 600         |
   * | body1    | body       | base      | 16px           | 400         |
   * | body2    | body       | sm        | 14px           | 400         |
   * | caption  | caption    | xs        | 12px           | 400         |
   * | overline | overline   | xs        | 12px           | 400         |
   * @default 'body1'
   * @see https://tailwindcss.com/docs/font-size
   * @see https://tailwindcss.com/docs/font-weight
   */
  variant?: keyof typeof TypographyVariant;
  children: React.ReactNode;
} & React.ComponentProps<T>;

export default function Typography<T extends React.ElementType>({
  as,
  className,
  variant,
  children,
  ...rest
}: TypographyProps<T>) {
  const Component = as || 'p';

  return (
    <Component
      className={clsxm(
        //#region  //*=========== Variants ===========
        [
          variant === 'h1' && 'text-[80px] leading-[96px]',
          variant === 'h2' && 'text-[72px] leading-[90px]',
          variant === 'h3' && 'text-[64px] leading-[84px]',
          variant === 'h4' && 'text-[48px] leading-[64px]',
          variant === 'h5' && 'text-[32px] leading-[48px]',
          variant === 'h6' && 'text-[24px] leading-[32px]',
          variant === 'title' && 'text-[20px] leading-[24px]',
          variant === 'paragraph' && 'text-[18px] leading-[24px]',
          variant === 'body' && 'text-[16px] leading-[24px]',
          variant === 'button' && 'text-[16px] leading-[24px]',
          variant === 'caption' && 'text-[14px] leading-[24px]',
        ],
        //#endregion  //*======== Variants ===========
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}
