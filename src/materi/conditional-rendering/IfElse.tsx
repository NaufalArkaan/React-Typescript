
type Props = {
    isLoggedIn: boolean
}

const IfElse = ({ isLoggedIn }: Props) => {
    let message: React.ReactNode
    if (isLoggedIn) {
        message = <h1>Welcome Brooo</h1>
    } else {
        message = <h1>Byee...</h1>
    }
    return (
        <div>{message}<h2>Ini dashboard</h2></div>
    )
}

export default IfElse