import React from "react"

interface ButtonProps{
    style?: string;//props
    label?: string;
    onClick?: (event: any) => void;
    type?: "submit" | "button" | "reset" | undefined;
}

//componente Button
export const Button: React.FC<ButtonProps> = ({  
    onClick, style, label, type
} :  ButtonProps) =>{
    return(

        <button className={`${style} text-white px-4 py-2  rounded-lg `} onClick={onClick} type={type}>
            { label }
        </button>

    )
}