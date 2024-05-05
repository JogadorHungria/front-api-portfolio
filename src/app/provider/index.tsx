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
};

interface IChildren {
  children: ReactNode
}


export const GlobalContext = createContext<IGlobalContext>({} as IGlobalContext);

export const GlobalProvider = ({ children } : IChildren ) => {
 
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
      return true
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


  const registerUser = async (body : IUserCreate) => {

    await Api_portfolio.post("/user", body )
    .then(response => {
      
      console.log(response.data)

    }).catch(error => {
      
      console.error(error.response.data.message);
     
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
      deletProject
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
