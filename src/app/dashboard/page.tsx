"use client"

import { StyledLogin } from "./dashboardStyled";

import { CardProject } from "../components/Cards";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../provider";
import { useRouter } from "next/router";
import { Modal } from "../components/Modal";
import { AddCard } from "../components/Cards/addCard";

const Dashboard = () => {

  const {profile, get_profile, modal, setModal } = useContext(GlobalContext)
  
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
      { modal && <Modal />}
      { profile &&  
      <>
      
        <section>
          <h2>Nome</h2>
          <span>{profile && profile.username}</span>
          <h2>E-mail</h2>
          <span>{profile && profile.email}</span>
        </section>

        <section>
          <h2>Projects</h2>
          <ul>

          <AddCard type="project"/>

            {
             profile.project.map((pro: any)=> 
                <CardProject type="project" key={pro.project_id} img={pro.img} title={pro.title} id={pro.project_id}/>)
            }
            
          </ul>

        </section>

        <section>
          <h2>Stacks</h2>
          <ul>

          <AddCard type="project"/>

          {
              profile.stacks.map((pro: any)=> 
                <CardProject type="stack" key={pro.stack_id} img={pro.img} title={pro.title} id={pro.stack_id}/>)
          }

          </ul>

        </section>

        <section>
          <h2>Certificates</h2>

          <ul>

          <AddCard type="project"/>

          {
               profile.certificate.map((pro: any)=> 
                <CardProject type="certificate" key={pro.certificate_id} img={pro.img} title={pro.title} id={pro.certificate_id}/>)
            }

          </ul>
        </section>

        </> }
      </StyledLogin>

      
    );
  
};

export default Dashboard