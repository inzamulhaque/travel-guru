import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from "../../images/icons/logo.png";

const NavBar = () => {
    const navigate = useNavigate();
    const [navOpen, setNavOpen] = useState(false);

    return (
        <nav className='bg-black px-[15px] lg:px-0'>
            <div className="md:container mx-auto py-3 flex justify-between items-center">
                <div>
                    <Link to="/">
                        <img src={logo} alt="Logo" className="w-[120px] h-[55px]" />
                    </Link>
                </div>
                <div>
                    <div className='lg:flex items-center'>
                        <p className='text-white text-[22px] lg:hidden' onClick={() => setNavOpen(!navOpen)}>X</p>

                        <ul className={`text-white lg:flex items-center lg:top-0 lg:relative font-semibold absolute duration-300 ease-in-out ${navOpen ? "top-20 bg-black left-0 w-full text-left px-5 py-7" : "top-[-300px]"}`}>
                            <li className='px-[20px]'>
                                <input type="text" className='text-sm bg-transparent focus:outline-none border-2 border-slate-300 py-[5] px-[7px] w-[250px] text-white text-[22px]' placeholder='Search your Destination...' />
                            </li>
                            <li className='px-[20px]'>
                                <NavLink to="/">News</NavLink>
                            </li>
                            <li className='px-[20px]'>
                                <NavLink to="/destination">Destination</NavLink>
                            </li>
                            <li className='px-[20px]'>
                                <NavLink to="/blog">Blog</NavLink>
                            </li>
                            <li className='px-[20px]'>
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                            <li className='px-[20px]'>
                                <button onClick={() => navigate("/signin")} className="py-[7px] px-[10px] bg-blue-500 text-white font-semibold">Sign In</button>
                            </li>
                        </ul>
                        {/* <button className="py-[7px] px-[10px] bg-red-500 text-white font-semibold">Sign Out</button> */}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;