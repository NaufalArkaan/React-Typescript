type Props = {
    isLoggedin: boolean
}

const TernaryOperator = ({ isLoggedin }: Props) => {
    return (
        <div className={`${isLoggedin ? "green-text" : "red-text"}`}>{isLoggedin ? <h1>Haiii..</h1> : <h1>Byee..</h1>}</div>
    )
}

export default TernaryOperator