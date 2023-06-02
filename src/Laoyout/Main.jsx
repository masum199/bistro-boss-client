import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";


const Main = () => {
    const location = useLocation()
    const login = location.pathname.includes('login') || location.pathname.includes('signup')
    return (
        <div>
           {login || <NavBar></NavBar>}
            <Outlet></Outlet>
            {login || <Footer></Footer>}

        </div>
    );
};

export default Main;