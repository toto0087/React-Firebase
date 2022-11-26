import {BsFillCartPlusFill} from "react-icons/bs"

const CartWidget = () => {
  return (
    <div className="container-cart">
        <BsFillCartPlusFill 
            size={50} 
            color={"white"} 
        />
    </div>
  )
}

export default CartWidget


