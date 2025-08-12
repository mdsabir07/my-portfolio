import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ProfilePhoto from '../../assets/sabirul-islam.jpg'
import ResumeButton from '../ResumeButton/ResumeButton';
import SocialLinks from '../SocialLinks/SocialLinks';

const DesignationIntro = () => {
  const [designationIndex, setDesignationIndex] = useState(0);
  
  const designations = [
    "Full Stack Developer",
    "React Specialist",
    "Node.js Expert",
    "Web Solutions Architect",
    "WordPress and Shopify Specialist"
  ];

  // Animation for designation cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setDesignationIndex((prev) => (prev + 1) % designations.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 relative">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between  px-10 gap-12">
        {/* Text Content */}
        <div className="md:w-1/2 space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-primary"
          >
            Hi, I'm <span className="underline decoration-wavy">Sabirul Islam</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl md:text-3xl font-semibold h-12"
          >
            {designations.map((designation, index) => (
              <span 
                key={designation}
                className={`absolute transition-opacity duration-500 ${
                  index === designationIndex ? 'opacity-100' : 'opacity-0'
                } text-green-600 dark:text-green-400`}
              >
                {designation}
              </span>
            ))}
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300"
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
              className="px-6 py-3 rounded-lg font-medium transition-all bg-primary hover:bg-secondary text-white"
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
          <div className="relative w-sm sm:w-md h-sm sm:h-md object-cover rounded-full overflow-hidden border-4 border-indigo-300 dark:border-indigo-500">
            <img src={ProfilePhoto} alt="" />
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full shadow-[0_0_40px_10px_rgba(99,102,241,0.2)] dark:shadow-[0_0_40px_10px_rgba(99,102,241,0.3)] animate-pulse"></div>
          </div>
        </motion.div>
      </div>
      <div className="absolute left-0 top-50">
        <SocialLinks />
      </div>
    </section>
  );
};

export default DesignationIntro;