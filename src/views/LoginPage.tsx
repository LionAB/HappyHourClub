import React, { useContext, useEffect, useState } from "react";
import { TextField, FormControl, Button } from "@mui/material";
import UserContext from "../hooks/Context/UserContext";

export default function LoginPage() {
    const {user} =useContext(UserContext);
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [emailError, setEmailError] = useState(false)
    const [usernameError, setUserNameError] = useState(false)
    const { login } = useContext(UserContext);

    useEffect(() => {
        console.warn("user",user);
    }, [user]);
    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault()
 
        setEmailError(false)
        setUserNameError(false)
 
        if (email == '') {
            setEmailError(true)
        }
        if (username == '') {
            setUserNameError(true)
        }
 
        if (email && username) {
            login(email, username)
        }
    }
     
    return ( 
        <React.Fragment>
            <div className="bg-white">
        <form autoComplete="off" onSubmit={handleSubmit}>
            <h2>Login Form</h2>
                
                 <TextField 
                    label="Username"
                    onChange={e => setUsername(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="name"
                    value={username}
                    error={usernameError}
                    fullWidth
                    sx={{mb: 3}}
                 />
                 <TextField 
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="email"
                    sx={{mb: 3}}
                    fullWidth
                    value={email}
                    error={emailError}
                 />
                 <Button variant="outlined" color="secondary" type="submit">Login</Button>
             
        </form>
        </div>
        </React.Fragment>
    
     );
}
 