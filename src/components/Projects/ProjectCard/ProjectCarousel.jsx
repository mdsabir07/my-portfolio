import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const ProjectCarousel = () => {

    return (
        <section
            id="projects"
            className="pt-10 sm:pt-24 bg-gray-50 dark:bg-gray-900"
        >
            <div className="container mx-auto max-w-7xl px-3 sm:px-6 md:px-10">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900 dark:text-white font-space-grotesk">
                    Featured{" "}
                    <span className="text-primary dark:text-blue-400">
                        Projects
                    </span>
                </h2>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    navigation
                    // pagination={{ clickable: true }}
                    pagination={false}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2, spaceBetween: 25 },
                        1024: { slidesPerView: 3, spaceBetween: 30 }
                    }}
                    className="pb-12"
                >
                    {projects.map((project) => (
                        <SwiperSlide key={project.id}>
                            <ProjectCard project={project} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="text-center py-10">
                    <a
                        href="https://sabir.coderdevsbd.com/portfolios/"
                        target="_blank"
                        rel="noreferrer"
                        className="px-2 lg:px-6 py-2 lg:py-3 rounded-lg font-medium transition-all bg-primary hover:bg-secondary text-white"
                    >
                        See More Projects
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProjectCarousel;