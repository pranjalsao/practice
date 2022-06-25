import { useState } from 'react'
import './Counter.css'

const Counter=()=>{

    const [count,setCount] = useState(0)

    const increment=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        setCount(count-1)
    }

    return(
        <div>
            <button className='btn btn-success' onClick={increment}>Increment</button>
            <div className='count'>{count}</div>
            <button className='btn btn-success' onClick={decrement}>Decrement</button>
        </div>
    )

}

export default Counter