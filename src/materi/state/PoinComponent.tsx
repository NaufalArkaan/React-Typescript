import { useState } from "react"

const PoinComponent = () => {
    const [count, setCount] = useState<number>(0)
    const increment = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <p>Current Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default PoinComponent