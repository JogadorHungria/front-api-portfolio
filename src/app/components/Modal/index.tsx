import { MouseEventHandler, useContext } from "react"
import { StyledModal } from "./styledModal"
import { GlobalContext } from "@/app/provider"



interface ModalProps  {
}

export const Modal = ({}) => {

  const {setModal} = useContext(GlobalContext)

  const closeModal = () => {

    setModal(false)

  }

  return  (

    <StyledModal>

        <div>

          <h1>MODAL</h1>
          <button onClick={()=>closeModal()}>Fechar</button>

        </div>

    </StyledModal>

  )

}