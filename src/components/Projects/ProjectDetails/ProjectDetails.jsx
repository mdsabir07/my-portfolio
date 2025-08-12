import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaTools, FaLightbulb } from "react-icons/fa";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import Loading from "../../Loader/Loading";


export default function ProjectDetails() {
    const { projectId } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        fetch("/projects.json")
            .then((res) => res.json())
            .then((data) => {
                const foundProject = data.find((p) => p.detailsUrl.endsWith(projectId));
                setProject(foundProject);
            });
    }, [projectId]);

    if (!project) return <Loading />;

    return (
        <>
            <Navbar />
            <section className="py-12 sm:py-20 bg-gray-50 dark:bg-gray-900">
                <div className="container max-w-7xl mx-auto px-4">
                    {/* Image */}
                    <div className="mb-8">
                        <img
                            src={project.image}
                            alt={project.name}
                            className="w-full mx-auto rounded-lg shadow-lg hover:scale-105 transition-transform"
                        />
                    </div>


                    <div>
                        <h2 className="text-4xl font-bold font-space-grotesk mb-6 text-gray-800 dark:text-white">{project.name}</h2>
                        {/* Tech Stack */}
                        <div className="mb-6">
                            <h3 className="flex items-center font-space-grotesk gap-2 text-xl font-semibold text-gray-700 dark:text-gray-300">
                                <FaTools /> Tech Stack
                            </h3>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {project.techStack.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Description */}
                        <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">{project.description}</p>

                        {/* Challenges */}
                        {project.challenges && (
                            <div className="mb-6">
                                <h3 className="flex items-center gap-2 text-xl font-space-grotesk font-semibold text-gray-700 dark:text-gray-300">
                                    <FaLightbulb /> Challenges
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">{project.challenges}</p>
                            </div>
                        )}

                        {/* Future Plans */}
                        {project.futurePlans && (
                            <div className="mb-8">
                                <h3 className="flex items-center gap-2 font-space-grotesk text-xl font-semibold text-gray-700 dark:text-gray-300">
                                    <FaLightbulb /> Future Plans
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">{project.futurePlans}</p>
                            </div>
                        )}

                        {/* Links */}
                        <div className="flex gap-4">
                            {project.liveLink && (
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                                >
                                    Live Project <FaExternalLinkAlt />
                                </a>
                            )}
                            {project.githubLink && (
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900"
                                >
                                    GitHub Repo <FaGithub />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}