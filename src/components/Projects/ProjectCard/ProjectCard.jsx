import { FaExternalLinkAlt, FaCode, FaListUl, FaArrowRight } from 'react-icons/fa';

const ProjectCard = () => (
  <section id="projects" className="pt-10 sm:pt-24 bg-gray-50 dark:bg-gray-900">
    <div className="container mx-auto max-w-7xl px-3 sm:px-6 md:px-10">
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900 dark:text-white font-space-grotesk"
      >
        Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10 text-gray-800 dark:text-gray-300 font-inter">
        {/* Project 1 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col">
          <img
            src="/marathon.png"
            alt="Marathon Management System"
            className="w-full h-48 object-cover"
          />
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-xl font-semibold mb-2 font-space-grotesk">
              Marathon Management System
            </h3>
            <p className="text-sm flex-1">
              A platform for managing marathon events, participant registration, and race tracking.
            </p>
            <a
              href="/projects/marathon-management-system"
              className="mt-4 inline-flex items-center text-sm lg:text-base gap-2 text-blue-600 dark:text-blue-400 hover:underline"
            >
              View More / Details <FaArrowRight />
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col">
          <img
            src="/blood-donate.png"
            alt="Blood Donation Platform"
            className="w-full h-48 object-cover"
          />
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-xl font-semibold mb-2 font-space-grotesk">
              Blood Donation Platform
            </h3>
            <p className="text-sm flex-1">
              Connects donors and recipients, allowing quick blood requests and offers.
            </p>
            <a
              href="/projects/blood-donation-platform"
              className="mt-4 inline-flex items-center text-sm lg:text-base gap-2 text-blue-600 dark:text-blue-400 hover:underline"
            >
              View More / Details <FaArrowRight />
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col">
          <img
            src="/abz-inovation.png"
            alt="ABZ Innovation Website"
            className="w-full h-48 object-cover"
          />
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-xl font-semibold mb-2 font-space-grotesk">
              ABZ Innovation Corporate Website
            </h3>
            <p className="text-sm flex-1">
              Professional corporate site built in WordPress for ABZ Innovation’s services & portfolio.
            </p>
            <a
              href="/projects/abz-innovation"
              className="mt-4 inline-flex items-center text-sm lg:text-base gap-2 text-blue-600 dark:text-blue-400 hover:underline"
            >
              View More / Details <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProjectCard;