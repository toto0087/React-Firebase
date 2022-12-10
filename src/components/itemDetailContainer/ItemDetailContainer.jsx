import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import { products } from "../productosMock"

const ItemDetailContainer = () => {

  const [product,setProduct] = useState({})

  const {id} = useParams()

  useEffect(()=>{
    const productSelect = products.find(producto => producto.id === +id)
    setProduct(productSelect)
  },[id])

  return (
    <div>
      <h1>{product.name}</h1>
      <h2>{product.price}</h2>
      <h2>{product.description}</h2>
    </div>
  )
}

export default ItemDetailContainer