import { Button, Card, Link, TextField, Typography } from "@mui/material"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiAuth } from "../services/api";

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const loginUser = async () => {
        try {
            const response = await apiAuth('/users/login', { email, password, name });
            localStorage.setItem("token", response.token)
            navigate("/")
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };

    return (<div className="Login">
        <div style={{ paddingBottom: "20px" }}>
            <Typography>Welcome Back. Login Below</Typography>
        </div>
        <Card variant="outlined" style={{ padding: "10px" }}>
            <TextField id="email" onChange={(e) => {
                setEmail(e.target.value)
            }} label="Username or Email" variant="outlined" type="email" />
            <br></br>
            <br></br>
            <TextField onChange={(e) => {
                setPassword(e.target.value)
            }} id="password" label="Password" variant="outlined" type="password" />
            <br></br>
            <br></br>
            <Button onClick={loginUser} variant="contained">Login</Button>
            <br></br>
            <br></br>
            <Typography>Don't have an account? <Link href="/register" underline="none">Register here!</Link></Typography>
        </Card>
    </div>)
}

export default Login