const KeyPress = () => {
    const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
        console.log('Key pressed:', e.key)
    }
  return (
    <div>
        <input type="text" onKeyDown={handleKeyDown}/>
    </div>
  )
}

export default KeyPress