import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/UseAdmin';

const Navbar = () => {

    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    const logout = () => {
        signOut(auth);
    };

    const menuItems = <>
        <li className=''><Link to="/">
            <img className='h-5' src="https://img.icons8.com/ios/452/home--v1.png" alt="" />
            Home</Link></li>

        <li><Link to="/myporfolio">
            <img className='h-5' src="https://img.icons8.com/ios/344/user--v1.png" alt="" />
            My Portfolio</Link></li>
        <li><Link to="/blogs">
            <img className='h-6' src="https://img.icons8.com/external-others-made-by-made/344/external-blog-blogger-others-made-by-made.png" alt="" />
            Blogs</Link></li>









        {
            admin && <li><Link to="/addproduct">
                <img className='h-5' src="https://img.icons8.com/ios/344/add--v1.png" alt="" />
                Add Product</Link></li>

        }
        {
            admin && <li><Link to="/manageproduct">
                <img className='h-5' src="https://img.icons8.com/dotty/452/maintenance.png" alt="" />
                Mange Product</Link></li>

        }
        {
            user && <li className=''><Link to="/dashboard">
                <img className='h-5 ' src="https://img.icons8.com/external-sbts2018-mixed-sbts2018/344/external-11-dashboard-finance-2-sbts2018-mixed-sbts2018.png" alt="" />
                Dashboard</Link></li>
        }




        <li className=' bg-slate-700 text-white rounded-xl font-bold uppercase'>{user ? <button className="btn btn-ghost" onClick={logout} ><img className='h-5' src="https://img.icons8.com/fluency/344/login-rounded.png" alt="" /> Sign Out</button> : <Link to="/login"><img className='h-5' src="https://img.icons8.com/fluency/344/logout-rounded.png" alt="" /> Login</Link>}</li>

    </>
    return (
        <div className="navbar rounded-xl  bg-base-100 shadow-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-3xl">AKM</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end lg:hidden">
                {/* <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label> */}
                <label htmlFor="dashboard-sidebar" class="btn btn-circle swap swap-rotate ">

                    {/* <!-- this hidden checkbox controls the state --> */}
                    <input type="checkbox" />

                    {/* <!-- hamburger icon --> */}
                    <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="30" height="26" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

                    {/* <!-- close icon --> */}
                    <svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

                </label>
            </div>

        </div>
    );
};

export default Navbar;