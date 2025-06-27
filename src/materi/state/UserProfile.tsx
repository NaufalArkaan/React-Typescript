import { useState } from "react"

type User = {
    name: string
    age: number
}

const UserProfile = () => {
    const [user, setUser] = useState<User>({
        name: 'Jhon Doe',
        age: 19
    });
    const updateUser = () => {
        setUser({
            ...user, //spread operator
            age: user.age + 1
        })
    }
    const updateUserName = () => {
        setUser({
            ...user,
            name: user.name = "Budi"
        })
    }
    return (
        <div>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <button onClick={updateUser}>Increase Age</button>
            <button onClick={updateUserName}>Change Name to Budi</button>
        </div>
    )
}

export default UserProfile