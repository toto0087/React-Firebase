// import Boton from '../boton/Boton'
import { useState } from 'react'

const Counter = ({stock,initial,onAdd}) => {
  const [counter,setCounter] = useState(initial)

  const sumar = () => {
    if(counter < stock) {
      setCounter(counter+1)
    }
  }

  const restar = () => {
    if(counter > initial) {
      setCounter(counter-1)
    }
  }

  return (
    <>
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
      <button onClick={onAdd}>Agregar al carrito</button>
      <h2>{counter}</h2>
    </>
  )
}

export default Counter