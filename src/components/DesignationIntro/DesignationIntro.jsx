import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ProfilePhoto from '../../assets/sabirul-islam.jpg'
import ResumeButton from '../ResumeButton/ResumeButton';
import SocialLinks from '../SocialLinks/SocialLinks';

const DesignationIntro = () => {
  const [designationIndex, setDesignationIndex] = useState(0);

  const designations = [
    "Full Stack Developer — Next.js & Node.js",
    "React.js Specialist — Tailwind & Framer Motion",
    "Node.js & API Expert — Express / Next API",
    "Web Solutions Architect — MERN & Serverless",
    "Auth & Data Specialist — NextAuth, MongoDB & Mongoose",
    "WordPress & Shopify Specialist — Server & Website Management"
  ];


  // Animation for designation cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setDesignationIndex((prev) => (prev + 1) % designations.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id='intro'
      className="h-full xl:min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 relative"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between max-w-7xl px-3 md:px-10 gap-7 pt-10 xl:pt-0 lg:gap-12">
        {/* Text Content */}
        <div className="md:w-1/2 pt-5 sm:pt-0 space-y-4 sm:space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold font-space-grotesk"
          >
            Hi, I'm <span className="text-primary">Sabirul Islam</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-3xl font-semibold text-green-600 dark:text-green-400"
          >
            {designations.map((designation, index) => (
              <span
                key={designation}
                className={`block transition-opacity duration-500 ${index === designationIndex ? 'opacity-100' : 'opacity-0 absolute'
                  } whitespace-normal break-words`}
              >
                {designation}
              </span>
            ))}
          </motion.div>


          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg lg:text-xl text-gray-700 dark:text-gray-300"
          >
            I craft exceptional digital experiences with clean, efficient code.
            With expertise across the full stack, I bring ideas to life with
            modern web technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex gap-4 pt-4"
          >
            <a
              href="#contact"
              className="px-2 lg:px-6 py-2 lg:py-3 rounded-lg font-medium transition-all bg-primary hover:bg-secondary text-white"
            >
              Get In Touch
            </a>
            <ResumeButton />
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-xs sm:w-md h-xs sm:h-md object-cover rounded-full overflow-hidden border-4 border-indigo-300 dark:border-indigo-500">
            <img src={ProfilePhoto} alt="" />
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full shadow-[0_0_40px_10px_rgba(99,102,241,0.2)] dark:shadow-[0_0_40px_10px_rgba(99,102,241,0.3)] animate-pulse"></div>
          </div>
        </motion.div>
      </div>
      <div className="absolute left-0 top-90 sm:top-50">
        <SocialLinks />
      </div>
    </section>
  );
};

export default DesignationIntro;