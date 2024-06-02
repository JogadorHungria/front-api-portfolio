"use client"

import { useContext } from "react";
import { StyledCardProject } from "./StyledCardProject";
import { GlobalContext } from "@/app/provider";


type TcardProps = {

  type: string

}

export const AddCard = ({type}:TcardProps) => {

  const {modal, setModal} = useContext(GlobalContext)



 return (

    <StyledCardProject onClick={() => setModal(type)}>
      <div>
        <h1>+</h1>
      </div>        
    </StyledCardProject>
  
  );
}