import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../povider/AuthProvider';

const Navbar = () => {
    const { user, loggedOut, loading } = useContext(AuthContext) || {}

    const activeStyle = { color: 'blue' };
    const location = useLocation()

    const handelLogOut = () => {
        loggedOut()
            .then(() => {

            })
            .catch(err => {

            })
    }
    const navItems = <>
        <li className='pb-2 pl-2'><Link to='/'> Home</Link></li>
        <li className='pb-2 pl-2'><Link  >Blogs</Link></li>
        <li className='pb-2 pl-2'><Link  >All Toys</Link></li>
        {
            user && !loading && <>
                <li className='pb-2 pl-2'><Link to='/myToys'  >My Toys</Link></li>
                <li className='pb-2 pl-2'><Link to='/addToy' >Add A Toy</Link></li>
            </>
        }


    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                            {navItems}
                        </ul>
                    </div>
                    <Link><img className='w-28' src="https://static.vecteezy.com/system/resources/thumbnails/004/141/569/small/funny-3d-baby-colorful-cubes-with-letters-kids-zone-playroom-for-children-logo-template-play-area-in-entertainment-center-illustration-on-white-background-free-vector.jpg" alt="carsDoctorImg" /></Link>
                    <Link>  <p className="btn btn-ghost normal-case text-2xl">KidzToyZone</p></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex items-center space-x-4">
                        {!user && !loading && <>
                            <Link to='/login'><p className="btn btn-outline text-sm md:text-lg lg:text-lg">Login</p></Link>
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className=" w-12 h-12 rounded-full">
                                    <img src="https://i.ibb.co/3YZNVgN/pro.png" className="w-full h-full rounded-full" alt="User Avatar" />

                                </div>
                            </label>
                        </>
                        }
                        {
                            !user || loading && <>

                                <button className="btn loading">loading</button>

                            </>
                        }
                        {
                            user && !loading && <>
                                <Link to='/login'><p onClick={handelLogOut} className="btn  text-sm md:text-lg lg:text-lg">LogOut</p></Link>
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className=" w-12 h-12 rounded-full">
                                        {
                                            user.photoURL == null && <img src="https://i.ibb.co/3YZNVgN/pro.png" className="w-full h-full rounded-full" alt="User Avatar" />
                                        }
                                        {user.photoURL && <img src={user.photoURL} className="w-full h-full rounded-full" alt="User Avatar" title={user.displayName} />}


                                    </div>
                                </label>
                            </>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;