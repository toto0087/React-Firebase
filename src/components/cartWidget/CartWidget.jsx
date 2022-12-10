import {BsFillCartPlusFill} from "react-icons/bs"
import { Link } from "react-router-dom"

const CartWidget = () => {
  return (
    <Link to="/cart">
      <div className="container-cart">
          <BsFillCartPlusFill 
              size={50} 
              color={"white"} 
          />
      </div>
    </Link>
  )
}

export default CartWidget


