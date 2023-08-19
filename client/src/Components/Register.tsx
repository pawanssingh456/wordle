import { Button, Card, Link, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { apiAuth } from "../services/api"
import { useNavigate } from "react-router-dom"

function Register() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const navigate = useNavigate()

    const registerUser = async () => {
        try {
            const response = await apiAuth('/users', { email, password, name });
            localStorage.setItem("token", response.token)
            navigate("/")
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };

    return (<div className="Register">
        <div style={{ paddingBottom: "20px" }}>
            <Typography>Welcome Back. Register Below</Typography>
        </div>
        <Card variant="outlined" style={{ padding: "10px" }}>
            <TextField onChange={(e) => {
                setName(e.target.value)
            }} id="name" label="Name" variant="outlined" type="text" />
            <br></br>
            <br></br>
            <TextField onChange={(e) => {
                setEmail(e.target.value)
            }} id="email" label="Email" variant="outlined" type="email" />
            <br></br>
            <br></br>
            <TextField onChange={(e) => {
                setPassword(e.target.value)
            }} id="password" label="Password" variant="outlined" type="password" />
            <br></br>
            <br></br>
            <Button onClick={registerUser} variant="contained">Register</Button>
            <br></br>
            <br></br>
            <Typography>Already have an account? <Link href="/login" underline="none">Login here!</Link></Typography>
        </Card>
    </div>)
}

export default Register