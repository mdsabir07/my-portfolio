import {
  SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript,
  SiNodedotjs, SiExpress, SiPhp, SiMongodb, SiFirebase, SiJsonwebtokens,
  SiGithub, SiDocker, SiWordpress, SiShopify, SiGoogleanalytics
} from 'react-icons/si';
import { FaTools, FaServer, FaShieldAlt } from 'react-icons/fa';

const Skills = () => (
  <section id="skills" className="pt-10 sm:pt-24 bg-gray-50 dark:bg-gray-900">
    <div className="container mx-auto max-w-7xl px-3 md:px-10">
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 text-gray-900 dark:text-white font-space-grotesk"
      >
        Skills & <span className="text-blue-600 dark:text-blue-400">Technologies</span>
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-10 text-gray-800 dark:text-gray-300 font-inter">
        {/* Frontend */}
        <div>
          <h3 className="text-md sm:text-xl font-semibold mb-4 font-space-grotesk">
            Frontend Development
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-3"><SiReact className="text-blue-600 dark:text-blue-400" /> React</li>
            <li className="flex items-center gap-3"><SiNextdotjs className="text-gray-900 dark:text-white" /> Next.js</li>
            <li className="flex items-center gap-3"><SiTailwindcss className="text-cyan-600 dark:text-cyan-400" /> Tailwind CSS</li>
            <li className="flex items-center gap-3"><SiTypescript className="text-blue-500 dark:text-blue-400" /> TypeScript (Learning)</li>
            <li className="flex items-center gap-3"><SiJavascript className="text-yellow-500 dark:text-yellow-300" /> JavaScript</li>
          </ul>
        </div>

        {/* Backend */}
        <div>
          <h3 className="text-md sm:text-xl font-semibold mb-4 font-space-grotesk">
            Backend & APIs
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-3"><SiNodedotjs className="text-green-600 dark:text-green-400" /> Node.js</li>
            <li className="flex items-center gap-3"><SiExpress className="text-gray-700 dark:text-gray-200" /> Express.js</li>
            <li className="flex items-center gap-3"><SiPhp className="text-indigo-500 dark:text-indigo-300" /> PHP</li>
            <li className="flex items-center gap-3"><SiMongodb className="text-emerald-600 dark:text-emerald-400" /> MongoDB</li>
            <li className="flex items-center gap-3"><SiFirebase className="text-orange-500 dark:text-orange-300" /> Firebase Auth</li>
            <li className="flex items-center gap-3"><SiJsonwebtokens className="text-pink-500 dark:text-pink-300" /> JWT</li>
          </ul>
        </div>

        {/* CMS / Platforms */}
        <div>
          <h3 className="text-md sm:text-xl font-semibold mb-4 font-space-grotesk">
            CMS & Platforms
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-3"><SiWordpress className="text-indigo-600 dark:text-indigo-400" /> WordPress</li>
            <li className="flex items-center gap-3"><SiShopify className="text-green-600 dark:text-green-400" /> Shopify</li>
            <li className="flex items-center gap-3"><FaTools className="text-gray-700 dark:text-gray-200" /> Website Management</li>
            <li className="flex items-center gap-3"><SiGoogleanalytics className="text-red-500 dark:text-red-300" /> SEO & Analytics</li>
          </ul>
        </div>

        {/* Tools / Server */}
        <div>
          <h3 className="text-md sm:text-xl font-semibold mb-4 font-space-grotesk">
            Dev Tools & Server
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-3"><SiGithub className="text-gray-900 dark:text-white" /> Git / GitHub</li>
            <li className="flex items-center gap-3"><SiDocker className="text-blue-600 dark:text-blue-400" /> Docker</li>
            <li className="flex items-center gap-3"><FaServer className="text-gray-700 dark:text-gray-200" /> Server Management</li>
            <li className="flex items-center gap-3"><FaShieldAlt className="text-red-600 dark:text-red-400" /> Security Hardening</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
