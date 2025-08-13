import { motion } from 'framer-motion';
import { FiCode, FiGlobe, FiBook, FiCpu, FiActivity } from 'react-icons/fi';

const AboutMe = () => {
  return (
    <section id="about" className="pt-10 sm:pt-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl px-3 md:px-10">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-5 sm:mb-10 text-gray-900 dark:text-white font-space-grotesk"
        >
          About <span className="text-blue-600 dark:text-blue-400">Me</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-10 md:items-start">
          {/* Left: Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:w-1/2 space-y-6 text-gray-700 dark:text-gray-300 text-base lg:text-lg font-inter"
          >
            <p>
              <FiCode className="inline mr-2 text-xl text-blue-600 dark:text-blue-400" />
              <strong>I'm Sabirul Islam</strong>, a Full Stack Developer with <span className="text-blue-600 dark:text-blue-400">6+ years</span> of experience building modern web applications.
            </p>

            <p>
              I specialize in <strong>React</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong>, focusing on clean architecture and user-centric design.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FiCpu className="mt-1 text-xl text-blue-600 dark:text-blue-400" />
                <p><strong>Philosophy:</strong> Build scalable, maintainable, and elegant solutions.</p>
              </div>

              <div className="flex items-start gap-3">
                <FiGlobe className="mt-1 text-xl text-blue-600 dark:text-blue-400" />
                <p><strong>Beyond code:</strong> I travel for perspective and capture moments through photography.</p>
              </div>

              <div className="flex items-start gap-3">
                <FiBook className="mt-1 text-xl text-blue-600 dark:text-blue-400" />
                <p><strong>Hobbies:</strong> Sci-fi, cricket debates, and strategy games.</p>
              </div>

              <div className="flex items-start gap-3">
                <FiActivity className="mt-1 text-xl text-blue-600 dark:text-blue-400" />
                <p><strong>Fun fact:</strong> My most productive hours? Midnight with tea and LoFi.</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Code Block */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:w-1/2 w-full"
          >
            <div className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-lg text-sm md:text-base font-fira">
              <div className="flex gap-2 p-3 bg-gray-200 dark:bg-gray-700">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-xs text-gray-600 dark:text-gray-300">about-me.js</span>
              </div>
              <div className="p-4 font-mono">
                <span className="text-blue-600 dark:text-blue-400">const </span>
                <span className="text-purple-600 dark:text-purple-400">developer </span>= &#123;<br />
                <span className="ml-4 text-green-600 dark:text-green-400">name:</span>{' '}
                <span className="text-gray-800 dark:text-gray-300">'Sabirul Islam'</span>,<br />
                <span className="ml-4 text-green-600 dark:text-green-400">role:</span>{' '}
                <span className="text-gray-800 dark:text-gray-300">'Full Stack Developer'</span>,<br />
                <span className="ml-4 text-green-600 dark:text-green-400">experience:</span>{' '}
                <span className="text-gray-800 dark:text-gray-300">'6+ years'</span>,<br />
                <span className="ml-4 text-green-600 dark:text-green-400">skills:</span>{' '}
                <span className="text-gray-800 dark:text-gray-300">['React', 'Node.js', 'MongoDB', 'Next.js']</span>,<br />
                <span className="ml-4 text-green-600 dark:text-green-400">passion:</span>{' '}
                <span className="text-gray-800 dark:text-gray-300">'Creating meaningful digital experiences'</span><br />
                &#125;;
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mt-6">
              <h3 className="text-center text-md font-semibold mb-3 text-gray-800 dark:text-gray-200 font-space-grotesk">
                Tech Stack
              </h3>
              <div className="flex flex-wrap justify-center gap-2 font-inter">
                {[
                  { name: 'React', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
                  { name: 'Node.js', color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' },
                  { name: 'MongoDB', color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200' },
                  { name: 'Next.js', color: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200' },
                  { name: 'Tailwind', color: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200' },
                  { name: 'Express', color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' },
                ].map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i }}
                    whileHover={{ scale: 1.05 }}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${tech.color}`}
                  >
                    {tech.name}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
