import { SyledButton } from "./styledButton"


interface ButtonProps  {

  text: string
  type?: "submit" | "reset" | "button" | undefined
  click?:  any

}



export const Button : React.FC<ButtonProps> = ({text, type, click}: ButtonProps  ) => {


  return  (

   <SyledButton type={type} onClick={click}>{text}</SyledButton>

  )

}