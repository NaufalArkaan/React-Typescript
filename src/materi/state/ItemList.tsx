import { useState } from "react"

const ItemList = () => {
    const [items, setItems] = useState<string[]>(['item 1', 'item 2'])
    const addItems = () => {
        setItems([...items, `Item ${items.length +1}`])
    }
    return (
        <div>
            <ul>
                {items.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
            <button onClick={addItems}>Add Item</button>
        </div>
    )
}

export default ItemList