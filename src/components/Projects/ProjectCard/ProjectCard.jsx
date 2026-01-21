import { FaArrowRight } from 'react-icons/fa';

const ProjectCard = () => (
  <section id="projects" className="pt-10 sm:pt-24 bg-gray-50 dark:bg-gray-900">
    <div className="container mx-auto max-w-7xl px-3 sm:px-6 md:px-10">
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900 dark:text-white font-space-grotesk"
      >
        Featured <span className="text-primary dark:text-blue-400">Projects</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 text-gray-800 dark:text-gray-300 font-inter">
        {/* Project 1 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col">
            <img
              src="/remotenest-banner.png"
              alt="RemoteNest - A Platform for Digital Nomads"
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-750 ease-in-out"
            />
          <div className="p-4 md:p-6 flex flex-col flex-1">
            <h3 className="text-xl font-semibold mb-2 font-space-grotesk">
              RemoteNest - A Platform for Digital Nomads
            </h3>
            <p className="text-sm flex-1">
              RemoteNest is designed to empower remote workers to discover, connect, and live anywhere comfortably.
            </p>
            <a
              href="/projects/remotenest"
              className="mt-4 inline-flex items-center text-sm lg:text-base gap-2 text-blue-600 dark:text-blue-400 hover:underline"
            >
              View More / Details <FaArrowRight />
            </a>
          </div>
        </div>
        {/* Project 2 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col">
            <img
              src="/marathon.png"
              alt="Marathon Management System"
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-750 ease-in-out"
            />
          <div className="p-4 md:p-6 flex flex-col flex-1">
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

        {/* Project 3 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col">
          <img
            src="/blood-donate.png"
            alt="Blood Donation Platform"
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-750 ease-in-out"
          />
          <div className="p-4 md:p-6 flex flex-col flex-1">
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

        {/* Project 4 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col">
          <img
            src="/abz-inovation.png"
            alt="ABZ Innovation Website"
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-750 ease-in-out"
          />
          <div className="p-4 md:p-6 flex flex-col flex-1">
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
      <div className="text-center py-10">
        <a
          href="//sabir.coderdevsbd.com/portfolios/"
          nofollow="true"
          target="_blank"
          rel="noreferrer"
          className="px-2 lg:px-6 py-2 lg:py-3 rounded-lg font-medium transition-all bg-primary hover:bg-secondary text-white"
        >
          See More Projects <FaArrowRight className="inline ml-2" />
        </a>
      </div>
    </div>
  </section>
);

export default ProjectCard;