import * as React from "react";
import style from "./button.module.css"

interface ButtonProp {
  children: React.ReactNode;
  variant: "filled" | "outline";
  onClick?: () =>void;
  label: string;
  type: "submit" | "reset" | "button"
}

export default function Button({children, type, variant, onClick, label}:ButtonProp){
    return(
      <>
       <button 
         onClick={onClick}
         type={type}
         className={style[variant]}
         >
          {label}
         </button>
      </>
    )
}

