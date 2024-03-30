"use client"

import z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../components/Input";
import { Button } from "../components/buttons";
import { useForm } from "react-hook-form";
import { StyledLogin } from "./dashboardStyled";
import { useRouter } from 'next/navigation'

const Dashboard = () => {

 
 
const router = useRouter()
 


  const LoginSchema = z.object({
    email: z.string().email("Insira um e-mail válido"),
    password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
  });


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });


  const submit = (data: any) => {

    alert(data);

    router.push('/dashboard', { scroll: false })

    return
    
  };

  return (
    <StyledLogin> 
 
      <h1>Dash Board</h1>

      <section>
        <h2>User</h2>
      </section>

      <section>
        <h2>Projects</h2>
        <ul>

          <li>
             <div> Imagem</div>
            <span>Titulo</span>
          </li>

          <li>
             <div> Imagem</div>
            <span>Titulo</span>
          </li>

          <li>
             <div> Imagem</div>
            <span>Titulo</span>
          </li>

          <li>
             <div> Imagem</div>
            <span>Titulo</span>
          </li>

          <li>
             <div> Imagem</div>
            <span>Titulo</span>
          </li>

          <li>
             <div> Imagem</div>
            <span>Titulo</span>
          </li>

        </ul>
      </section>

      <section>
        <h2>stacks</h2>

        <ul>

<li>
   <div> Imagem</div>
  <span>Titulo</span>
</li>

<li>
   <div> Imagem</div>
  <span>Titulo</span>
</li>

<li>
   <div> Imagem</div>
  <span>Titulo</span>
</li>

<li>
   <div> Imagem</div>
  <span>Titulo</span>
</li>

<li>
   <div> Imagem</div>
  <span>Titulo</span>
</li>

<li>
   <div> Imagem</div>
  <span>Titulo</span>
</li>

</ul>
      </section>

      <section>
        <h2>Certificates</h2>

        <ul>

<li>
   <div> Imagem</div>
  <span>Titulo</span>
</li>

<li>
   <div> Imagem</div>
  <span>Titulo</span>
</li>

<li>
   <div> Imagem</div>
  <span>Titulo</span>
</li>

<li>
   <div> Imagem</div>
  <span>Titulo</span>
</li>

<li>
   <div> Imagem</div>
  <span>Titulo</span>
</li>

<li>
   <div> Imagem</div>
  <span>Titulo</span>
</li>

</ul>
      </section>

    </StyledLogin>
  );
};

export default Dashboard