'use client'
import React, {useState, useEffect} from 'react'

const Cmp_2 = () => {
 const [count, setCount] = useState(0)
 // every 1 second increment the count by 1. 
 
 useEffect(()=>{
    setTimeout(() => {
        setCount((prev)=>prev+1)
    }, 1000)
 },[count])

   return (
        <p>Count is: {count}</p>
  )
}

export default Cmp_2