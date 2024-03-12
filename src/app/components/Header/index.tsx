"use client"

import { Api_portfolio } from "@/app/API";
import { Button } from "../buttons"

export const Header = () => {

  const modalLogar = async ()  => {
  
    const user = {
      email: "novousuario@gmail.com",
      password: "1234"
    }

    await Api_portfolio.post("/login", user)
    .then(response => {
      
      console.log(response.data);
      
    })
    .catch(error => {
      
      console.error("Ocorreu um erro:", error);
    });

    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")

  }

  const modalCriarConta = () => {
  
    alert("Modal criar conta")
    return

  }

  return (

    <header>
  
      <Button key={"Criar conta"} text="Modan Criar conta" click={ modalCriarConta}/> 
      <Button key={"Logar"} text="Logar" click={ modalLogar}/>
     
    </header>
  
  );
}