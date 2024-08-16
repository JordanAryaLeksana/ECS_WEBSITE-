


enum TypographyVariant {
  'Header',
  'Paragraph',
}

enum SizeVariant {
    '7xl','6xl','5xl','4xl', '3xl','2xl','xl' ,'lg' ,'base' , 'sm' , 'xs',
}

export default interface TypographyProps {
    className?:string;
    children:React.ReactNode;
    as?: keyof JSX.IntrinsicElements
    size : keyof typeof SizeVariant,
    variant : keyof typeof TypographyVariant
}