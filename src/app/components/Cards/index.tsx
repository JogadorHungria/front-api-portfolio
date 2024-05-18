"use client"

import { useContext } from "react";
import { StyledCardProject } from "./StyledCardProject";
import { RiEditBoxFill } from "react-icons/ri";
import { GlobalContext } from "@/app/provider";

type TcardProps = {

  img: string
  title:string
  id: number
  project?: boolean
  type: "project" | "stack" | "certificate"

}


export const CardProject = ({img , title , id , project , type}: TcardProps) => {

  const {deletProject, deletCertificate, deletStack , setModal} = useContext(GlobalContext)

  const editCard = () => {

    setModal(true)

  }

  const deletCard = () =>{ 

    if(type == "project"){
      deletProject(id)
    }

    if(type == "stack"){
      deletStack(id)
    }

    if(type == "certificate"){
      deletCertificate(id)
    }
  }

  let imgLink = img || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBlPuD-kHu75Tl04N5i_UC3VIOZWeWZvqEHgtnf8Dbqw&s"
  return (

    <StyledCardProject>
      <img src={imgLink} alt="Capa" />
      <span>{title}</span>
      <div>
        {!project ? <><button onClick={() => editCard()}>Editar</button> <button onClick={() => deletCard()}>Exluir</button></>  : <></> }
      </div>
    </StyledCardProject>
  
  );
}