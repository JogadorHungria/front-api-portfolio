import styled from "styled-components";

export const StyledLogin = styled.main`
display: flex;
flex-direction: column;

gap: 50px;

width: 100%;

section{

    width: 95%;
 
    padding: 10px;
    border-radius: 6px;

    background-color: black;
    display: flex;
    flex-direction: column;


    ul{
    
        display: flex;
        gap: 10px;

        overflow-x: auto;

        padding: 20px;
    }

    li{
        display: flex;
        flex-direction: column;
        align-items: center;
    
        background-color: olive;
        min-width: 200px;
        padding: 10px;
        
        border-radius: 3px;

        div{
        
            background-color: blue;
            height: 100px;
            width: 100%;
        
        }
    }

}

`