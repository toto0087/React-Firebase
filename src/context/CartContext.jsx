import {createContext, useState} from "react"

export const CartContext = createContext()

const CartContextProvider = ({children}) => {

    const [cart,setCart] = useState([])

    const addToCart = (element) => {
        if(exist(element)) {
            let newArr = cart.map( prod => {
                if(prod.id === element.id) {
                    let newProd = {
                        ...prod,
                        quantity: element.quantity
                        }
                        return newProd
                    }
                    else {
                        return prod
                    }
                })
                setCart(newArr)
        } else {
            setCart([...cart,element])
        }
    }

    const clearCart = () => {
        setCart([])
    }

    const getId = (id) => {
        const producto = cart.find(elemento => elemento.id === id)
        return producto?.quantity
    }

    const getPrice = () => {
        const totalPrice = cart.reduce( (sum,elem) => {
            return sum + (elem.price*elem.quantity)
        },0)
        return totalPrice
    }    

    const deleteProductById = (id) => {
        const newArr = cart.filter(prods => prods.id !== id)    
        setCart(newArr)
    } 

    const data = {
        cart,
        addToCart,
        clearCart,
        getId,
        getPrice,
        deleteProductById
    }

    const exist = (item) => {
        return cart.some(elemento => elemento.id === item.id)
    }


    return(
        <CartContext.Provider value={ data }>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider