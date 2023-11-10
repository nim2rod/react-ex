'use client'
import {useState, useEffect} from 'react'

const Cmp_6 = () => {
const [post, setPost] = useState(null)
const [loading, setLoading] = useState(true)

useEffect(()=>{
  fetch("https://dummyjson.com/posts/1")
  .then((res)=> res.json())
  .then((data)=>{
    setPost(data)
    setLoading(false)
  })
},[])

// first solution: post?.user ..
// second solution: use if condition
  return (
    <> 
    {loading ? (
      <h1>loading</h1>
    ) : 
    (
      <article>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </article>
    )}
    </>
  )
}

export default Cmp_6  