import styled from "styled-components";

export const StyledCardProject = styled.li`

cursor: pointer;

min-width: 200px;
max-height: 300px;

background-color: blue;
padding: 5px;

border-radius: 5px;

display: flex;
flex-direction: column;
align-items: center;

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
    max-height: 90%;

}

}

`