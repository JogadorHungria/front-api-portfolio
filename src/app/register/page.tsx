"use client"

import z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../components/Input";
import { Button } from "../components/buttons";
import { useForm } from "react-hook-form";
import { StyledLogin } from "./RegisterStyled";
import { useRouter } from 'next/navigation'
import { useContext } from "react";
import { GlobalContext } from "../provider";

const Register = () => {

  const {registerUser} = useContext(GlobalContext)
 
 
const router = useRouter()
 
  const LoginSchema = z.object({
    email: z.string().email("Insira um e-mail válido"),
    password: z.string().min(4, "A senha deve ter no mínimo 6 caracteres"),
    username: z.string().min(1, "Campo obrigatório"),
    contact_phone: z.string(),
    linkedin_perfil: z.string(),
    git_hub_perfil: z.string()
  });


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });


  const submit = async (data: any) => {
    await registerUser(data)
    // router.push('/login', { scroll: false })

    return

  };

  return (
    <StyledLogin> 
    
        <form onSubmit={handleSubmit(submit)}>

            <h1>Criar Conta</h1>

            <Input  title="E-mail" error={errors.email} register={register("email")}/>
            <Input type="password" title="Password" error={errors.password} register={register("password")} />
            <Input  title="Nome" error={errors.username} register={register("username")}/>
            <Input  title="Telefone" error={errors.contact_phone} register={register("contact_phone")}/>
            <Input  title="Linkedin" error={errors.linkedin_perfil} register={register("linkedin_perfil")}/>
            <Input  title="Git Hub" error={errors.git_hub_perfil} register={register("git_hub_perfil")}/>
           
            <Button key={"Logar"} text="Criar conta" type="submit" />
        </form>

    </StyledLogin>
  );
};

export default Register