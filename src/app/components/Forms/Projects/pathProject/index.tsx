import { z } from "zod"
import { Input } from "../../../Input"
import { title } from "process"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "../../../buttons"

export const FormEditProject = () => {


    const creatPorjectSchema = z.object({
        title: z.string(),
        img: z.string(),
        page_link: z.string(),
        git_hub_link: z.string(),
        description: z.string(),
        type: z.string(),
    })

    const {
        register,
        handleSubmit, 
        formState:{errors}} = useForm({resolver:zodResolver(creatPorjectSchema)} )

        const creatPorject = () =>{

            alert("Editou")
        }


    return(

        <form onSubmit={handleSubmit(creatPorject)}>
             <h2>Editar projeto</h2>
            <Input type="text" title="Titulo" key="title" error={errors.title} register={register("title")}/>
            <Input type="text" title="Link da imagem" key="img" error={errors.img} register={register("img")}/>
            <Input type="text" title="Link da pagina" key="page_link" error={errors.page_link} register={register("page_link")}/>
            <Input type="text" title="Link do git" key="git_hub_link" error={errors.git_hub_link} register={register("git_hub_link")}/>
            <Input type="text" title="Descrição" key="description" error={errors.description} register={register("description")}/>
            <Input type="text" title="Tipo do projeto" key="type" error={errors.type} register={register("type")}/>
            <Button text="Criar" type="submit"/>
            
        </form>

    )

} 