"use client"

import Link from "next/link"
import { usePathname } from 'next/navigation'


export const Header = () => {

  const pathname = usePathname()
 
  
  const deslogar = () =>{
    localStorage.clear()
  }


  return (

    <header>
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
    </header>
  
  );
}