import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { Link, NavLink } from 'react-router';
import Logo from '../../assets/logo.png'
import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const navLinksLarge = <>
        <ul className="items-stretch hidden space-x-3 md:flex">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><ThemeToggle /></li>
        </ul>
    </>
    const navLinksSmall = <>
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2">
            <NavLink to="/" className="block">Home</NavLink>
            <NavLink to="/about" className="block">About</NavLink>
            <NavLink to="/services" className="block">Services</NavLink>
            <NavLink to="/contact" className="block">Contact</NavLink>
            <ThemeToggle />
        </div>
    </>
    return (
        <header className="p-4">
            <div className="container flex justify-between h-16 mx-auto px-10">

                <Link to="/"><img src={Logo} alt="" className='w-40' /></Link>
                {/* Desktop Menu */}
                {navLinksLarge}
                <button
                    className="flex justify-end p-4 md:hidden focus:outline-none"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
            {/* Mobile Menu */}
            {isMenuOpen && (
                navLinksSmall
            )}
        </header>
    );
};

export default Navbar;