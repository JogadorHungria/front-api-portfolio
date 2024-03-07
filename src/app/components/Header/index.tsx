"use client"

import { Button } from "../buttons"

export const Header = () => {

  const modalLogar = () => {
  
    console.log("LOGANDO")
    return

  }

  const modalCriarConta = () =>{
  
    console.log("Modal Criar conta")
    return

  }

  return (

    <header>
      <Button key={"Modal Criar conta"} text="Modan Criar conta" click={ modalCriarConta}/> 
      <Button key={"Logar"} text="Logar" click={ modalLogar}/>
    </header>
  
  );
}