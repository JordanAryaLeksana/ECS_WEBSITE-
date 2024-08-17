import React from "react";




export interface BaseCardProps {
    className?: string;
    style?: React.CSSProperties;
    Header?: string;
    Paragraph?: string;
    
}

export interface GlassHoverCardProps extends BaseCardProps {
    Variant: 'GlassHover';
    ImageSrc: string;
    ImageAlt: string;
    Width?: number;
    Height?: number;
   
}

export interface PaymentCardProps extends BaseCardProps {
    Variant: 'PaymentCard';
    onClick? : () => void
    Icons: React.ReactNode | null;
}
export interface AssistantCardProps extends BaseCardProps {
    Variant: 'AssistantCard';
    Coordinator?: React.ReactNode | null;
    ImageSrc?: string;
    ImageAlt?: string;
    Width?: number;
    Height?: number;
    AddImage?: React.ReactNode | null;
}


export type CardProps = GlassHoverCardProps | PaymentCardProps | AssistantCardProps;
