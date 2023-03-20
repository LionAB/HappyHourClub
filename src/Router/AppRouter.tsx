import { Route, Routes } from "react-router-dom";
import WithNav from '../Components/Layout/WithNav'
import WithoutNav from "../Components/Layout/WithoutNav";
import HomePage from '../views/HomePage'
import LoginPage from "../views/LoginPage";
import NotFoundPage from '../views/NotFoundPage';

export default function AppRouter() {
    return(
        <Routes>
          <Route element={<WithoutNav />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<NotFoundPage/>} />
          </Route>
          <Route element={<WithNav />}>
            <Route path="/home" element={<HomePage/>} />
            <Route path="*" element={<NotFoundPage/>} />
          </Route>
        </Routes>
    )
}