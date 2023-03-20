import { Navigate,Outlet } from "react-router-dom";

//Si le user est connecté, on affiche le menu et certaines routes

const useAuth = () => {
    return true;// a modifier poiur tester
};

export default function ProtectedRoutes(props: any) {
    const isLogged = useAuth();
    return isLogged ? (
        <Outlet />
    ) : (
        <Navigate to="/login" />
    );
}