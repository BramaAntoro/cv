import { HiTranslate } from "react-icons/hi";

export const Language = () => {
    return (
        <section className="py-24 bg-gray-50" id="language">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 flex items-center justify-center gap-4">
                        <HiTranslate className="text-blue-600" /> Language
                    </h2>
                    <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Language proficiency for professional communication and collaboration.
                    </p>
                </div>

                <div className="max-w-md mx-auto">
                    <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 text-center group">
                        <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                            <HiTranslate className="text-blue-600 text-4xl" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">Indonesia</h3>
                        <p className="text-blue-600 font-bold text-lg mb-6">Native / Professional</p>
                        
                        <div className="h-px w-16 bg-gray-200 mx-auto mb-6"></div>
                        
                        <p className="text-gray-600 leading-relaxed italic">
                            "Bahasa ibu yang digunakan secara aktif dan profesional dalam komunikasi sehari-hari maupun lingkungan kerja."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
