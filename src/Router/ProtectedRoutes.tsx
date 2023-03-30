import { useContext, useEffect, useState } from "react";
import { Navigate,Outlet } from "react-router-dom";
import UserContext from "../hooks/Context/UserContext";

//Si le user est connecté, on affiche le menu et certaines routes


export default function ProtectedRoutes(props: any) {
    const { isAuth } = useContext(UserContext);


    useEffect(() => {
        console.warn("isAuth",isAuth);
    }, [isAuth]);


   
    return isAuth ? (
        <Outlet />
    ) : (
        <Navigate to="/login" />
    );
}