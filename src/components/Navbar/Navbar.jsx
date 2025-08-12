import ThemeToggle from '../ThemeToggle/ThemeToggle';
// import Logo from '../../assets/logo.png';
import { useState } from 'react';
import { Link } from 'react-router'; // For routing links (use in-project detail pages)
import Logo from '../Logo/Logo';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    // links
    const navLinks = [
        { name: 'Home', href: '#home', isExternal: false },
        { name: 'About', href: '#about', isExternal: false },
        { name: 'Services', href: '#services', isExternal: false },
        { name: 'Project', href: '#project', isExternal: false },
        { name: 'Contact', href: '#contact', isExternal: false },
    ];

    const navLinksLarge = <>
        <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map(({ name, href }) => (
                <a key={name} href={href} className="hover:text-primary">
                    {name}
                </a>
            ))}
            <ThemeToggle />
        </nav>
    </>
    const navLinksSmall = <>
        <nav className="md:hidden px-4 pt-2 pb-4 space-y-2 shadow-xl rounded-md bg-white dark:bg-gray-900">
            {navLinks.map(({ name, href }) => (
                <a
                    key={name}
                    href={href}
                    onClick={closeMenu}
                    className="block hover:text-primary"
                >
                    {name}
                </a>
            ))}
            <ThemeToggle />
        </nav>
    </>
    return (
        <header className="p-4">
            <div className="container flex justify-between h-16 mx-auto px-10">

                <Link to="/"><Logo /></Link>
                {/* <Link to="/"><img src={Logo} alt="" className='w-40' /></Link> */}
                {/* Desktop Menu */}
                {navLinksLarge}
                <button
                    onClick={toggleMenu}
                    className="md:hidden focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
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