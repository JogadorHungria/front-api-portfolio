"use client"

import React, { createContext, useState, ReactNode, useContext } from "react";

interface IModalContext {
  modal: boolean | ReactNode;
  setModal: React.Dispatch<React.SetStateAction<boolean | ReactNode>>;
};

interface IChildren {
  children: ReactNode
}


export const ModalContext = createContext<IModalContext>({} as IModalContext);

export const ModalProvider = ({ children } : IChildren ) => {
  const [modal, setModal] = useState<boolean | ReactNode>(false);

  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      {children}
    </ModalContext.Provider>
  );
};
