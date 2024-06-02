import { z } from "zod"
import { Input } from "../../../Input"
import { title } from "process"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "../../../buttons"
import { Api_portfolio } from "@/app/API/api_portfolio"
import { useContext } from "react"
import { GlobalContext } from "@/app/provider"

export const FormAddStack = () => {

    const {setProfile, profile, setModal} = useContext(GlobalContext)
    
    const creatStackSchema = z.object({
        stack_name: z.string().min(1 , "Preencha este campo"),

    })

    const {
        register,
        handleSubmit, 
        formState:{errors}} = useForm({resolver:zodResolver(creatStackSchema)} )

        const creatStack = async (data: any) =>{

            const tokenLocalStorage = localStorage.getItem("@token")
            await Api_portfolio.post(`/stack`, data ,{

                headers:{
                    'Authorization': `Bearer ${tokenLocalStorage}`
                }

            }).then(response => {
                
                console.log(response.data)

                const newProfile = profile

                newProfile.stacks.push(response.data)

                setProfile(newProfile)
                setModal(false)

            }).catch(error => {

                console.log(error.message)

            })
        }


    return(

        <form onSubmit={handleSubmit(creatStack)}>
             <h2>Criar nova stack</h2>
            <Input type="text" title="Titulo" key="Nome" error={errors.stack_name} register={register("stack_name")}/>
           <Button text="Criar" type="submit"/>
            
        </form>

    )

} 