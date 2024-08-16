

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
    type: keyof typeof TypeVariants
    size? : keyof typeof SizeVariants
    isIcon?: boolean
    LeftIcon? : React.ReactNode | null
    RightIcon?: React.ReactNode | null
  }