"use client"

import React, { createContext, useState, ReactNode, useContext } from "react";
import { Api_portfolio } from "../API/api_portfolio";

interface IModalContext {

   logar: (email: string, password: string) => Promise<string | null>
   profile: any
   setProfile: React.Dispatch<any>
   get_profile: () => Promise<void>
};

interface IChildren {
  children: ReactNode
}


export const ModalContext = createContext<IModalContext>({} as IModalContext);

export const ModalProvider = ({ children } : IChildren ) => {
 
  const [token, setToken ] = useState<string | null>(null)
 
  const [profile, setProfile] = useState<any>(null)

  const logar = async (email: string, password: string) => {

    const user = {
      email: email,
      password: password
    }

    await Api_portfolio.post("/login", user)
    .then(response => {
      
      setToken(response.data.token)
     
    }).catch(error => {
      
      console.error("Ocorreu um erro ao LOGAR:", error);

    });

    return token
  }

   const get_profile = async ()  => {
    
     await Api_portfolio.get("/user/profile", {

      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      
      setProfile(response.data)
  
    }).catch(error => {
      
      console.error("Ocorreu um erro: get_profile", error.message);

    });

  }

  return (
    <ModalContext.Provider value={{ logar , profile , setProfile, get_profile}}>
      {children}
    </ModalContext.Provider>
  );
};
