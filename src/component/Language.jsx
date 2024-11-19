export const Language = () => {
    return (
        <section className="language section" id="language">
            <h2 className="section-title text-3xl font-bold text-center my-8">Language</h2>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">

                    {/* Indonesia */}
                    <div className="indonesia">
                        <h1 className="name-language text-xl font-semibold mb-4">Indonesia</h1>
                        <div className="mb-4">
                            <div className="flex justify-between mb-2">
                                <span className="text-sm">85%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="english">
                        <h1 className="name-language text-xl font-semibold mb-4">English</h1>
                        <div className="mb-4">
                            <div className="flex justify-between mb-2">
                                <span className="text-sm">20%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '20%' }}></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}
