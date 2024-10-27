import React, { ButtonHTMLAttributes } from 'react';
export interface RopoButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    width?: string | number;
    height?: string | number;
    backgroundColor?: string;
    textColor?: string;
    text?: string;
    variant?: 'solid' | 'outline' | 'gradient' | 'glass';
    rounded?: 'none' | 'sm' | 'md' | 'full';
    shadow?: 'none' | 'sm' | 'md' | 'lg';
    animation?: 'none' | 'pulse' | 'bounce' | 'shake';
    animationDuration?: string;
    animationInterval?: string;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    loading?: boolean;
    fontSize?: string;
    border?: string;
    hoverEffect?: 'none' | 'scale' | 'glow' | 'lift';
}
declare const RopoButton: React.FC<RopoButtonProps>;
export default RopoButton;
