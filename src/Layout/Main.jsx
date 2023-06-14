import { Outlet } from "react-router-dom";
import Navbar from "../page/Shared/Navbar/Navbar";
import Footer from "../page/Shared/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="lg:px-24 px-6"><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default Main;