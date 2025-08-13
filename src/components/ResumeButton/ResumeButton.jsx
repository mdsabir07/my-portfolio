import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

const ResumeButton = () => {
  const handleDownload = () => {
    // Replace with your actual resume URL
    const resumeUrl = '/resume-sabirul-islam.pdf';
    
    // For demo purposes - remove this in production
    if (!resumeUrl) {
      alert("Resume is coming soon! Currently in final edits.");
      return;
    }

    // Create temporary anchor tag for download
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Sabirul-Islam-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.button
      onClick={handleDownload}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        flex items-center gap-2 px-2 lg:px-6 py-2 lg:py-3 rounded-lg font-medium border border-primary text-gray-900 hover:bg-primary
        dark:text-white shadow-lg shadow-blue-500/20
        dark:shadow-blue-900/30
        transition-all duration-300
        cursor-pointer
      `}
    >
      <FiDownload className="text-lg" />
      Download Resume
    </motion.button>
  );
};

export default ResumeButton;