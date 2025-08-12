import { FaBriefcase, FaClock, FaGlobe, FaBuilding } from 'react-icons/fa';
import { SiFiverr, SiUpwork, SiFreelancer, SiPeopleperhour } from 'react-icons/si';

const Experiences = () => (
  <section id="experience" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
    <div className="container mx-auto max-w-5xl px-6 md:px-10">
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        style={{ fontFamily: 'var(--font-space-grotesk)' }}
      >
        Professional Experience
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-800 dark:text-gray-300 font-inter">
        {/* Local Company Experience */}
        <div className="space-y-3 border-l-4 border-blue-500 pl-4">
          <div className="flex items-center gap-3">
            <FaBuilding className="text-blue-600 dark:text-blue-400" />
            <h3
              className="text-xl font-semibold"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Omnitechtion Solutions
            </h3>
          </div>
          <p className="text-sm">Full Stack Developer</p>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <FaClock /> Long-term Employment
          </div>
          <p className="text-sm mt-2">
            Worked as a key developer at a local IT company where I contributed to building, managing,
            and deploying enterprise-grade web applications and client projects.
          </p>
        </div>

        {/* Freelance Experience */}
        <div className="space-y-3 border-l-4 border-green-500 pl-4">
          <div className="flex items-center gap-3">
            <FaGlobe className="text-green-600 dark:text-green-400" />
            <h3
              className="text-xl font-semibold"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Freelance Marketplace Work
            </h3>
          </div>
          <p className="text-sm">Full Stack / CMS Developer</p>
          <div className="flex flex-wrap gap-3 items-center text-sm text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <SiFiverr className="text-[#1DBF73]" /> Since 2017
            </span>
            <span className="flex items-center gap-1">
              <SiPeopleperhour className="text-[#F48024]" /> Since 2018
            </span>
            <span className="flex items-center gap-1">
              <SiUpwork className="text-[#6fda44]" /> Since 2020
            </span>
            <span className="flex items-center gap-1">
              <SiFreelancer className="text-blue-500" /> Outside Platforms
            </span>
          </div>
          <p className="text-sm mt-2">
            I’ve been working globally as a freelancer with clients from various industries —
            providing web development, CMS customization, e-commerce, SEO, and server-side solutions.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Experiences;