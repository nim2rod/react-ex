'use client'
import React from 'react'
import {useState, useEffect} from 'react'

const Cmp_11 = ({id}) => {
    const [something, setSomething] = useState('second')
   
    useEffect(() => {}, [something])
    
    return !id ? (
            'No id'
    ) : (
        <div>Cmp_11</div>
    )
}

export default Cmp_11