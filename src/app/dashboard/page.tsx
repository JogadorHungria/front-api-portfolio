"use client"

import { StyledLogin } from "./dashboardStyled";
import { CardProject } from "../components/Cards";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../provider";
import { Modal } from "../components/Modal";
import { AddCard } from "../components/Cards/addCard";

const Dashboard = () => {

  const {profile, get_profile, modal, setModal } = useContext(GlobalContext)
  
  useEffect(() => { 

    get_profile()

  },[])

    return (
      <StyledLogin> 
      { modal && <Modal/>}
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

          <AddCard type="newProject"/>

            {
             profile.project.map((pro: any)=> 
                <CardProject type="project" key={pro.project_id} img={pro.img} title={pro.title} id={pro.project_id}/>)
            }
            
          </ul>

        </section>

        <section>
          <h2>Stacks</h2>
          <ul>

          <AddCard type="newStack"/>

          {
              profile.stacks.map((pro: any)=> 
                <CardProject type="stack" key={pro.stack_id} img={pro.img} title={pro.title} id={pro.stack_id}/>)
          }

          </ul>

        </section>

        <section>
          <h2>Certificates</h2>

          <ul>

          <AddCard type="certificate"/>

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