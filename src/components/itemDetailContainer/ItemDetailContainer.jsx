import { useState,useEffect,useContext } from "react"
import { useParams } from "react-router-dom"
import Counter from "../counter/Counter"
import { CartContext } from "../../context/CartContext"

import {getDoc,doc,collection} from "firebase/firestore"
import {db} from "../../firebaseConfig"

const ItemDetailContainer = () => {

  const {addToCart,getId} = useContext(CartContext)

  const [product,setProduct] = useState({})
  
  const {id} = useParams()
  
  

  useEffect(()=>{
    
    const itemCollection = collection(db,"products")
    const ref = doc(itemCollection,id)

    getDoc(ref)
    .then(res => {
      setProduct({
        id:res.id,
        ...res.data()
      })
    })

  },[id])
  
  const onAdd = (quantity) => {
    addToCart({...product,quantity})
  }

  const prodQuant = getId(product.id)
  

  return (
    <>
      <div>
        <h1>{product.name}</h1>
        <h2>{product.price}</h2>
        <h2>{product.description}</h2>
      </div>

      <Counter stock={product.stock} 
              initial={prodQuant} 
              onAdd={onAdd} 
              />
    </>
  )
}

export default ItemDetailContainer