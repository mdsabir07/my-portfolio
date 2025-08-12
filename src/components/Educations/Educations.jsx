import { FaUniversity, FaSchool, FaBookOpen } from 'react-icons/fa';

const Educations = () => (
  <section id="educations" className="py-10 bg-white dark:bg-gray-900">
    <div className="container mx-auto max-w-5xl px-6 md:px-10">
      <h2
        className="text-2xl md:text-4xl font-bold font-space-grotesk text-center mb-8 sm:mb-12 text-gray-900 dark:text-white"
      >
        Educational Qualification
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-800 dark:text-gray-300 font-inter">
        {/* Left Side – Education Details */}
        <div className="space-y-3">
          <h3
            className="text-lg sm:text-xl font-space-grotesk font-semibold mb-4"
          >
            Master of Social Sciences (MSS)
          </h3>

          <div className="flex items-center gap-3">
            <FaBookOpen className="text-blue-600 dark:text-blue-400" />
            <p className="text-sm">Faculty of Economics</p>
          </div>

          <div className="flex items-center gap-3">
            <FaSchool className="text-green-600 dark:text-green-400" />
            <p className="text-sm">Comilla Victoria College</p>
          </div>

          <div className="flex items-center gap-3">
            <FaUniversity className="text-indigo-600 dark:text-indigo-400" />
            <p className="text-sm">National University, Bangladesh</p>
          </div>
        </div>

        {/* Right Side – Description */}
        <div className="flex items-start gap-2">
          <p className="text-sm leading-relaxed">
            I completed my Master’s degree in Economics, which shaped my analytical mindset and critical thinking abilities.
            My academic journey trained me to evaluate systems deeply — a skill I now apply in software architecture,
            user experience planning, and decision-making as a developer.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Educations;