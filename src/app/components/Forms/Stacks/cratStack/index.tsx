import { z } from "zod"
import { Input } from "../../../Input"
import { title } from "process"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "../../../buttons"

export const FormAddStack = () => {


    const creatStackSchema = z.object({
        stack_name: z.string().min(1 , "Preencha este campo"),

    })

    const {
        register,
        handleSubmit, 
        formState:{errors}} = useForm({resolver:zodResolver(creatStackSchema)} )

        const creatStack = () =>{

            alert("criou uma Stack")
        }


    return(

        <form onSubmit={handleSubmit(creatStack)}>
             <h2>Criar nova stack</h2>
            <Input type="text" title="Titulo" key="Nome" error={errors.stack_name} register={register("stack_name")}/>
           <Button text="Criar" type="submit"/>
            
        </form>

    )

} 