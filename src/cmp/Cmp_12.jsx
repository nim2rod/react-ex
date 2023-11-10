'use client'
import { useState } from "react"

const Cmp_12 = () => {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count=> count+1)
        setCount(count=> count+1)
        setCount(count=> count+1)

        // setCount(count= count+1)
        // setCount(count= count+1)
    }

    return (
        <>
            <button
                onClick={handleClick}
            >
                Click me
            </button>
            <h1>{count}</h1>
        </>
    )
}

export default Cmp_12