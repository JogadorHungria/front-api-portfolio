"use client"

import Link from "next/link"
import { usePathname } from 'next/navigation'
import { StyledHeader } from "./styledHeader"
import router, { useRouter } from "next/router"

export const Header = () => {

  const pathname = usePathname()
 
  
  const deslogar = async () =>{

    alert("deslogando em...")
    return
  
  }


  return (

    <StyledHeader>
      <nav>
          <ul>
          { 
          pathname === "/login"  && 
          <>
            <li>
              <Link href="/">
                Home
              </Link>
            </li>


            <li>
            <Link href="/register">
              Registrar
            </Link>
            </li>
            </>
          }

       

          

          {

          pathname == "/"  &&
          <>
            <li>
              <Link href="/login">
                Login
              </Link>
            </li>

            <li>
            <Link href="/register">
              Registrar
            </Link>
            </li>
          </>
          }
          
          {

          pathname == "/register" &&
          <>
            <li>
              <Link href="/">
                Home
              </Link>
            </li>

            <li>
            <Link href="/login">
              Login
            </Link>
            </li>
          </>

          }

            

          { 

          pathname == "/dashboard" &&
            <li>
              <Link onClick={() => deslogar() } href="/">
                Deslogar
              </Link>
            </li>
          }

          </ul>
        </nav>
    </StyledHeader>
  
  );
}