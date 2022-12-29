// import Boton from '../boton/Boton'
import { useEffect, useState } from 'react'

const Counter = ({stock,initial = 1,onAdd}) => {
  const [counter,setCounter] = useState(initial)

  useEffect(()=>{
    setCounter(initial)
  },[initial])

  const sumar = () => {
    if(counter < stock) {
      setCounter(counter+1)
    }
  }

  const restar = () => {
    if(counter > 1) {
      setCounter(counter-1)
    }
  }



  return (
    <>
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
      <button onClick={() => onAdd(counter)}>Agregar al carrito</button>
      <h2>{counter}</h2>
    </>
  )
}

export default Counter