type Props = {
    isLoggedIn: boolean
}

const LogicalOperator = ({ isLoggedIn }: Props) => {
  return (
    <div>
        {isLoggedIn && <h1>Welcomee broo</h1>}
        {isLoggedIn || <h1>Welcomee broo</h1>}
    </div>
  )
}

export default LogicalOperator