import ThemeToggle from '../ThemeToggle/ThemeToggle';
// import Logo from '../../assets/logo.png';
import Logo from '/CoderDevsBD.png';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import ResumeButton from '../ResumeButton/ResumeButton';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    // links
    const navLinks = [
        { name: 'Intro', href: '/#intro', isExternal: false },
        { name: 'About', href: '/#about', isExternal: false },
        { name: 'Skills', href: '/#skills', isExternal: false },
        { name: 'Educations', href: '/#educations', isExternal: false },
        { name: 'Experiences', href: '/#experiences', isExternal: false },
        { name: 'Projects', href: '/#projects', isExternal: false },
        { name: 'Contact', href: '/#contact', isExternal: false },
    ];

    const navLinksLarge = <>
        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {navLinks.map(({ name, href }) => (
                <a key={name} href={href} className="hover:text-primary">
                    {name}
                </a>
            ))}
            <ResumeButton />
            <ThemeToggle />
        </nav>
    </>
    const navLinksSmall = <>
        <nav className="lg:hidden px-4 pt-2 pb-4 space-y-2 shadow-xl rounded-md bg-white dark:bg-gray-900">
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
            <ResumeButton />
            <ThemeToggle />
        </nav>
    </>
    return (
        <header
            className={`fixed top-0 left-0 right-0 py-2 z-50 transition-colors duration-300 ${scrolled ? "bg-white shadow-md dark:bg-gray-900" : "bg-transparent"
                }`}
        >
            <div className="container flex justify-between items-center h-16 mx-auto max-w-7xl px-3 md:px-10">
                <Link to="/"><img src={Logo} alt="" className='w-30 xl:w-50' /></Link>
                {/* Desktop Menu */}
                {navLinksLarge}
                <button
                    onClick={toggleMenu}
                    className="lg:hidden focus:outline-none"
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