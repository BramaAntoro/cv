import { HiAcademicCap } from "react-icons/hi";

export function Academic() {
    const education = [
        {
            school: "SMK Prakarya Internasional",
            degree: "Pengembangan Perangkat Lunak Dan Gim (PPLG)",
            period: "2023 – 2026",
            averageScore: "Average Value: 85.49 / 100",
            points: [
                "Focused on Software and Game Development architecture.",
                "2nd Place Winner at Innoventure UNIKOM 2025 (Website Development).",
                "Received CERTIFICATE of COMPETENCE from PT Walden Global Services.",
                "PKL Certificate from PT Walden Global Services."
            ],
            highlights: "Konsentrasi Keahlian / KK: 95 | PKL: 94.33"
        },
        {
            school: "SMP Pasundan 01 Bandung",
            degree: "Junior High School",
            period: "2021 - 2024",
            points: [
                "Completed secondary education with strong academic standing.",
                "Adapted to distance learning environments effectively.",
                "Developed early interest in computer science and technology."
            ]
        },
        {
            school: "SD Kemah Indonesia",
            degree: "Elementary School",
            period: "2015 - 2021",
            points: [
                "Foundational education focusing on character building.",
                "Active participation in basic science and literacy programs."
            ]
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
                                        <div className="flex flex-wrap gap-2 mb-2">
                                            <p className="text-gray-700 font-semibold">{edu.degree}</p>
                                            {edu.averageScore && (
                                                <span className="text-gray-400 font-bold px-2 border-l border-gray-300 italic">
                                                    {edu.averageScore}
                                                </span>
                                            )}
                                        </div>
                                        <ul className="list-disc list-outside ml-4 space-y-2 mb-4">
                                            {edu.points.map((point, pIdx) => (
                                                <li key={pIdx} className="text-gray-600 leading-relaxed text-sm">
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                        {edu.highlights && (
                                            <div className="pt-3 border-t border-gray-200">
                                                <p className="text-[11px] font-black text-blue-600 uppercase tracking-widest">
                                                    Selected Focus Grades:
                                                </p>
                                                <p className="text-xs font-bold text-gray-500">
                                                    {edu.highlights}
                                                </p>
                                            </div>
                                        )}
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
