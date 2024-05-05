"use-client"
import styled from "styled-components";

export const StyledCardProject = styled.li`


min-width: 200px;
height: 250px;

background-color: blue;
padding: 5px;

border-radius: 5px;

display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;


img{

    min-width: 90%;
    max-height: 70%;

}

div{

    display: flex;
    gap:10px ;
    max-height: 20%;

    button{
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        border: solid 1px;
        width:75px;
        height: 30px;
        font-weight: 600;
        
    }

    button + button {
    
        background-color: red;
        color: white;
        border: solid 1px;
    }

}




`