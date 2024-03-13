"use client"

import { ReactElement, useContext } from "react"
import { ModalStyled } from "./style"
import { Button } from "../buttons"
import { ModalContext } from "@/app/provider"
interface IModal {
    childrem?: ReactElement
}
export const Modal = ({childrem}: IModal) =>{

    const { setModal , modal} = useContext(ModalContext)


    return (
        
        <ModalStyled>
            <div>
            <Button key={"X"} type="button" text="X" click={() => setModal(false)} />
            {modal}
            </div>
        </ModalStyled>

        )

}