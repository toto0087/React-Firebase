import { useState,useEffect } from "react"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import Form from "../form/Form"
import { Link } from "react-router-dom"
import {getDoc,doc,collection} from "firebase/firestore"
import {db} from "../../firebaseConfig"

const Cart = () => {

    const {cart,clearCart,getPrice} = useContext(CartContext)

    const {deleteProductById} = useContext(CartContext)

    const [buy,setBuy] = useState(false)

    const [cartId,setCartId] = useState(null)

    const [order,setOrder] = useState({})

    const openForm = ()=> {
      if(cart.length > 0) {
        setBuy(true)
      } else {
        alert("no se puede comprar la nada")
      }
    }


    useEffect(()=>{
        if(cartId) {
            const orderCollection = collection(db,"orders")
      const ref = doc(orderCollection,cartId)
  
      getDoc(ref)
      .then(res => {
        setOrder({
          id:res.id,
          ...res.data()
        })
      })
    }

  
    },[cartId])    

    //aqui puedo crear un componente y renderizar una factura... (todavia esta bajo trabajo)
    console.log(order)

    if(cartId) {

      return <div>
        <h1>Tu orden de compra es: {cartId}</h1>
        <Link to="/">Volver a comprar</Link>
      </div>
    }


  return (
    <>

      <div>
        {
          cart.map (item => (
            <div key={item.id}>
              <h2>{item.name}</h2>
              <h2>{item.price*item.quantity}</h2>
              <h2>{item.quantity} Unidades</h2>
              <button onClick={() => deleteProductById(item.id)}>Quitar</button>
            </div>
          ))
        }

        {cart.length < 1 && <h2>No hay elementos</h2>}
      </div>
        <h2>Precio total: {getPrice()}</h2>


      {buy ? <Form cart={cart} 
                    totalPrice={getPrice} 
                    setCartId={setCartId} 
                    clearCart={clearCart}
                    /> : (
        cart.length > 0 &&
        <div>
          <button 
            onClick={()=>clearCart()}>
              Limpiar Carrito
          </button>
           {cart.length > 0 && 
            <button onClick={openForm}>
              Comprar
            </button> } 
        </div>
      )}

      
    </>
  )
}

export default Cart