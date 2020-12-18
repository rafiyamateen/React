import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
    const [count, setCount] = useState(0),
        increment = (e) => {
            setCount(count + 1)
        },
        decrement = () => {
            setCount(count - 1)
        }
    return (
        <div id='counter'>
            <h2>Counts: {count}</h2>
            <button onClick={decrement} >Decrement</button>
            <button onClick={increment} >Increment</button>

        </div>
    )
}
export default Counter