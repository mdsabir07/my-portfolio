import {
  FaClock, FaGlobe, FaBuilding
} from 'react-icons/fa';
import { SiFiverr, SiUpwork, SiFreelancer } from 'react-icons/si';

const Experiences = () => (
  <section id="experiences" className="pt-10 sm:pt-24 bg-gray-50 dark:bg-gray-900">
    <div className="container mx-auto max-w-5xl px-2 sm:px-6 md:px-10">
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900 dark:text-white font-space-grotesk"
      >
        Professional <span className="text-primary dark:text-blue-400">Experience</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-800 dark:text-gray-300 font-inter">
        {/* Local Company Experience */}
        <div className="space-y-3 border-l-4 border-blue-500 pl-4">
          <div className="flex items-center gap-3">
            <FaBuilding className="text-primary dark:text-blue-400" />
            <h3
              className="text-xl font-semibold font-space-grotesk"
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
              className="text-xl font-semibold font-space-grotesk"
            >
              Freelance Marketplace Work
            </h3>
          </div>
          <p className="text-sm">Full Stack / CMS Developer</p>

          <div className="flex flex-wrap gap-3 items-center text-sm text-gray-600 dark:text-gray-400">
            <a
              href="//fiverr.com/wd_com_3"
              title="Fiverr - Global Freelance Marketplace"
              className="flex items-center gap-1 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiFiverr className="text-[#1DBF73] text-4xl" /> Since 2017
            </a>

            <a
              href="//pph.me/sabiruli"
              title="PeoplePerHour - Freelance Marketplace"
              className="flex items-center gap-1 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-orange-500 text-lg">🕐</span> PPH – Since 2018
            </a>

            <a
              href="//upwork.com/o/profiles/users/~010424d8751b7807dc/"
              title="Upwork - Freelance Marketplace"
              className="flex items-center gap-1 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiUpwork className="text-[#6fda44] text-lg" /> Since 2020
            </a>

            {/* <a
              href="#"
              title="Freelancer - Global Freelance Platform"
              className="flex items-center gap-1 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiFreelancer className="text-blue-500 text-lg" /> Outside Platforms
            </a> */}
          </div>

          <p className="text-sm mt-2">
            I’ve been working globally as a freelancer with clients from various industries — providing web development,
            CMS customization, e-commerce, SEO, and server-side solutions.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Experiences;