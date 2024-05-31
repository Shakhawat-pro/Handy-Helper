import { NavLink, useLocation } from 'react-router-dom';
import { GiGearHammer } from "react-icons/gi";
import './NavStyles.css'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
    // console.log(user?.photoURL);

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("synthwave")
        } else {
            setTheme("light")
        }
    }

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme")
        document.querySelector("html").setAttribute("data-theme", localTheme)

    }, [theme])


    const handleSignOut = () => {
        logOut()
    }

    const location = useLocation()
    // console.log('current url', location.pathname);
    const navItems = <>
        <li data-aos="zoom-in-down" className='border-2 border-transparent'><NavLink to="/">Home</NavLink></li>
        <li data-aos="zoom-in-down" className='border-2 border-transparent'><NavLink to="/services">Services</NavLink></li>
    </>
    return (
        <div>
            <div className={`navbar md:p-0 ${location.pathname === '/' ? 'absolute text-white' : ''} ${theme === "light" ? "text-black" : "text-white"} z-10 top-0 mt-1`}>
                <div className="flex-1 ml-1 ">
                    <NavLink to={'/'}  >
                        <div className="flex items-center gap-2  text-xl sm:text-4xl font-bold " data-aos="zoom-in-down">
                            <GiGearHammer className='md:w-14 h-full' />
                            <p><span className='text-[#ED1D24]'>H</span>andy<span className='text-[#ED1D24]'>H</span>elper</p>
                        </div>
                    </NavLink>
                </div>
                <div className="flex-none  md:space-x-5">

                    {/* PAges */}

                    <div className="navbar hidden lg:flex text-xl">
                        <ul className="menu-horizontal px-1  first: space-x-10">
                            {navItems}
                            <li>
                                <details>
                                    <summary data-aos="zoom-in-down" className='cursor-pointer'>Dashboard</summary>
                                    <ul className={`p-5  w-48  space-y-3 z-[1900]  cursor-pointer  ${theme === "light" ? "text-black" : "text-white"}`}>
                                        <li className='mt-3'><NavLink to={'/addService'}>Add Services</NavLink></li>
                                        <li><NavLink to={'/manageServices'}>Manage Service</NavLink></li>
                                        <li><NavLink to={'/bookings'}>Booked-Services</NavLink></li>
                                        <li><NavLink to={'/servicesToDo'}>Service-To-Do</NavLink></li>
                                        <li><NavLink to={'/editProfile'}>Edit Profile</NavLink></li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                    {/* theme */}
                    <label className="swap swap-rotate max-sm:mr-1">

                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" onChange={handleToggle} className="theme-controller" value="" />

                        {/* sun icon */}
                        <svg className="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        {/* moon icon */}
                        <svg className="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>
                    {/* carts
                    <div className="dropdown dropdown-end ">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle ">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 md:h-7 w-5 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </div>
                        <div tabIndex={0} className={`mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow ${theme === "light" ? "text-black" : "text-white"}`}>
                            <div className="card-body ">
                                <span className="font-bold text-lg">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {
                        user ? <div data-aos="zoom-in-down" className={`dropdown dropdown-end ${theme === "light" ? "text-black" : "text-white"}`}>
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-12 rounded-full ring ring-[#ED1D24] ring-offset-purple-500 ring-offset-1">
                                    <img src={user.photoURL} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[2000] p-2 shadow bg-base-100 rounded-box w-max">
                                <li>
                                    <p className={`font-bold inline-block text-lg `}>
                                        {user.displayName}
                                    </p>
                                </li>
                                <li onClick={handleSignOut} className='bg-[#ED1D24] btn font-bold text-white '><a>Logout</a></li>
                            </ul>
                        </div> :
                            <NavLink to='/login'> <button data-aos="zoom-in-down" className={`btn font-semibold border-transparent max-sm:p-1 hover:border-[#ED1D24] md:text-lg bg-[#ED1D24] text-white  md:w-24 ${location.pathname === '/' ? 'hover:bg-white' : 'hover:bg-transparent'} hover:text-[#ED1D24] `}>Login</button></NavLink>
                    }

                    {/* dropdown */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content right-0 mt-3 z-[2000] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                            {navItems}
                            <li>
                                <a>Dashboard</a>
                                <ul className="p-2">
                                    <li ><NavLink to={'/addService'}>Add Services</NavLink></li>
                                    <li><NavLink to={'/manageServices'}>Manage Service</NavLink></li>
                                    <li><NavLink to={'/bookings'}>Booked-Services</NavLink></li>
                                    <li><NavLink to={'/servicesToDo'}>Service-To-Do</NavLink></li>
                                    <li><NavLink to={'/editProfile'}>Edit Profile</NavLink></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;