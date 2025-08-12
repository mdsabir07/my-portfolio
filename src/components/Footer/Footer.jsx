import { Link } from 'react-router';
import Logo from '../../assets/logo.png';
import { FaGithub, FaLinkedinIn, FaWordpress } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="px-4 py-8">
            <div className="container flex flex-wrap items-center justify-center mx-auto px-10 space-y-4 sm:justify-between sm:space-y-0">
                <div className="flex flex-col">
                    <Link to="/"><img src={Logo} alt="" className='w-40' /></Link>
                    <div className="py-6 text-sm text-center dark:text-gray-600">&copy; CoderDevsBd. All rights reserved.</div>
                </div>
                <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
                    <li>
                        <a target='_blank' href="https://linkedin.com/in/sabir07"><FaLinkedinIn /></a>
                    </li>
                    <li>
                        <a target='_blank' href="https://linkedin.com/mdsabir07"><FaGithub /></a>
                    </li>
                    <li>
                        <a target='_blank' href="https://linkedin.com/@mdsabir07"><FaXTwitter /></a>
                    </li>
                    <li>
                        <a target='_blank' href="https://profiles.wordpress.org/mdsabir07/"><FaWordpress /></a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;