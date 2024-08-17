import { IconType } from "react-icons/lib";

enum Variants {
    'default',
    'outline',
    'text',
}
enum SizeVariants {
    'small',
    'medium',
    'large',
}

enum TypeVariants {
    'primary',
    'secondary',
}

export interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    style?: React.CSSProperties;
    type?: keyof typeof TypeVariants;
    size? : keyof typeof SizeVariants;
    isIcon?: boolean;
    leftIconClassname?: string;
    rightIconClassname?: string;
    prefix?: React.ReactNode | null;
    suffix?: React.ReactNode | null;
    variant: keyof typeof Variants;
    isHovered?: React.ReactNode |null
    onMouseOver? : (event: React.MouseEvent<Element, MouseEvent>) => void
    onMouseLeave? : (event: React.MouseEvent<Element, MouseEvent>) => void
  }