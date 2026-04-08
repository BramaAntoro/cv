import { HiAcademicCap } from "react-icons/hi";

export function Academic() {
    const education = [
        {
            school: "SMK Prakarya Internasional",
            degree: "Software and Game Development",
            period: "2023 - 2026",
            desc: "Focused on software architecture and modern web technologies. Actively building projects and developing technical and non-technical skills. skills."
        },
        {
            school: "SMP Pasundan 01 Bandung",
            degree: "Junior High School",
            period: "2021 - 2024",
            desc: "Completed secondary education. Able to adapt to a distance learning environment and develop an early interest in computer science."
        },
        {
            school: "SD Kemah Indonesia",
            degree: "Elementary School",
            period: "2015 - 2021",
            desc: "Foundational education in a supportive environment, focusing on character building and basic sciences."
        }
    ];

    return (
        <section className="py-24 bg-white" id="academic">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 flex items-center justify-center gap-4">
                        <HiAcademicCap className="text-blue-600" /> Education
                    </h2>
                    <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line for Timeline */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gray-100 transform -translate-x-1/2 hidden md:block"></div>

                    <div className="space-y-12">
                        {education.map((edu, idx) => (
                            <div key={idx} className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                {/* Circle on timeline */}
                                <div className="absolute left-0 md:left-1/2 w-6 h-6 bg-blue-600 border-4 border-white rounded-full transform -translate-x-1/2 z-10 hidden md:block"></div>

                                {/* Content Card */}
                                <div className="w-full md:w-[45%]">
                                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-blue-400 hover:shadow-xl transition-all duration-300">
                                        <span className="text-blue-600 font-bold text-sm bg-blue-50 px-3 py-1 rounded-full mb-4 inline-block">
                                            {edu.period}
                                        </span>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{edu.school}</h3>
                                        <p className="text-gray-700 font-semibold mb-4">{edu.degree}</p>
                                        <p className="text-gray-600 leading-relaxed text-sm">
                                            {edu.desc}
                                        </p>
                                    </div>
                                </div>
                                <div className="hidden md:block w-[10%]"></div>
                                <div className="hidden md:block w-[45%]"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
