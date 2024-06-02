

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";


import { GlobalProvider } from "./provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "API PORTFOLIO",
  description: "API PARA GERAÇÃO DE DADOS DE PORTIFOLIO",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  return (
    <html lang="pt-br">
      <GlobalProvider>
        <body>

          <div className="black-drop"> 
            <Header /> 
            {children}
            <footer><h1>Footer</h1></footer>
          </div>
        
        </body>
      </GlobalProvider>
    </html>
  );
}
