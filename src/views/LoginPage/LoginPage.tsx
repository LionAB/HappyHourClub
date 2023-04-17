import React, { useContext, useEffect, useState } from "react";
import { TextField, FormControl, Button } from "@mui/material";
import UserContext from "../../hooks/Context/UserContext";
import "./LoginPage.css"
import { red } from "@mui/material/colors";

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
            <div className="login-image">
                <img className="image-login" src="../src/assets/images/gens-qui-trinquent.jpg"/>
            </div>
        <form autoComplete="off" onSubmit={handleSubmit}>
            <img className="logo-login" src="../src/assets/images/Happy-hour-logo-sans-fond.png"/>

                
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
                 <Button variant="outlined" 
                         color="secondary" 
                         type="submit" 
                         sx={{ color: 'white', backgroundColor: 'black' }}
                         >Login</Button>
             
        </form>
        </div>
        </React.Fragment>
    
     );
}
 