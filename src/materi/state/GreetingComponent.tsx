import { useState } from "react"

const GreetingComponent = () => {
    const [greeting, setGreeting] = useState<string>('Haii')
    const changeGreeting = () =>{
        setGreeting('Hai Guys')
    }
    return (
        <div>
            <p>{greeting}</p>
            <button onClick={changeGreeting}>Update greeting</button>
        </div>
    )
}

export default GreetingComponent