"use client"

import { StyledLogin } from "./dashboardStyled";

import { CardProject } from "../components/Cards";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../provider";
import { useRouter } from "next/router";

const Dashboard = () => {

  const {profile, get_profile, } = useContext(GlobalContext)
  
  useEffect(() => { 

    get_profile()

  },[])
    
  
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
          <span>{profile && profile.username}</span>
        </section>

        <section>
          <h2>Projects</h2>
          <ul>
          
            {profile && profile.project.map((pro: any)=> 
            <CardProject key={pro.project_id} img={pro.img} title={pro.title} id={pro.project_id}/>)
            }

          </ul>

        </section>

        <section>
          <h2>Stacks</h2>
          <ul>

          {profile && profile.stacks.map((pro: any)=> 
            <CardProject
              key={pro.stack_id}
              img={""} 
              title={pro.stack_name} 
              id={pro.stack_id}/>)
            }
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