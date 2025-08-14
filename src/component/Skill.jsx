import { FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaReact, FaPhp, FaLaravel, FaGit, FaGithub, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiPostgresql, SiMysql, SiUml, SiNodedotjs } from "react-icons/si";
import { TbRelationManyToMany } from "react-icons/tb";
import n8nLogo from "../assets/img/skills/logo-n8n.svg";

const customScrollKeyframes = `
@keyframes scrollRightToLeft {
  0% { transform: translateX(0); }
  100% { transform: translateX(-33.33%); }
}
`;

if (typeof document !== 'undefined') {
    const style = document.createElement('style');
    style.textContent = customScrollKeyframes;
    if (!document.head.querySelector('style[data-scroll-animation]')) {
        style.setAttribute('data-scroll-animation', 'true');
        document.head.appendChild(style);
    }
}

export function Skill() {
    const frontendSkills = [
        { icon: FaHtml5, color: "text-orange-500" },
        { icon: FaCss3Alt, color: "text-blue-500" },
        { icon: FaJsSquare, color: "text-yellow-500" },
        { icon: FaBootstrap, color: "text-purple-500" },
        { icon: SiTailwindcss, color: "text-cyan-500" },
        { icon: FaReact, color: "text-blue-500" }
    ];

    const backendSkills = [
        { icon: FaPhp, color: "text-indigo-500" },
        { icon: FaLaravel, color: "text-red-500" },
        { icon: SiNodedotjs, color: "text-green-500" },
        { icon: SiMysql, color: "text-orange-500" },
        { icon: SiPostgresql, color: "text-blue-500" }
    ];

    const versionControlSkills = [
        { icon: FaGit, color: "text-orange-500" },
        { icon: FaGithub, color: "text-gray-800" }
    ];

    const modelingSkills = [
        { icon: SiUml, color: "text-orange-500" },
        { icon: TbRelationManyToMany, color: "text-blue-500" }
    ];

    const otherSkills = [
        { icon: FaPython, color: "text-green-500" },
        { icon: n8nLogo, color: "text-green-500" }
    ];

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

                <div className="space-y-16">
                    {/* Frontend & Backend Row */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Frontend Section */}
                        <div>
                            <h2 className="text-black text-2xl font-bold mb-6 text-center">Frontend Development</h2>
                            <div className="relative overflow-hidden h-24 flex items-center">
                                <div
                                    className="flex space-x-8 animate-[scrollRightToLeft_12s_linear_infinite]"
                                >
                                    {/* Render skills multiple times for seamless loop */}
                                    {[...frontendSkills, ...frontendSkills, ...frontendSkills].map((skill, index) => {
                                        const IconComponent = skill.icon;
                                        return (
                                            <div
                                                key={index}
                                                className="flex-shrink-0 transition-transform hover:scale-110"
                                            >
                                                <IconComponent
                                                    size={60}
                                                    className={skill.color}
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Backend Section */}
                        <div>
                            <h2 className="text-black text-2xl font-bold mb-6 text-center">Backend Development</h2>
                            <div className="relative overflow-hidden h-24 flex items-center">
                                <div
                                    className="flex space-x-8 animate-[scrollRightToLeft_10s_linear_infinite]"
                                >
                                    {/* Render skills multiple times for seamless loop */}
                                    {[...backendSkills, ...backendSkills, ...backendSkills].map((skill, index) => {
                                        const IconComponent = skill.icon;
                                        return (
                                            <div
                                                key={index}
                                                className="flex-shrink-0 transition-transform hover:scale-110"
                                            >
                                                <IconComponent
                                                    size={60}
                                                    className={skill.color}
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Version Control & Modeling Row */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Version Control Section */}
                        <div>
                            <h2 className="text-black text-2xl font-bold mb-6 text-center">Version Control System</h2>
                            <div className="relative h-24 flex items-center justify-center">
                                <div className="flex space-x-8">
                                    {versionControlSkills.map((skill, index) => {
                                        const IconComponent = skill.icon;
                                        return (
                                            <div
                                                key={index}
                                                className="flex-shrink-0 transition-transform hover:scale-110"
                                            >
                                                <IconComponent
                                                    size={60}
                                                    className={skill.color}
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* System Modeling Section */}
                        <div>
                            <h2 className="text-black text-2xl font-bold mb-6 text-center">System Modeling and Database Design</h2>
                            <div className="relative h-24 flex items-center justify-center">
                                <div className="flex space-x-8">
                                    {modelingSkills.map((skill, index) => {
                                        const IconComponent = skill.icon;
                                        return (
                                            <div
                                                key={index}
                                                className="flex-shrink-0 transition-transform hover:scale-110"
                                            >
                                                <IconComponent
                                                    size={60}
                                                    className={skill.color}
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Other Skills Row */}
                    <div className="flex justify-center">
                        <div className="w-full max-w-md">
                            <h2 className="text-black text-2xl font-bold mb-6 text-center">Other Skills</h2>
                            <div className="relative h-24 flex items-center justify-center">
                                <div className="flex space-x-8">
                                    {otherSkills.map((skill, index) => {
                                        if (typeof skill.icon === "string") {
                                            const isSVG = skill.icon.endsWith(".svg");
                                            return (
                                                <div
                                                    key={index}
                                                    className={isSVG ? "w-full h-full" : "w-[60px] h-[60px] flex items-center justify-center"}
                                                >
                                                    <img
                                                        src={skill.icon}
                                                        alt="skill logo"
                                                        className={isSVG ? "w-full h-full object-contain" : "w-full h-full object-contain"}
                                                    />
                                                </div>
                                            );
                                        } else {
                                            const IconComponent = skill.icon;
                                            return (
                                                <IconComponent
                                                    key={index}
                                                    size={60}
                                                    className={skill.color}
                                                />
                                            );
                                        }
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}