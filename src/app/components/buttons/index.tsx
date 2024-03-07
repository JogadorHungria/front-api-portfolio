

interface ButtonProps  {

  text: string
  type?: "submit" | "reset" | "button" | undefined
  click?:  any

}



export const Button : React.FC<ButtonProps> = ({text, type, click}: ButtonProps  ) => {


  return  (


   <button type={type} onClick={click}>{text}</button>

  )

}