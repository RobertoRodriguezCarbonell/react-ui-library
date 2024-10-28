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
    // Duración de la animación
    animationDuration?: string; 
    // Intervalo entre repeticiones de la animación
    animationInterval?: string; 
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    loading?: boolean;
    fontSize?: string;
    border?: string;
    hoverEffect?: 'none' | 'scale' | 'glow' | 'lift';
}

const RopoButton: React.FC<RopoButtonProps> = ({
    width = '150px',
    height = '45px',
    backgroundColor = '#3b82f6',
    textColor = 'white',
    text = 'Click me',
    variant = 'solid',
    rounded = 'md',
    shadow = 'md',
    animation = 'none',
    // Valor por defecto para la duración de la animación
    animationDuration = '0.82s', 
    // Valor por defecto para el intervalo entre repeticiones
    animationInterval = '3s', 
    icon,
    iconPosition = 'left',
    loading = false,
    fontSize = '1rem',
    border,
    hoverEffect = 'scale',
    onClick,
    className = '',
    ...props
}) => {
    const getBorderRadius = () => {
        const radiusMap = {
            none: '0px',
            sm: '4px',
            md: '8px',
            full: '9999px'
        };
        return radiusMap[rounded];
    };

    const getShadow = () => {
        const shadowMap = {
            none: 'none',
            sm: '0 2px 4px rgba(0,0,0,0.1)',
            md: '0 4px 6px rgba(0,0,0,0.1)',
            lg: '0 10px 15px rgba(0,0,0,0.1)'
        };
        return shadowMap[shadow];
    };

    const getVariantStyles = () => {
        switch (variant) {
            case 'outline':
                return {
                    backgroundColor: 'transparent',
                    border: `2px solid ${backgroundColor}`,
                    color: backgroundColor,
                };
            case 'gradient':
                return {
                    background: `linear-gradient(45deg, ${backgroundColor}, ${adjustColor(backgroundColor, 40)})`,
                    color: textColor,
                };
            case 'glass':
                return {
                    backgroundColor: `${hexToRgba(backgroundColor, 0.2)}`,
                    backdropFilter: 'blur(10px)',
                    color: textColor,
                };
            default:
                return {
                    backgroundColor,
                    color: textColor,
                };
        }
    };

    // Utility function to adjust color brightness
    const adjustColor = (color: string, amount: number) => {
        const hex = color.replace('#', '');
        const r = Math.min(255, Math.max(0, parseInt(hex.slice(0, 2), 16) + amount));
        const g = Math.min(255, Math.max(0, parseInt(hex.slice(2, 4), 16) + amount));
        const b = Math.min(255, Math.max(0, parseInt(hex.slice(4, 6), 16) + amount));
        return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    };

    // Utility function to convert hex to rgba
    const hexToRgba = (hex: string, alpha: number) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    const buttonClasses = [
        'ropo-button',
        animation !== 'none' && `animation-${animation}`,
        hoverEffect !== 'none' && `hover-${hoverEffect}`,
        className
    ].filter(Boolean).join(' ');

    const buttonStyles: React.CSSProperties = {
        width,
        height,
        borderRadius: getBorderRadius(),
        boxShadow: getShadow(),
        fontSize,
        border: border || (variant === 'outline' ? undefined : 'none'),
        cursor: loading ? 'wait' : 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        transition: 'all 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
        animationDuration: animation === 'shake' ? animationDuration : undefined, // Duración de la animación
        animationIterationCount: animation === 'shake' ? 'infinite' : undefined, // Repetir indefinidamente
        animationDelay: animation === 'shake' ? `calc(${animationInterval} - ${animationDuration})` : undefined, // Retraso entre repeticiones
        ...getVariantStyles(),
    };

    return (
        <>
            <style>
                {`
                .ropo-button {
                    font-family: inherit;
                    outline: none;
                    text-decoration: none;
                    -webkit-tap-highlight-color: transparent;
                }

                /* Animations */
                .animation-pulse {
                    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }

                .animation-bounce {
                    animation: bounce 1s infinite;
                }

                .animation-shake {
                    animation: shake var(--animation-duration, 0.82s) cubic-bezier(.36, .07, .19, .97) both;
                }

                /* Hover Effects */
                .hover-scale:hover {
                    transform: scale(1.05);
                }

                .hover-glow:hover {
                    box-shadow: 0 0 15px var(--button-color, #3b82f6);
                }

                .hover-lift:hover {
                    transform: translateY(-3px);
                }

                /* Loading Spinner */
                .loader-container {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .loader {
                    width: 16px;
                    height: 16px;
                    border: 2px solid #fff;
                    border-bottom-color: transparent;
                    border-radius: 50%;
                    animation: rotation 1s linear infinite;
                }

                .button-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                /* Keyframes */
                @keyframes pulse {
                    0%, 100% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.5;
                    }
                }

                @keyframes bounce {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-5px);
                    }
                }

                @keyframes shake {
                    10%, 90% {
                        transform: translate3d(-1px, 0, 0);
                    }
                    20%, 80% {
                        transform: translate3d(1px, 0, 0);
                    }
                    30%, 50%, 70% {
                        transform: translate3d(-2px, 0, 0);
                    }
                    40%, 60% {
                        transform: translate3d(2px, 0, 0);
                    }
                }

                @keyframes rotation {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }
                `}
            </style>
            <button
                className={buttonClasses}
                style={buttonStyles}
                onClick={onClick}
                {...props}
            >
                {loading ? (
                    <div className="loader-container">
                        <span className="loader"></span>
                        <span>Loading...</span>
                    </div>
                ) : (
                    <>
                        {icon && iconPosition === 'left' && <span className="button-icon">{icon}</span>}
                        <span>{text}</span>
                        {icon && iconPosition === 'right' && <span className="button-icon">{icon}</span>}
                    </>
                )}
            </button>
        </>
    );
};

export default RopoButton;