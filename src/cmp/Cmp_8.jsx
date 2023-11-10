import {useState, useEffect} from 'react'

const PRICE_PER_ITEM = 5 

const Cmp_8 = () => {
    const [quantity, setQuantity] = useState(1)
    // const [price, setPrice] = useState(0) // no need for anouther use state
    const totalPrice = quantity * PRICE_PER_ITEM

    const handleClick  = () => {
        setQuantity(quantity + 1)
    }

    // useEffect(()=>{
    //     setPrice(quantity * PRICE_PER_ITEM)
    // },[quantity])

  return (
    <div>
        <button onClick={handleClick}>
            add 1 item
        </button>

        <h4>quantity: {quantity}</h4>
        <h4>total price: {quantity * PRICE_PER_ITEM}</h4>
        <h5>Total price: {totalPrice}</h5>
    </div>
  )
}

export default Cmp_8