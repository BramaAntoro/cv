import { FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaReact, FaPhp, FaDatabase, FaLaravel, FaGit, FaGithub, FaProjectDiagram } from "react-icons/fa";

export function Skill() {
    return (
        <section className="dark:bg-white text-gray-200 py-24" id="skills">
            <div className="max-w-6xl mx-auto px-5">
                <div className="text-center mb-20">
                    <h1 className="text-black text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Skills</h1>
                    <p className="text-black text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        I have skills in using various technologies that support web development effectively and efficiently, from design to database management and dynamic web application development.
                    </p>
                    <div className="flex justify-center mt-6">
                        <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                    </div>
                </div>



                <div className="flex flex-wrap -mx-4">

                    {/* HTML */}
                    <div className="p-4 md:w-1/3">
                        <div className="bg-gray-800 rounded-lg p-6">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 text-orange-500 mb-5">
                                <FaHtml5 size={24} />
                            </div>
                            <h2 className="text-xl font-medium mb-3">HTML</h2>
                            <p className="text-sm leading-relaxed text-justify">
                                I am proficient in HTML to build well-structured and accessible web pages, supporting the development of responsive web applications.
                            </p>
                        </div>
                    </div>

                    {/* CSS */}
                    <div className="p-4 md:w-1/3">
                        <div className="bg-gray-800 rounded-lg p-6">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-500 mb-5">
                                <FaCss3Alt size={24} />
                            </div>
                            <h2 className="text-xl font-medium mb-3">CSS</h2>
                            <p className="text-sm leading-relaxed text-justify">
                                With CSS, I can create visually appealing and responsive web layouts, providing an optimal user experience.
                            </p>
                        </div>
                    </div>

                    {/* JavaScript */}
                    <div className="p-4 md:w-1/3">
                        <div className="bg-gray-800 rounded-lg p-6">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-100 text-yellow-500 mb-5">
                                <FaJsSquare size={24} />
                            </div>
                            <h2 className="text-xl font-medium mb-3">JavaScript</h2>
                            <p className="text-sm leading-relaxed text-justify">
                                I use JavaScript to add interactivity and dynamic functionality to web pages, enabling the creation of more interactive web applications.
                            </p>
                        </div>
                    </div>

                    {/* Bootstrap */}
                    <div className="p-4 md:w-1/3">
                        <div className="bg-gray-800 rounded-lg p-6">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 text-purple-500 mb-5">
                                <FaBootstrap size={24} />
                            </div>
                            <h2 className="text-xl font-medium mb-3">Bootstrap</h2>
                            <p className="text-sm leading-relaxed text-justify">
                                I use Bootstrap to speed up the development of responsive and modern web designs, with ready-to-use components.
                            </p>
                        </div>
                    </div>

                    {/* Tailwind CSS */}
                    <div className="p-4 md:w-1/3">
                        <div className="bg-gray-800 rounded-lg p-6">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-500 mb-5">
                                <FaCss3Alt size={24} />
                            </div>
                            <h2 className="text-xl font-medium mb-3">Tailwind CSS</h2>
                            <p className="text-sm leading-relaxed text-justify">
                                I am proficient in using Tailwind CSS to quickly create flexible and customizable user interfaces, reducing development time and improving productivity.
                            </p>
                        </div>
                    </div>

                    {/* React */}
                    <div className="p-4 md:w-1/3">
                        <div className="bg-gray-800 rounded-lg p-6">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-500 mb-5">
                                <FaReact size={24} />
                            </div>
                            <h2 className="text-xl font-medium mb-3">React</h2>
                            <p className="text-sm leading-relaxed text-justify">
                                I use React to build efficient, maintainable, component-based web applications with fast state management and rendering.
                            </p>
                        </div>
                    </div>

                    {/* PHP */}
                    <div className="p-4 md:w-1/3">
                        <div className="bg-gray-800 rounded-lg p-6">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-indigo-500 mb-5">
                                <FaPhp size={24} />
                            </div>
                            <h2 className="text-xl font-medium mb-3">PHP</h2>
                            <p className="text-sm leading-relaxed text-justify">
                                I use PHP to build dynamic web applications on the server-side, manage data, and generate responsive web pages based on user input in real-time.
                            </p>
                        </div>
                    </div>

                    {/* Laravel */}
                    <div className="p-4 md:w-1/3">
                        <div className="bg-gray-800 rounded-lg p-6">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-100 text-red-500 mb-5">
                                <FaLaravel size={24} />
                            </div>
                            <h2 className="text-xl font-medium mb-3">Laravel</h2>
                            <p className="text-sm leading-relaxed text-justify">
                                I use Laravel to build secure, structured, and efficient web applications with built-in features such as routing, authentication, and database management.
                            </p>
                        </div>
                    </div>

                    {/* MySQL */}
                    <div className="p-4 md:w-1/3">
                        <div className="bg-gray-800 rounded-lg p-6">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 text-orange-500 mb-5">
                                <FaDatabase size={24} />
                            </div>
                            <h2 className="text-xl font-medium mb-3">MySQL</h2>
                            <p className="text-sm leading-relaxed text-justify">
                                I use MySQL to store and manage data in web applications, enabling fast and efficient database queries.
                            </p>
                        </div>
                    </div>

                    {/* UML */}
                    <div className="p-4 md:w-1/3">
                        <div className="bg-gray-800 rounded-lg p-6">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 text-orange-500 mb-5">
                                <FaProjectDiagram size={24} />
                            </div>
                            <h2 className="text-xl font-medium mb-3">UML</h2>
                            <p className="text-sm leading-relaxed text-justify">
                                I use UML (Unified Modeling Language) to design and visualize the structure and behavior of web applications, ensuring clear communication and efficient development.
                            </p>
                        </div>
                    </div>

                    {/* Git */}
                    <div className="p-4 md:w-1/3">
                        <div className="bg-gray-800 rounded-lg p-6">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-500 mb-5">
                                <FaGit size={24} />
                            </div>
                            <h2 className="text-xl font-medium mb-3">Git</h2>
                            <p className="text-sm leading-relaxed text-justify">
                                I use Git to efficiently manage code versions, allowing me to collaborate with teams and track code changes in real-time.
                            </p>
                        </div>
                    </div>

                    {/* GitHub */}
                    <div className="p-4 md:w-1/3">
                        <div className="bg-gray-800 rounded-lg p-6">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-black-100 text-black-500 mb-5">
                                <FaGithub size={24} />
                            </div>
                            <h2 className="text-xl font-medium mb-3">GitHub</h2>
                            <p className="text-sm leading-relaxed text-justify">
                                I utilize GitHub to share code with development teams and store open or private project code repositories.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
