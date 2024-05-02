"use client"

import { StyledCardProject } from "./StyledCardProject";

type cardProps = {

  img: string
  title:string
  id: number

}

export const CardProject = ({img , title , id}: cardProps) => {

  return (

    <StyledCardProject>
      <div> 
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBlPuD-kHu75Tl04N5i_UC3VIOZWeWZvqEHgtnf8Dbqw&s" alt="Capa" />
      </div>
      <span>{title}</span>
    </StyledCardProject>
  
  );
}