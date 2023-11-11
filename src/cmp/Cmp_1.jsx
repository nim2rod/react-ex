'use client'
import { useState, useEffect } from 'react'

const Cmp_1 = () => {
    const [id, setId] = useState(1)

    const handleClick = (() => {
        setId(Math.floor(Math.random() * 100))
    })

    return (
        <div>
            <button onClick={handleClick}>
                Show me a different post
            </button>

            <PostBody id={id} />
        </div>
    )
}

export function PostBody({ id }) {
    const [text, setText] = useState('')

    useEffect(() => {
        // const controller = new AbortController()

        fetch(`https://dummyjson.com/posts/${id}`
            // , {signal: controller.signal,}
        )
            .then((res) => res.json())
            .then((data) => setText(data.body))

        // return () => controller.abort()
    }, [id])

    return (
        <div>
            {text}
        </div>
    )
}

export default Cmp_1