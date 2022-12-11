import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const BlogLayout = () => {
    return (
        <div>
            <div className="navbar bg-slate-900 text-white fixed">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-900 rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/blog">Blog</Link></li>

                        </ul>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/blog">Blog</Link></li>

                        </ul>
                    </div>
                </div>


            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default BlogLayout;