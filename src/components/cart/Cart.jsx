import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const Cart = () => {

    const {cart,clearCart,getPrice} = useContext(CartContext)



  return (
    <>


      <div>
        {
          cart.map (item => (
            <div key={item.id}>
              <h2>{item.name}</h2>
              <h2>{item.price*item.quantity}</h2>
              <h2>{item.quantity} Unidades</h2>
            </div>
          ))
        }

        {cart.length < 1 && <h2>No hay elementos</h2>}
      </div>

        <h2>Precio total: {getPrice()}</h2>

      <div>
        <button onClick={()=>clearCart()}>Limpiar Carrito</button>
      </div>
    </>
  )
}

export default Cart