
import { useState } from 'react';
import './App.css'
import Lista from './components/Lista';
function App() {
  
  const[ busqueda,setBusqueda]= useState("")
  
  return (
    <>
      <h1>Bienvenidos a la Web de las leyes de Feriados en Chile</h1>
      <input type='text'  value={busqueda}         onChange={(e) =>{
        setBusqueda(e.target.value)
      } }></input>
     
      <Lista busqueda={busqueda}/>
  </>
  )
}

export default App
