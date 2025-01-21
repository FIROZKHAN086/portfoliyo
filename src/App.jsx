import { useEffect, useState } from 'react'
import Navbar from './Componet/Navbar'
import Landing from './Componet/Landing'


function App() {
  
  const temp = ()=>{
    alert("Its A Simpal desing But Coming Days , I'm add All Animation And Its Made A coool desing")
  }

  useEffect(() => {
   temp()
  
  }, [])
  
 

  return (
   <>
   <Navbar/>
   <Landing/>
   
   </>
  )
}

export default App
