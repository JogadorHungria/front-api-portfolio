"use client"

import React, { createContext, useState, ReactNode, useContext } from "react";
import { Api_portfolio } from "../API/api_portfolio";
import { IUser, IUserCreate } from "../@types";

interface IGlobalContext {

   logar: (email: string, password: string) => Promise<void>
   profile: any
   setProfile: React.Dispatch<any>
   get_profile: () => Promise<void>
   registerUser: (body: IUserCreate) => Promise<void>
   deletProject:  (id: number) => Promise<void>
   deletStack: (id: number) => Promise<void>
   deletCertificate: (id: number) => Promise<void>
   modal: Boolean | string
   setModal: React.Dispatch<Boolean | string>
   id:number | null
   setId: React.Dispatch<number | null>
};

interface IChildren {
  children: ReactNode
}


export const GlobalContext = createContext<IGlobalContext>({} as IGlobalContext);

export const GlobalProvider = ({ children } : IChildren ) => {
 

  const [modal, setModal] = useState<Boolean | string>(false)
  const [id, setId] = useState<number | null>(null)

  const [profile, setProfile] = useState<IUser| null>( null)

  const logar = async (email: string, password: string) => {

    const user = {
      email: email,
      password: password
    }

    await Api_portfolio.post("/login", user )
    .then(response => {
      
      localStorage.setItem("@token", response.data.token)

    }).catch(error => {
      
      console.error("Ocorreu um erro ao LOGAR:", error);
      return 
    })
   
  }

  const registerUser = async (body : IUserCreate) => {

    await Api_portfolio.post("/user", body )
    .then(response => {
      
      console.log(response.data)

    }).catch(error => {
      
      console.error(error.response.data.message);
     
    })
   
  }

  const deletProject = async (id: number) => {

    const tokenLocalStorage = localStorage.getItem("@token")

      await Api_portfolio.delete(`/project/${id}`, {

        headers: {
          'Authorization': `Bearer ${tokenLocalStorage}`
        }
    } )
    .then(response => {
      
      const newProjectList = profile?.project.filter((project)=> project.project_id != id)
      const newProfile = {
        ...profile,
        project:newProjectList

      }
      setProfile(newProfile as IUser)

    }).catch(error => {
      
      console.error("Ocorreu um erro ao EXCLUIR:", error);
      return
    })
   
  }

  const deletStack = async (id: number) => {

    const tokenLocalStorage = localStorage.getItem("@token")

      await Api_portfolio.delete(`/stack/${id}`, {

        headers: {
          'Authorization': `Bearer ${tokenLocalStorage}`
        }
    } )
    .then(response => {
      
      const newStackList = profile?.stacks.filter((stack)=> stack.stack_id != id)
      const newProfile = {
        ...profile,
        stacks: newStackList

      }
      setProfile(newProfile as IUser)

    }).catch(error => {
      
      console.error("Ocorreu um erro ao EXCLUIR:", error);
      return
    })
   
  }

  const deletCertificate = async (id: number) => {

    const tokenLocalStorage = localStorage.getItem("@token")

      await Api_portfolio.delete(`/certificate/${id}`, {

        headers: {
          'Authorization': `Bearer ${tokenLocalStorage}`
        }
    } )
    .then(response => {
      
      const newCertificateList = profile?.certificate.filter((stack)=> stack.certificate_id != id)
      const newProfile = {
        ...profile,
        certificate: newCertificateList

      }
      setProfile(newProfile as IUser)

    }).catch(error => {
      
      console.error("Ocorreu um erro ao EXCLUIR:", error);
      return
    })
   
  }



  

   const get_profile = async ()  => {

     const tokenLocalStorage = localStorage.getItem("@token")

      await Api_portfolio.get("/user/profile", {
          headers: {
            'Authorization': `Bearer ${tokenLocalStorage}`
          }
      }
    )
    .then(response => {
      
      setProfile(response.data)
  
    }).catch(error => {
      
      console.error("Ocorreu um erro: get_profile", error.message);

    });

  }

  return (
    <GlobalContext.Provider value={{ 
      logar, 
      profile,
      setProfile,
      get_profile,
      registerUser,
      deletProject,
      deletStack,
      deletCertificate,
      setModal,
      modal,
      id,
      setId
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
