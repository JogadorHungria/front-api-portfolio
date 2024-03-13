import styled from "styled-components";

export const ModalStyled = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
   
  
    background-color: rgba(0, 0, 50, 0.8);
   
    
    position: fixed;
    top: 0;
    z-index: 1;

    min-width: 100vw;
    height: 100vh;

  
    > div{

        border-radius: 6px;
        border: solid 1px aliceblue;
        
        position: relative;

        background-color: rgb(2, 2, 87);
        color: black;
        
        width: 500px;
        
        max-width: 80%;
        max-height: 80%;

       > button{
            position: absolute;
            right: 15px;
            top: 15px;

            background-color: red;

            color: white;
            background-color: black;
            padding: 5px 10px;
            border: solid 1px ;
        }

        form{
           
            padding: 30px;

            display: flex;
            flex-direction: column;
            align-items: center;

            gap: 10px;

            width: 100%;
            height: 100%;

            color:  white;

            div{

                display: flex;
                flex-direction: column;
                align-items: center;

                gap: 5px;
                width:100%;

                label{
                    
                    align-self: flex-start;
                    
                }

                input{

                    border: solid 1px black;
                    border-radius: 3px;
                    width: 100%;

                    padding: 5px 10px;
                }
            }

            button{
            
                color: white;
                background-color: blue;
                border: solid 2px ;
            
            }

        }


    }


`