import { z } from "zod"
import { Input } from "../../../Input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "../../../buttons"
import { Api_portfolio } from "@/app/API/api_portfolio"
import { useContext } from "react"
import { GlobalContext } from "@/app/provider"


export const FormAddProject = () => {

    const {setProfile, profile, setModal} = useContext(GlobalContext)

    const creatPorjectSchema = z.object({

        title: z.string().min(1 , "Preencha este campo"),
        img: z.string().min(1 , "Preencha este campo"),
        page_link: z.string().min(1 , "Preencha este campo"),
        git_hub_link: z.string().min(1 , "Preencha este campo"),
        description: z.string().min(1 , "Preencha este campo"),
        type: z.string().min(1 , "Preencha este campo"),

    })

    const {
        register,
        handleSubmit, 
        formState:{errors}} = useForm({resolver:zodResolver(creatPorjectSchema)} )

        const creatPorject = async (data: any) =>{

            const tokenLocalStorage = localStorage.getItem("@token")
            await Api_portfolio.post(`/project`, data ,{

                headers:{
                    'Authorization': `Bearer ${tokenLocalStorage}`
                }

            }).then(response => {
                
                console.log(response.data)

                const newProfile = profile

                newProfile.project.push(response.data)

                setProfile(newProfile)
                setModal(false)

            }).catch(error => {

                console.log(error.message)

            })
        }

    return(

        <form onSubmit={handleSubmit(creatPorject)}>
             <h2>Criar novo projeto</h2>
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