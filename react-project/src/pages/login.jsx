import { useState } from "react"
import Button from "../components/button";

function LoginForm() {
    const[formData, setFormData] = useState(
        {
            email: "",
            password: ""
        }
    )

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormData(prev =>({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData, "Login Data");
    }


    return (
        <>
         <form onSubmit={handleSubmit}>
            <div>
                <label>Email</label>

                <input
                className="form-input"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                />
            </div>

            <div>
                <label>Password</label>

                <input
                className="form-input"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                />
            </div>

            <Button type="submit">
                Login
            </Button>

        </form>
        
        </>
    )
}

export default LoginForm;