"use-client"
import styled from "styled-components";

export const StyledCardProject = styled.li`



position: relative;


min-width: 200px;
height: 200px;

background-color: blue;
padding: 5px;

border-radius: 5px;

display: flex;
flex-direction: column;
align-items: center;

button{
    position: absolute;
    top: -15px;
    right: -20px;

    background:none;

    margin: 0;
    padding: 0;
    display: flex;
}

div{

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height:80%;
    
    border: none;

    img{

    border-radius: 5px;
    width: 90%;
    height: 90%;

    }

}

`