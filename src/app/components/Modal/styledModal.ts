import styled from "styled-components";

export const  StyledModal = styled.button`

    top: 0;
    z-index: 111;
    border-radius: 0;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(23, 21, 21, 0.90);
    cursor: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    opacity: 100%;
    

    >div{
    
     background-color:blue;
     min-height: 200px;
     min-width: 400px;

    }


`