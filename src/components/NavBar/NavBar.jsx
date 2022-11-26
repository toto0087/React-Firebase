import "./navbar.css"
import CartWidget from "../cartWidget/CartWidget"

const NavBar = () => {
  return (
    <>
        <div className="navbar-cont">
            <div className="container-logo">
                <img className="logo-navbar" src="https://res.cloudinary.com/du9kvswds/image/upload/v1669475796/logo_200x200_quieco.png" alt="" />
            </div>
                <ul className="navbar">
                    <li className="navbar-item">PCs Armadas</li>
                    <li className="navbar-item">Laptops</li>
                    <li className="navbar-item">Tablets</li>
                </ul>
            <CartWidget />
        </div>
    </>
  )
}

export default NavBar