import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function ContactInfo() {
    return (
        <section id="contact" className="pt-10 pb-10 sm:pb-20 sm:pt-24 bg-gray-100 dark:bg-gray-900">
            <div className="container mx-auto px-3 max-w-3xl text-center">
                {/* Heading */}
                <h2 className="text-3xl font-bold font-space-grotesk text-gray-800 dark:text-white mb-6">
                    Get in <span className="text-blue-600 dark:text-blue-400">Touch</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                    I’d love to hear from you! Feel free to reach out for any questions,
                    collaborations, or project discussions.
                </p>

                {/* Contact List */}
                <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-5">
                    {/* Email */}
                    <a
                        href="mailto:sabirdev07@gmail.com"
                        className="flex items-center gap-3 bg-white dark:bg-gray-800 shadow px-2 lg:px-6 py-2 lg:py-3 rounded-lg hover:shadow-md transition"
                    >
                        <FaEnvelope className="text-blue-600 text-xl" />
                        <span className="text-gray-700 dark:text-gray-300">
                            sabirdev07@gmail.com
                        </span>
                    </a>

                    {/* Phone */}
                    <a
                        href="tel:+8801719358451"
                        className="flex items-center gap-3 bg-white dark:bg-gray-800 shadow px-2 lg:px-6 py-2 lg:py-3 rounded-lg hover:shadow-md transition"
                    >
                        <FaPhoneAlt className="text-green-600 text-xl" />
                        <span className="text-gray-700 dark:text-gray-300">
                            01719358451
                        </span>
                    </a>

                    {/* WhatsApp (Optional) */}
                    <a
                        href="https://wa.me/8801712766962"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3 bg-white dark:bg-gray-800 shadow px-2 lg:px-6 py-2 lg:py-3 rounded-lg hover:shadow-md transition"
                    >
                        <FaWhatsapp className="text-green-500 text-xl" />
                        <span className="text-gray-700 dark:text-gray-300">
                            WhatsApp
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}