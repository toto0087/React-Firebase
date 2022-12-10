import React from 'react'


const Boton = ({texto,setCounter,counter,stock}) => {


  return (
    <>
      <button onClick={setCounter}>{texto}</button>
      <h2>hola</h2>
    </>
  )
}

export default Boton