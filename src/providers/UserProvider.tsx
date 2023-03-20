import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import  User  from '../Models/User';
import UserContext  from '../hooks/Context/UserContext';
/* const UserProvider: React.FC<{ children?:React.ReactElement | React.ReactElement[]; }>=(props) => {

} */

export const UserProvider: React.FC<{ children?:React.ReactElement | React.ReactElement[]; }>=(props) => {
    // On définit toutes les fonctions qui vont être utilisées dans le contexte
    const navigate= useNavigate();
    const login = (email: string, password: string) => {
        // put params in user object and set it in localstorage
            const user:User={
                id:Date.now(),
                email:email,
                password:password,
                islogged:true
            }
            localStorage.setItem("user",JSON.stringify(user));
            navigate("/");
    };

    const logout = () => {
        const userString=localStorage.getItem("user");
        if(userString){
            const user :User=JSON.parse(userString);
            user.islogged=false;
            localStorage.setItem("user",JSON.stringify(user));
            navigate("/login");
        }
    };
    const isAuth = () => {
        const userString=localStorage.getItem("user");
        if(userString){
            const user :User=JSON.parse(userString);
            return user.islogged;
        }
    };

    return (
        <UserContext.Provider value={{ login, logout, isAuth }}>
            {props.children}
        </UserContext.Provider>
    )
}
