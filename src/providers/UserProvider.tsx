import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import  User  from '../Models/User';
import UserContext  from '../hooks/Context/UserContext';
import axios from 'axios';
/* const UserProvider: React.FC<{ children?:React.ReactElement | React.ReactElement[]; }>=(props) => {

} */

export const UserProvider: React.FC<{ children?:React.ReactElement | React.ReactElement[]; }>=(props) => {
    const [user,setUser]= useState<User|null>(null);
    const [isAuth,setIsAuth]= useState<boolean>(false);
    // On définit toutes les fonctions qui vont être utilisées dans le contexte
    const navigate= useNavigate();
    
    useEffect(() => {
        const localuser = localStorage.getItem('user');

       if(user===null && localuser!==null){
          console.log('user is set by localstorage');
            setUser(JSON.parse(localuser));
            setIsAuth(true);
            navigate("/");
          }
        
    },[user]);

    const login = async (email: string, username: string) => {
      
      try {
        const response = await axios.get(`http://localhost:3000/users?email=${email}`);
        const data = response.data;
          const user = data[0]; 
        if (user) {
          if(user.username===username){
            user.islogged = true;
            let userobj:User={
                id: user.id,
                username: user.username,
                email: user.email,
                islogged: true
            }
            setUser(userobj);
            localStorage.setItem('user', JSON.stringify(userobj));
            setIsAuth(true);
            console.log(user);
            navigate("/");
          }
        } else {
          console.log('User not found');
        }
      } catch (error) {
        console.error('Unable to fetch users', error);
      }
    };

    const logout = () => {
        console.warn("logout",user);
        if(user){
            localStorage.removeItem('user');
            setUser(null);
            setIsAuth(false);
            console.warn("logout",user);
            navigate("/login");
        }
    };



    return (
        <UserContext.Provider value={{ user,login, logout, isAuth }}>
            {props.children}
        </UserContext.Provider>
    )
}
