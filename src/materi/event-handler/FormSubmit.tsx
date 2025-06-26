const FormSubmit = () => {
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('form submitted')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Masukan Input!" />
            <button type="submit">Submit</button>
        </form>
    )
}

export default FormSubmit