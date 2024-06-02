import { useContext } from "react"
import { StyledModal } from "./styledModal"
import { GlobalContext } from "@/app/provider"
import { FormAddProject } from "../Forms/Projects/cratProject"
import { FormEditProject } from "../Forms/Projects/pathProject"
import { FormAddStack } from "../Forms/Stacks/cratStack"
import { FormEditStack } from "../Forms/Stacks/pathStack"
import { FormAddCertificate } from "../Forms/Certificates/cratCertificates"
import { FormEditCertificate } from "../Forms/Certificates/pathCertificates"


export const Modal = ({} ) => {

  const {setModal, modal , setId} = useContext(GlobalContext)

  return  (

    <StyledModal>

        <div className="container_modal">
          <button onClick={()=> {setModal(false) , setId(null) }}>x</button>

          { modal == "newProject" && <FormAddProject />}
          { modal == "editProject" && <FormEditProject />}

          { modal == "newStack" && <FormAddStack />}
          { modal == "editStack" && <FormEditStack />}

          { modal == "addCertificate" && <FormAddCertificate />}
          { modal == "editCertificate" && <FormEditCertificate />}
          
          
          
        </div>

    </StyledModal>

  )

}