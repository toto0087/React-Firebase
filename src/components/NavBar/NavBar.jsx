import "./navbar.css"
import CartWidget from "../cartWidget/CartWidget"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <>
        <div className="navbar-cont">
            <div className="container-logo">
                <img className="logo-navbar" src="https://res.cloudinary.com/du9kvswds/image/upload/v1669475796/logo_200x200_quieco.png" alt="" />
            </div>
                <ul className="navbar">
                    <Link to="/category/PCs Armadas" className="navbar-item">PCs Armadas</Link>
                    <Link to="/category/Laptop" className="navbar-item">Laptops</Link>
                    <Link to="/category/Tablets" className="navbar-item">Tablets</Link>
                </ul>
            <CartWidget />
        </div>
    </>
  )
}

export default NavBar