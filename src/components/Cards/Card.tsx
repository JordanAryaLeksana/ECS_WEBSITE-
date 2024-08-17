import React, { useState } from 'react';
import Image from 'next/image';
import clsxm from '@/lib/clsxm';
import Typography from '../Typography/Typography';
import { CardProps } from '@/types/Card';
import { HiLightBulb, HiOutlineLightBulb } from 'react-icons/hi';


const Card: React.FC<CardProps> = (props) => {
    const [isHover, setIsHover] = useState(false);
    const [isClick, setIsClick] = useState(false);
   
    const { className, style } = props;
    const handleMouseEnter = () => {
        if (props.Variant === 'GlassHover') {
            setIsHover(true);
        }
    };


    const handleMouseLeave = () => {
        if (props.Variant === 'GlassHover') {
            setIsHover(false);
        }
    };

    const handleClick = () => {
        if (props.Variant === 'PaymentCard') {
            setIsClick(!isClick)
        }
    }
    let variantStyles = "";
    let content = null;

    if (props.Variant === 'GlassHover') {
        const { ImageSrc, ImageAlt, Width, Height, Header, Paragraph } = props;
        variantStyles = clsxm(
            "w-[258px] min-h-[138px] rounded-2xl items-start bg-AddsOn-gray border-[0.2px] border-opacity-10 border-AddsOn-white bg-opacity-10 transition-all text-AddsOn-white duration-300",
            isHover && "min-h-[240px] transition-all duration-300",
            className,
        );
        content = (
            <section className='flex flex-col items-start m-4 px-2'>
                <Image src={ImageSrc} alt={ImageAlt} width={Width} height={Height} />
                <Typography size='xl' variant='Header' className='mt-4'>
                    {Header}
                </Typography>

                {isHover && (
                    <Typography size='xs' variant='Paragraph' className='mt-2 '>
                        {Paragraph}
                    </Typography>
                )}
            </section>
        );
    } else if (props.Variant === 'PaymentCard') {
        const { Header, Paragraph, Icons } = props;
        variantStyles = clsxm("w-[150px] p-6 min-h-[160px] border-secondary-dark-dark rounded-md border-[0.5px] cursor-pointer flex justify-center items-center", className,
        );
        content = (
            <div className={clsxm(
                'flex flex-col justify-center items-center gap-5 text-center', isClick ? 'border-primary-light-light text-AddsOn-neutral' : 'border-primary-light-active text-secondary-dark-dark'
            )}>
                {Icons}
                <Typography size='xs' variant='Header' className='font-regular'>
                    {Header}
                </Typography>
                <Typography size='xs' variant='Header' className='font-regular'>
                    {Paragraph}
                </Typography>
            </div>
        );
    } else if (props.Variant === 'AssistantCard') {
        const { Header, Paragraph, ImageSrc, ImageAlt, Width, Height, Coordinator, AddImage } = props;
        variantStyles = clsxm("w-[215px] relative min-h-[344px] bg-white bg-opacity-5 relative rounded-2xl border border-white border-opacity-20 shadow-lg", className

        );
        content = (
            <div className={clsxm(

            )}>

                <div className='w-[201px] h-[253px] bg-secondary-normal-normal rounded-2xl flex justify-center items-end absolute top-3 right-[0.4rem]'>
                    {AddImage && <Image src={ImageSrc} alt={ImageAlt} width={Width} height={Height} className='' />}
                </div>
                <div className={`absolute bottom-5 flex flex-col justify-center items-center gap-2 }`}>
                    <div className={` relative flex flex-row justify-center ${Coordinator ? 'left-[50%]' : 'left-[40%]'} `}>
                        {Coordinator ? <Image src={`/crown.svg`} alt='crown' width={15} height={15} className=' relative right-[40%]' /> : ""}
                        <Typography size='base' variant='Header' className='font-semibold text-AddsOn-neutral'>
                            {Header}
                        </Typography>
                    </div>
                    <div className='flex flex-row items-center justify-center gap-1 relative left-[40%]'>
                        <HiOutlineLightBulb size={15} color='white' />
                        <Typography size='xs' variant='Paragraph' className='text-AddsOn-neutral'>
                            {Paragraph}
                        </Typography>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div
            className={clsxm(variantStyles, style)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            {content}
        </div>
    );
};

export default Card;
