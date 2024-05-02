"use client"

import z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../components/Input";
import { Button } from "../components/buttons";
import { useForm } from "react-hook-form";
import { StyledLogin } from "./LoginStyled";
import { useRouter } from 'next/navigation'
import { useContext } from "react";
import { ModalContext } from "../provider";

const Login = () => {

 
 
const router = useRouter()
 
const {logar , profile, setProfile} = useContext(ModalContext)

  const LoginSchema = z.object({
    email: z.string().email("Insira um e-mail válido"),
    password: z.string().min(4, "A senha deve ter no mínimo 4 caracteres"),
  });


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });


  const submit = async (data: any) => {

    setProfile(null)

    await logar(data.email , data.password)

    router.push('/dashboard', { scroll: false })
    return

  };

  return (
    <StyledLogin> 
    
        <form onSubmit={handleSubmit(submit)}>

            <h1>LOGIN</h1>

            <Input  title="E-mail" error={errors.email} register={register("email")}/>
           
            <Input type="password" title="Password" error={errors.password} register={register("password")} />
           
            <Button key={"Logar"} text="Logar" type="submit" />
        </form>

    </StyledLogin>
  );
};

export default Login