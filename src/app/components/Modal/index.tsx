import { useContext } from "react"
import { StyledModal } from "./styledModal"
import { GlobalContext } from "@/app/provider"






export const Modal = ({} ) => {

  const {setModal, modal} = useContext(GlobalContext)

  return  (

    <StyledModal>

        <div className="container_modal">
          <button onClick={()=> setModal(false)}>x</button>

        <h1>{modal as any}</h1>
         
          {/* <form action="">

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

            <Button type="button" text="Editar"/>
          </form> */}

        </div>

    </StyledModal>

  )

}