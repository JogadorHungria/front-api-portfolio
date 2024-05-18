import { MouseEventHandler, useContext } from "react"
import { StyledModal } from "./styledModal"
import { GlobalContext } from "@/app/provider"
import { Button } from "../buttons"



interface ModalProps  {
}

export const Modal = ({}) => {

  const {setModal} = useContext(GlobalContext)


  
  return  (

    <StyledModal>

        <div className="container_modal">
          <button onClick={()=> setModal(false)}>x</button>

          <form action="">

            <label htmlFor="">Titulo</label>
            <input type="text" />

            <label htmlFor="">Imagem Link</label>
            <input type="text" />

            <label htmlFor="">Tipo do projeto</label>
            <input type="text" />

            <label htmlFor="">link do repositorio</label>
            <input type="text" />

            <label htmlFor="">Link da página</label>
            <input type="text" />
        
            <label htmlFor="">descrição</label>
            <input type="text" />


            <Button text="Editar"/>
          </form>

        </div>

    </StyledModal>

  )

}