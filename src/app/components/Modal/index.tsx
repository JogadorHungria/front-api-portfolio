import { useContext } from "react"
import { StyledModal } from "./styledModal"
import { GlobalContext } from "@/app/provider"
import { FormAddProject } from "../Forms/Projects"






export const Modal = ({} ) => {

  const {setModal, modal} = useContext(GlobalContext)

  return  (

    <StyledModal>

        <div className="container_modal">
          <button onClick={()=> setModal(false)}>x</button>

          { modal == "project" && <FormAddProject />}
      
        </div>

    </StyledModal>

  )

}