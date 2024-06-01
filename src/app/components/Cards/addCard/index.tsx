"use client"

import { StyledCardProject } from "./StyledCardProject";


type TcardProps = {

  type: "project" | "stack" | "certificate"

}


export const AddCard = ({}:TcardProps) => {

 return (

    <StyledCardProject>
      <div>
        <h1>+</h1>
      </div>        
    </StyledCardProject>
  
  );
}