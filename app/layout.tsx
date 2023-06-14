import React from 'react'
import '@/styles/globals.css'
import exp from 'constants'

export const metadata = {
    title: 'Mint-Prompt-AI',
    description : 'Find the best AI Prompts for your needs',
} 

interface AppProps {
    children: React.ReactNode;
  }

const  RootLayout = ({children}:AppProps) => {
  return ( 
    <html lang = "en ">
        <body>
            <div className='main'>
                 <div className='gradient' />
            </div>
            <main className='app'>
                {children}
            </main>
 
        </body> 
    </html>
  )
} 

export default  RootLayout