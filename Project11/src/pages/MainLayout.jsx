import { Outlet } from "react-router";
import NavBar from "../components/NavBar";

const MainLayout = () => (
    <>
        <NavBar/>
        <Outlet />
    </>
);

export default MainLayout;