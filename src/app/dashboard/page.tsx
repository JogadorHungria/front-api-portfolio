"use client"

import z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { StyledLogin } from "./dashboardStyled";
import { useRouter } from 'next/navigation'
import { CardProject } from "../components/Cards";

const Dashboard = () => {
 
  // const router = useRouter()

  //   const LoginSchema = z.object({
  //     email: z.string().email("Insira um e-mail válido"),
  //     password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
  //   });

  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //   } = useForm({
  //     resolver: zodResolver(LoginSchema),
  //   });


  //   const submit = (data: any) => {

  //     alert(data);

  //     router.push('/dashboard', { scroll: false })

  //     return
      
  //   };

    const cardNmbers = [1,2,3,4,5,6,7,8,9,10]

    return (
      <StyledLogin> 
  
        <section>
          <h2>User</h2>
          <label htmlFor="">Nome</label>
          <input type="text" name="" id="" />
          <label htmlFor="">Nome</label>
          <input type="text" name="" id="" />
          <label htmlFor="">Nome</label>
          <input type="text" name="" id="" />
        </section>

        <section>
          <h2>Projects</h2>
          <ul>
          
            {cardNmbers.map((card)=> <CardProject img={""} title={`Project ${card}`} id={card}/>)}

          </ul>

        </section>

        <section>
          <h2>Stacks</h2>
          <ul>

            {cardNmbers.map((card)=> <CardProject img={"https://img.freepik.com/fotos-gratis/paisagem-de-nevoeiro-matinal-e-montanhas-com-baloes-de-ar-quente-ao-nascer-do-sol_335224-794.jpg?size=626&ext=jpg&ga=GA1.1.672697106.1714435200&semt=sph"} title={`Stack ${card}`} id={card}/>)}
  
          </ul>

        </section>

        <section>
          <h2>Certificates</h2>

          <ul>

            {cardNmbers.map((card)=> <CardProject img={""} title={`Certificat ${card}`} id={card}/>)}
  
          </ul>
        </section>

      </StyledLogin>
    );
};

export default Dashboard