import { z } from "zod"
import { Input } from "../../../Input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "../../../buttons"

export const FormAddCertificate = () => {


    const creatCertificateSchema = z.object({
        link_img: z.string().min(1 , "Preencha este campo"),
        description: z.string().min(1 , "Preencha este campo"),
    })

    const {
        register,
        handleSubmit, 
        formState:{errors}} = useForm({resolver:zodResolver(creatCertificateSchema)} )

        const creatCertificate = () =>{

            alert("criou um certificate")
        }


    return(

        <form onSubmit={handleSubmit(creatCertificate)}>
            <h2>Criar novo Certificado</h2>
            <Input type="text" title="Link da imagen" key="Link da imagen" error={errors.link_img} register={register("link_img")}/>
            <Input type="text" title="Descrição" key="descrição" error={errors.description} register={register("description")}/>
            <Button text="Criar" type="submit"/>
            
        </form>

    )

} 