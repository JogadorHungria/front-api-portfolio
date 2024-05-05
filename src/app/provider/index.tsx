"use client"

import React, { createContext, useState, ReactNode, useContext } from "react";
import { Api_portfolio } from "../API/api_portfolio";
import { IUserCreate } from "../@types";

interface IGlobalContext {

   logar: (email: string, password: string) => Promise<void>
   profile: any
   setProfile: React.Dispatch<any>
   get_profile: () => Promise<void>
   registerUser: (body: IUserCreate) => Promise<void>
};

interface IChildren {
  children: ReactNode
}


export const GlobalContext = createContext<IGlobalContext>({} as IGlobalContext);

export const GlobalProvider = ({ children } : IChildren ) => {
 
  const [profile, setProfile] = useState<any>(null)

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
    })
    .then(response => {
      
      setProfile(response.data)
  
    }).catch(error => {
      
      console.error("Ocorreu um erro: get_profile", error.message);

    });

  }

  return (
    <GlobalContext.Provider value={{ logar , profile , setProfile, get_profile, registerUser}}>
      {children}
    </GlobalContext.Provider>
  );
};
