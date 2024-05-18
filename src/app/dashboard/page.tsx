"use client"

import { StyledLogin } from "./dashboardStyled";

import { CardProject } from "../components/Cards";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../provider";
import { useRouter } from "next/router";
import { Modal } from "../components/Modal";

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

            {
              !profile.project[0] 
              ? <CardProject 
                type="project" 
                project={true} 
                img={"https://img.freepik.com/vetores-gratis/novo-design-de-icone-x-do-logotipo-do-twitter-em-2023_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.672697106.1714780800&semt=ais"} 
                title={"not project"} 
                id={1} /> 
              : profile.project.map((pro: any)=> 
                <CardProject type="project" key={pro.project_id} img={pro.img} title={pro.title} id={pro.project_id}/>)
            }

            
            
          </ul>

        </section>

        <section>
          <h2>Stacks</h2>
          <ul>

          {
              !profile.stacks[0] 
              ? <CardProject 
                type="stack" 
                project={true} 
                img={"https://img.freepik.com/vetores-gratis/novo-design-de-icone-x-do-logotipo-do-twitter-em-2023_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.672697106.1714780800&semt=ais"} 
                title={"Crie uma nova Stack"} id={1} /> 
              : profile.stacks.map((pro: any)=> 
                <CardProject type="stack" key={pro.stack_id} img={pro.img} title={pro.title} id={pro.stack_id}/>)
            }

          </ul>

        </section>

        <section>
          <h2>Certificates</h2>

          <ul>

          {
              !profile.certificate[0] 
              ? <CardProject 
                type="certificate" 
                project={true} 
                img={"https://img.freepik.com/vetores-gratis/novo-design-de-icone-x-do-logotipo-do-twitter-em-2023_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.672697106.1714780800&semt=ais"} 
                title={"Crie um Certificado"} id={1} /> 
              : profile.certificate.map((pro: any)=> 
                <CardProject type="certificate" key={pro.certificate_id} img={pro.img} title={pro.title} id={pro.certificate_id}/>)
            }

          </ul>
        </section>

        </> }
      </StyledLogin>

      
    );
  
};

export default Dashboard