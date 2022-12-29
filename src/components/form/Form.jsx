import React from 'react'
import { useState } from 'react'

const Form = () => {


    const [userData,setUserData] = useState({name: "", lastName: ""})

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(userData)
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
            placeholder='Ingrese su apellido' 
            name='lastname'
            onChange={(e)=>{setUserData({...userData, lastName:e.target.value})}}
            value={userData.lastName}/>

            <button type="submit">Enviar</button> 
        </form>
    </>
  )
  
}

export default Form