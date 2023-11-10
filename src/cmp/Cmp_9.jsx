import React from 'react'
import {useState} from 'react'

const Cmp_9 = () => {

const [details, setDetails] = useState({
    f_name:'',
    l_name: '',
    city:''
})

const [user, setUser] = useState({
    f_name:'',
    l_name: '',
    city:''
})

const handleInput = (e)=>{
    setDetails({
    ...details, 
        [e.target.name] : e.target.value
    })
}

const handleSave = (e)=> {
    e.preventDefault()
    setUser({
        ...details
    })
}

console.log(details)

return (
<> 
    <form>
        <input type="text" placeholder="type first name" name ="f_name"
        onChange={handleInput}
        />
        <input type="text" placeholder="type second name" name ="l_name"
        onChange={handleInput}
        />
        <input type="text" placeholder="type city" name ="city"
        onChange={handleInput}
        />


        <button onClick={handleSave}>
            Show on screen
        </button>
    </form>
    <section>
        <h5>First name: {user.f_name}</h5>
        <h5>Last name: {user.l_name}</h5>
        <h5>City: {user.city}</h5>
    </section>
    </>
  )
}

export default Cmp_9