import style from "./button.module.css"

interface ButtonProp {
  variant: "filled" | "outline";
  onClick?: () =>void;
  label: string;
  type: "submit" | "reset" | "button"
}

export default function Button({type, variant, onClick, label}:ButtonProp){
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

