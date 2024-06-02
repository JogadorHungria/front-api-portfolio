import { z } from "zod"
import { Input } from "../../../Input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "../../../buttons"
import { useContext } from "react"
import { GlobalContext } from "@/app/provider"
import { Api_portfolio } from "@/app/API/api_portfolio"

export const FormAddCertificate = () => {
    
    const {setProfile, profile, setModal} = useContext(GlobalContext)

    const creatCertificateSchema = z.object({
        link_img: z.string().min(1 , "Preencha este campo"),
        description: z.string().min(1 , "Preencha este campo"),
    })

    const {
        register,
        handleSubmit, 
        formState:{errors}} = useForm({resolver:zodResolver(creatCertificateSchema)})

        const creatCertificate = async (data: any) =>{

            const tokenLocalStorage = localStorage.getItem("@token")
            await Api_portfolio.post(`/certificate`, data ,{

                headers:{
                    'Authorization': `Bearer ${tokenLocalStorage}`
                }

            }).then(response => {
                
                console.log(response.data)

                const newProfile = profile

                newProfile.certificate.push(response.data)

                setProfile(newProfile)
                setModal(false)

            }).catch(error => {

                console.log(error.message)

            })
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