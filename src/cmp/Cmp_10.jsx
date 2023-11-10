'use client'
import React from 'react'
import {useState, useEffect} from 'react'

const Cmp_10 = () => {
const [user, setUser] = useState({
    name: '',
    city: '',
    age: ''
})

const handleInput = (e) => {
   setUser({
    ...user,
    [e.target.name]: e.target.value
})
} 
console.log(user) 

  return (
    <section>
        <div>Cmp_10</div>

        <br />
        <input type="text"  
        placeholder="type name"
        onChange={handleInput}
        name="name"
        />

        <br /> 
            <input type="text"  
        placeholder="type city"
        onChange={handleInput}
        name="city"
        />
    </section>
  )
}

export default Cmp_10