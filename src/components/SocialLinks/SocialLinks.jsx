import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaWordpress } from 'react-icons/fa';
import { FaFacebook, FaStackOverflow, FaXTwitter } from 'react-icons/fa6';

const SocialLinks = () => {
    const socialProfiles = [
        {
            name: 'GitHub',
            url: '//github.com/mdsabir07',
            icon: <FaGithub className="icon-sm" />,
            color: 'hover:text-gray-800 dark:hover:text-gray-200'
        },
        {
            name: 'LinkedIn',
            url: 'https://linkedin.com/in/sabir07',
            icon: <FaLinkedinIn className="icon-sm" />,
            color: 'hover:text-blue-600 dark:hover:text-blue-400'
        },
        {
            name: 'Twitter',
            url: '//twitter.com/@mdsabir07',
            icon: <FaXTwitter className="icon-sm" />,
            color: 'hover:text-sky-500 dark:hover:text-sky-400'
        },
        {
            name: 'WordPress',
            url: '//profiles.wordpress.org/mdsabir07/',
            icon: <FaWordpress className="icon-sm" />,
            color: 'hover:text-blue-700 dark:hover:text-blue-500'
        },
        {
            name: 'StackOverFlow',
            url: '//stackoverflow.com/users/8124426/sabir',
            icon: <FaStackOverflow className="icon-sm" />,
            color: 'hover:text-blue-700 dark:hover:text-blue-500'
        },
        {
            name: 'Facebook',
            url: '//web.facebook.com/sabirul.islam1/',
            icon: <FaFacebook className="icon-sm" />,
            color: 'hover:text-blue-700 dark:hover:text-blue-500'
        }
    ];

    return (
        <div className="flex flex-col gap-2">
            {socialProfiles.map((profile, index) => (
                <motion.a
                    key={profile.name}
                    href={profile.url}
                    title={profile.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${profile.name} profile`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ y: -3 }}

                    className={`
            flex items-center gap-2 px-3 py-3 rounded-lg
            bg-gray-100 dark:bg-gray-800
            text-gray-600 dark:text-gray-400
            ${profile.color}
            transition-colors duration-300
          `}
                >
                    {profile.icon}
                    {/* <span>{profile.name}</span> */}
                </motion.a>
            ))}
        </div>
    );
};

export default SocialLinks;