import React, { ButtonHTMLAttributes, ReactNode } from "react";


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
    onClick?: () => void;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({children, onClick, type="button", className="", ...props}) => {
    return(
        <button
        className={`custom button ${className}`}
        onClick={onClick}
        type={type}
        {...props}
        >
            {children}
        </button>
    )
}

export default Button;