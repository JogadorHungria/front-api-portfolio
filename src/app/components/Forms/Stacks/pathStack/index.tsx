import { z } from "zod"
import { Input } from "../../../Input"
import { title } from "process"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "../../../buttons"

export const FormEditStack = () => {


    const editStackSchema = z.object({
        stack_name: z.string(),
    })

    const {
        register,
        handleSubmit, 
        formState:{errors}} = useForm({resolver:zodResolver(editStackSchema)} )

        const editStack = () =>{

            alert("Editou")
        }


    return(

        <form onSubmit={handleSubmit(editStack)}>
             <h2>Editar Stack</h2>
            <Input type="text" title="Nome" key="stackName" error={errors.stack_name} register={register("stack_name")}/>
            <Button text="Criar" type="submit"/>
            
        </form>

    )

} 