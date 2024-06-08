import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="flex flex-col items-center justify-center mb-0 sticky top-0 backdrop-blur-sm">
            <h1 className='m-4 text-center p-2 mt-2 font-semibold text-4xl'>OpenLibrary's Personal Bookshelf</h1>
            <div className='flex flex-row items-center'>
                <NavLink to="/" className="m-4 text-center w-32 p-2 m-3 bg-green-600 rounded-md hover:text-white hover:font-semibold">Library</NavLink>
                <NavLink to="/bookshelf" className='m-4 text-center w-32 p-2 m-3 bg-green-600 rounded-md hover:text-white hover:font-semibold'>My Bookshelf</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
