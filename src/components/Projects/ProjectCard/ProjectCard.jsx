import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router';



const ProjectCard = ({ project }) => {
  const { title, description, image, link } = project;
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col h-full">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
        />
      </div>

      <div className="p-4 md:p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold mb-2 font-space-grotesk text-gray-900 dark:text-white line-clamp-1">
          {title}
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 flex-1 line-clamp-2">
          {description}
        </p>

        <Link
          to={link}
          className="mt-4 inline-flex items-center gap-2 text-sm lg:text-base text-blue-600 dark:text-blue-400 hover:underline"
        >
          View More / Details
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;