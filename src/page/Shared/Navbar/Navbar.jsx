import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";


const Navbar = () => {
    const { user,logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
        .then(() => { })
        .catch(error => console.log(error))
    }
    return (
        <div className="navbar bg-primary">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to={'/'}> Home</NavLink></li>
                        <li><NavLink to={'/blog'}></NavLink></li>
                        {
                            user && <li><button>log out </button></li>
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">AT Chef</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to={'/'}> Home</NavLink></li>
                    <li><NavLink to={'/blog'}>Blog</NavLink></li>
                    {
                        user && <li className=""><button onClick={handleLogout} className="btn btn-primary">log out </button></li>
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <div className="tooltip mt-5" data-tip={user?.displayName ? user?.displayName : ''}><img className="w-[50px] rounded-full" src={user?.photoURL} alt="" /></div>
                    </> :
                        <>
                            <NavLink to={'/login'} ><button className="btn bg-white">Login</button></NavLink>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;