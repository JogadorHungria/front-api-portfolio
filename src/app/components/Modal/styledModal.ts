import styled from "styled-components";

export const  StyledModal = styled.div`

    top: 0;
    z-index: 111;
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
    

    .container_modal{

        padding: 50px 10px;
        border-radius: 4px;
        background-color:blue;
        min-height: 200px;
        min-width: 400px;
        position: relative;

        > button{

            position: absolute;
            right: 5px;
            top: 5px;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            padding: 0;
            
            font-size: 18px;
        }


        form{
            min-width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        
            
           

            input{
                border-radius: 4px;
                width: 90%;
                font-size: 18px;
            }

            button{
                margin-top: 20px;
                position: relative;
                width: 90%;
            }

        }

    }

`