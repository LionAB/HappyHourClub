import { Route, Routes ,Navigate} from "react-router-dom";
import WithNav from '../Components/Layout/WithNav'
import WithoutNav from "../Components/Layout/WithoutNav";
import HomePage from '../views/HomePage'
import LoginPage from "../views/LoginPage";
import NotFoundPage from '../views/NotFoundPage';
import ProtectedRoutes from "./ProtectedRoutes";

export default function AppRouter() {
    const isLogged = true;
    return(
        <Routes>
          <Route element={<WithoutNav />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/404" element={<NotFoundPage/>} />
            <Route path="*" element={<Navigate  to="/404" />} />
          </Route>
            <Route element={<ProtectedRoutes />}>//Si le user est connecté, on affiche le menu et certaines routes
                <Route element={<WithNav />}>
                        <Route path="/" element={<HomePage/>} />
                </Route>
          </Route>
        </Routes>
    )
}