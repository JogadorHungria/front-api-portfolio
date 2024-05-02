"use client"

import { StyledCardProject } from "./StyledCardProject";
import { RiEditBoxFill } from "react-icons/ri";

type cardProps = {

  img: string
  title:string
  id: number

}

export const CardProject = ({img , title , id}: cardProps) => {

  let imgLink = img || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBlPuD-kHu75Tl04N5i_UC3VIOZWeWZvqEHgtnf8Dbqw&s"

  return (

    <StyledCardProject>
      <div> 
        <button><RiEditBoxFill size={40} color="white"/></button>
        <img src={imgLink} alt="Capa" />
      </div>
      <span>{title}</span>
    </StyledCardProject>
  
  );
}