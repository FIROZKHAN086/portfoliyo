import { useEffect, useState } from 'react'
import Navbar from './Componet/Navbar'
import Landing from './Componet/Landing'
import Main from './Componet/Main'
import About from './Componet/About'
import Project from './Componet/Project'


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
   <Main/>
   <About/>
   <Project/>
   <Landing/>
   
   </>
  )
}

export default App
