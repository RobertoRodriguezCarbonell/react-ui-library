"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const RopoButton = (_a) => {
    var { width = '150px', height = '45px', backgroundColor = '#3b82f6', textColor = 'white', text = 'Click me', variant = 'solid', rounded = 'md', shadow = 'md', animation = 'none', animationDuration = '0.82s', // Valor por defecto para la duración de la animación
    animationInterval = '3s', // Valor por defecto para el intervalo entre repeticiones
    icon, iconPosition = 'left', loading = false, fontSize = '1rem', border, hoverEffect = 'scale', onClick, className = '' } = _a, props = __rest(_a, ["width", "height", "backgroundColor", "textColor", "text", "variant", "rounded", "shadow", "animation", "animationDuration", "animationInterval", "icon", "iconPosition", "loading", "fontSize", "border", "hoverEffect", "onClick", "className"]);
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
    const adjustColor = (color, amount) => {
        const hex = color.replace('#', '');
        const r = Math.min(255, Math.max(0, parseInt(hex.slice(0, 2), 16) + amount));
        const g = Math.min(255, Math.max(0, parseInt(hex.slice(2, 4), 16) + amount));
        const b = Math.min(255, Math.max(0, parseInt(hex.slice(4, 6), 16) + amount));
        return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    };
    // Utility function to convert hex to rgba
    const hexToRgba = (hex, alpha) => {
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
    const buttonStyles = Object.assign({ width,
        height, borderRadius: getBorderRadius(), boxShadow: getShadow(), fontSize, border: border || (variant === 'outline' ? undefined : 'none'), cursor: loading ? 'wait' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', transition: 'all 0.3s ease', position: 'relative', overflow: 'hidden', animationDuration: animation === 'shake' ? animationDuration : undefined, animationIterationCount: animation === 'shake' ? 'infinite' : undefined, animationDelay: animation === 'shake' ? `calc(${animationInterval} - ${animationDuration})` : undefined }, getVariantStyles());
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("style", null, `
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
                `),
        react_1.default.createElement("button", Object.assign({ className: buttonClasses, style: buttonStyles, onClick: onClick }, props), loading ? (react_1.default.createElement("div", { className: "loader-container" },
            react_1.default.createElement("span", { className: "loader" }),
            react_1.default.createElement("span", null, "Loading..."))) : (react_1.default.createElement(react_1.default.Fragment, null,
            icon && iconPosition === 'left' && react_1.default.createElement("span", { className: "button-icon" }, icon),
            react_1.default.createElement("span", null, text),
            icon && iconPosition === 'right' && react_1.default.createElement("span", { className: "button-icon" }, icon))))));
};
exports.default = RopoButton;
