import React from 'react'
import { useState } from 'react'
import {
  addDoc,
  collection,
  serverTimestamp,
  doc,
  updateDoc,
} from "firebase/firestore"
import { db } from "../../firebaseConfig"

const Form = ({cart,totalPrice,setCartId,clearCart,}) => {

    const total = totalPrice()

    const [userData,setUserData] = useState({name: "", email: "",phone: ""})

    const handleSubmit = (e) => {
        e.preventDefault()

        const order = {
          buyer: userData,
          items: cart,
          total: total,
          date: serverTimestamp(),
        }

        const orderCollection = collection(db,"orders")

        addDoc(orderCollection,order)
        .then(res=>setCartId(res.id))

        
        

        cart.map(element => {
          updateDoc(doc(db,"products",element.id),{stock:element.stock-element.quantity})
        })

        clearCart()
    }




  return (
    <>
        <form action="" onSubmit={handleSubmit}>
            

            <input type="text" 
            placeholder='Ingrese su nombre' 
            name='name'
            onChange={(e)=>{setUserData({...userData, name:e.target.value})}}
            value={userData.name}/>

            <input type="text" 
            placeholder='Ingrese su telefono' 
            name='lastname'
            onChange={(e)=>{setUserData({...userData, phone:e.target.value})}}
            value={userData.phone}/>

            <input type="text" 
            placeholder='Ingrese su email' 
            name='lastname'
            onChange={(e)=>{setUserData({...userData, email:e.target.value})}}
            value={userData.email}/>

            <button type="submit">Enviar</button> 
        </form>
    </>
  )
  
}

export default Form