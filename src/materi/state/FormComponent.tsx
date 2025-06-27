import { useState } from "react"

type FormData = {
    name: string
    email: string
    password: string
}

const FormComponent = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        password: ''
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData({
            ...formData, [name]: value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('Data yang di submit: ', formData)
        setFormData({
            name: '',
            email: '',
            password: ''
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" value={formData.email} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} />
            </div>
            <button>Submit</button>
        </form>
    )
}

export default FormComponent