
import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../povider/AuthProvider';
import swal from 'sweetalert';

const Navbar = () => {
    const { user, loggedOut, loading } = useContext(AuthContext) || {};

    const activeStyle = { color: 'blue' };
    const location = useLocation();

    const handleLogOut = () => {
        loggedOut()
            .then(() => {
                swal('Good job!', 'LogOut Successful', 'success');
            })
            .catch(err => {
                // Handle error
            });
    };

    const navItems = (
        <>
            <li className="pb-2 pl-2">
                <Link to="/">Home</Link>
            </li>
            <li className="pb-2 pl-2">
                <Link to="/blogs">Blogs</Link>
            </li>
            <li className="pb-2 pl-2">
                <Link to="/allToys">All Toys</Link>
            </li>
            {user && !loading && (
                <>
                    <li className="pb-2 pl-2">
                        <Link to="/myToys">My Toys</Link>
                    </li>
                    <li className="pb-2 pl-2">
                        <Link to="/addToy">Add A Toy</Link>
                    </li>
                </>
            )}
        </>
    );

    return (
        <div className="sticky top-0 z-10 bg-base-100">
            <div className="navbar mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {navItems}
                        </ul>
                    </div>
                    <Link to="/">
                        <img
                            className="w-28"
                            src="https://i.ibb.co/Bq3kWfx/logo.jpg"
                            alt="carsDoctorImg"
                        />
                    </Link>
                    <Link to='/'>
                        <p className="btn btn-ghost normal-case text-2xl">Wonder Toys</p>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{navItems}</ul>
                </div>
                <div className="navbar-end">
                    <div className="flex items-center space-x-4">
                        {!user && !loading && (
                            <>
                                <Link to="/login">
                                    <p className="btn btn-outline text-sm md:text-lg lg:text-lg">
                                        Login
                                    </p>
                                </Link>
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-12 h-12 rounded-full">
                                        <img
                                            src="https://i.ibb.co/3YZNVgN/pro.png"
                                            className="w-full h-full rounded-full"
                                            alt="User Avatar"
                                        />
                                    </div>
                                </label>
                            </>
                        )}
                        {!user || loading ? (
                            <button className="btn loading hidden">Loading...</button>
                        ) : (
                            <>
                                <Link to="/login">
                                    <p onClick={handleLogOut} className="btn text-sm md:text-lg lg:text-lg">
                                        LogOut
                                    </p>
                                </Link>
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-12 h-12 rounded-full">
                                        {user.photoURL == null ? (
                                            <img
                                                src="https://i.ibb.co/3YZNVgN/pro.png"
                                                className="w-full h-full rounded-full"
                                                alt="User Avatar"
                                            />
                                        ) : (
                                            <img
                                                src={user.photoURL}
                                                className="w-full h-full rounded-full"
                                                alt="User Avatar"
                                                title={user.displayName}
                                            />
                                        )}
                                    </div>
                                </label>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;


