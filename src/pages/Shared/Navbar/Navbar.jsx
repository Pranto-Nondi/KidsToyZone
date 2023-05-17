import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navItems = <>
        <li className='pb-2 pl-2'><Link to='/'> Home</Link></li>
        <li className='pb-2 pl-2'><Link  >Blogs</Link></li>
        <li className='pb-2 pl-2'><Link  >All Toys</Link></li>
        <li className='pb-2 pl-2'><Link  >My Toys</Link></li>
        <li className='pb-2 pl-2'><Link  >Add A Toy</Link></li>

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
                    <Link to='/login' className="btn btn-primary">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;