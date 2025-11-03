import { Link } from 'react-router';
// import Logo from '../../assets/logo.png';
import Logo from '/CoderDevsBD.png';
import { FaGithub, FaLinkedinIn, FaWordpress } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="px-4 py-8">
            <div className="container flex flex-wrap items-center justify-center mx-auto max-w-7xl px-3 md:px-10 space-y-4 sm:justify-between sm:space-y-0">
                <div className="flex flex-col">
                    <Link to="/" className='flex justify-center md:justify-start'><img src={Logo} alt="" className='w-50' /></Link>
                    <div className="mt-3 text-sm">&copy; CoderDevsBd. All rights reserved.</div>
                </div>
                <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
                    <li>
                        <a rel="noopener noreferrer" target='_blank' title="LinkedIn" className='hover:text-primary' href="https://linkedin.com/in/sabir07"><FaLinkedinIn /></a>
                    </li>
                    <li>
                        <a rel="noopener noreferrer" target='_blank' title="GitHub" className='hover:text-primary' href="https://github.com/mdsabir07"><FaGithub /></a>
                    </li>
                    <li>
                        <a rel="noopener noreferrer" target='_blank' title="Twitter" className='hover:text-primary' href="https://twitter.com/@mdsabir07"><FaXTwitter /></a>
                    </li>
                    <li>
                        <a rel="noopener noreferrer" target='_blank' title="WordPress" className='hover:text-primary' href="https://profiles.wordpress.org/mdsabir07/"><FaWordpress /></a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;