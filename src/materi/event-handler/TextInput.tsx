const TextInput = () => {
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log('input: ', e.target.value)
    }

  return (
    <div>
        <input type="text" onChange={handleChange} />
    </div>
  )
}

export default TextInput