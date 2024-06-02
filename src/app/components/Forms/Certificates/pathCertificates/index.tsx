import { z } from "zod"
import { Input } from "../../../Input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "../../../buttons"

export const FormEditCertificate = () => {


    const editCertificateSchema = z.object({
        link_img: z.string(),
        description: z.string(),
    })

    const {
        register,
        handleSubmit, 
        formState:{errors}} = useForm({resolver:zodResolver(editCertificateSchema)} )

        const editCertificate = () =>{

            alert("editou")
        }


    return(

        <form onSubmit={handleSubmit(editCertificate)}>
            <h2>Editar Certificado</h2>
            <Input type="text" title="Link da imagen" key="Link da imagen" error={errors.link_img} register={register("link_img")}/>
            <Input type="text" title="Descrição" key="descrição" error={errors.description} register={register("description")}/>
            <Button text="Criar" type="submit"/>
            
        </form>

    )

} 