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
    overflow: auto;
    
    @media (max-height: 700px) {

        justify-content: flex-start;
       
    }



    .container_modal{

        padding: 50px 20px;
        border-radius: 4px;
        background-color:blue;
        min-height: max-content;
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

           
            display: flex;
            flex-direction: column;
          
            input{
                border-radius: 4px;
                min-width: 100%;
                font-size: 18px;
            }

            span{ 
                font-weight:600 
            }

            button{
                margin-top: 20px;
                position: relative;
                width: 100%;
            }

        }

    }

`