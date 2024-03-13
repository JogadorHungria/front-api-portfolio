import { StyledInput } from "./InputStyled"

interface IInput {

    title: string
    type?: "text" | "email" | "number" | "password"
    register?: any 
    error: any
}

export const Input = ({ title , type , register , error}: IInput) => {

    if(!type){
        type = "text"
    }

return(
    
    <StyledInput>
        <label htmlFor={title}>{title}</label>
        <input type={type} name={title} {...register} />
        <span>  {error && error.message}</span>
    </StyledInput>

    )

}