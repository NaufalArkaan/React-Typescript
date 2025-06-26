const ClickButton = () => {
    const handleClick = (event:React.MouseEvent<HTMLButtonElement>) => {
        alert('Hallloo')
        console.log("Button clicked")
        console.log(event.target)
    }

  return (
    <button onDoubleClick={handleClick}>ClickButton</button>
  )
}

export default ClickButton