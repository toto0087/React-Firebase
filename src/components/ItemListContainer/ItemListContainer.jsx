import "./greeting.css"
import { products } from "../productosMock"
import { useEffect, useState } from 'react'
import ItemList from "../items/ItemList"
import Counter from "../counter/Counter"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {

  const {categoryName} = useParams()

  const [items,setItems] = useState([])

  const agregarCarr = () => {
    console.log("agregado a carrito")
  }

  useEffect( ()=> {  

    const prodsFiltrados = products.filter(productos=>productos.category===categoryName)
    

    const prodConsum = new Promise((resolve,reject) => {
    resolve(categoryName ? prodsFiltrados : products)
  })

  prodConsum
    .then((res)=>{setItems(res)})
    .catch((err)=>{console.log(err)})
  }, [categoryName])


  return ( 
    <>
      <Counter stock={10} initial={1} onAdd={agregarCarr}/> 
      <div className="container-cards">
        <ItemList items={items}/>
      </div>
    </>
  )
}

export default ItemListContainer
