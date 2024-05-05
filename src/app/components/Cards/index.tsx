"use client"

import { StyledCardProject } from "./StyledCardProject";
import { RiEditBoxFill } from "react-icons/ri";

type cardProps = {

  img: string
  title:string
  id: number
  project?: boolean

}

export const CardProject = ({img , title , id , project}: cardProps) => {

  let imgLink = img || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBlPuD-kHu75Tl04N5i_UC3VIOZWeWZvqEHgtnf8Dbqw&s"
  console.log(project)

  return (

    <StyledCardProject>
      <img src={imgLink} alt="Capa" />
      <span>{title}</span>
      <div>
        {!project ? <><button>Editar</button> <button>Exluir</button></>  : <></> }
      </div>
    </StyledCardProject>
  
  );
}