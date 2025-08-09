import { useState, useEffect } from "react";
import wgs from '../assets/img/wgs.jpeg';

export const Work = () => {
    const [channelData, setChannelData] = useState(null);
    const [loading, setLoading] = useState(true);
    const API_KEY = "AIzaSyBDRig9BoSmYgs3a-xwDAqeGi4X0yH8QFw";
    const CHANNEL_ID = "UC8oLIwownHoOyyAR5c3XvBg";

    useEffect(() => {
        const fetchChannelData = () => {
            fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${CHANNEL_ID}&key=${API_KEY}`)
                .then(response => response.json())
                .then(data => {
                    if (data.items && data.items.length > 0) {
                        setChannelData(data.items[0]);
                    } else {
                        console.error("Channel not found!");
                    }
                })
                .catch(error => {
                    console.error("Error fetching data from YouTube API:", error);
                })
                .finally(() => {
                    setLoading(false);
                });
        };

        fetchChannelData();
    }, []);

    if (loading) return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
        </div>
    );

    if (!channelData) return (
        <div className="flex items-center justify-center min-h-screen">
            <p className="text-gray-600 text-lg">Channel data could not be loaded.</p>
        </div>
    );

    const { snippet, statistics } = channelData;
    const { title, description, thumbnails } = snippet;
    const { subscriberCount, videoCount } = statistics;

    return (
        <div className="container-work w-full mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8" id="work">
            {/* Header Section */}
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4">
                    Work Experience
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            </div>

            {/* Timeline Container */}
            <div className="max-w-7xl mx-auto">
                <div className="relative">
                    {/* Timeline Line - Hidden on mobile, visible on desktop */}
                    <div className="hidden lg:block absolute left-1/2 transform -translate-x-0.5 w-1 bg-gradient-to-b from-blue-500 to-purple-600 h-full rounded-full"></div>

                    <ul className="timeline space-y-8 sm:space-y-12 lg:space-y-16">
                        {/* YouTube Channel - First Item (LEFT) */}
                        <li className="relative">
                            <div className="flex flex-col lg:flex-row items-center lg:items-start">
                                {/* Timeline Badge */}
                                <div className="timeline-badge relative z-20 mb-6 lg:mb-0 lg:absolute lg:top-8 lg:left-1/2 lg:transform lg:-translate-x-1/2">
                                    <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 rounded-full border-4 border-white shadow-xl overflow-hidden bg-white">
                                        <img
                                            src={thumbnails.default.url}
                                            alt="YouTube Channel Thumbnail"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Content Panel - Left side on desktop */}
                                <div className="w-full lg:w-1/2 lg:pr-8 xl:pr-12 lg:order-1">
                                    <div className="lg:mr-8 xl:mr-12">
                                        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative lg:text-right">
                                            {/* Arrow for desktop */}
                                            <div className="hidden lg:block absolute right-0 top-8 transform translate-x-2 w-4 h-4 bg-white border-r border-b border-gray-200 rotate-45"></div>

                                            <div className="timeline-heading mb-4">
                                                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                                                    {title}
                                                </h3>
                                                <div className="flex flex-wrap gap-2 text-sm sm:text-base text-gray-600 mb-4 justify-center lg:justify-end">
                                                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full font-medium">
                                                        {parseInt(subscriberCount).toLocaleString()} Subscribers
                                                    </span>
                                                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                                                        {parseInt(videoCount).toLocaleString()} Videos
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="timeline-body mb-6">
                                                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                                    {description}
                                                </p>
                                            </div>

                                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-end">
                                                <a
                                                    href="https://www.youtube.com/@Brama2689"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center justify-center bg-red-500 hover:bg-red-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                                                >
                                                    Visit Channel
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Empty space for right side */}
                                <div className="hidden lg:block lg:w-1/2 lg:pl-8 xl:pl-12 lg:order-2"></div>
                            </div>
                        </li>

                        {/* PKL WGS - Second Item (RIGHT) */}
                        <li className="relative">
                            <div className="flex flex-col lg:flex-row items-center lg:items-start">
                                {/* Timeline Badge */}
                                <div className="timeline-badge relative z-20 mb-6 lg:mb-0 lg:absolute lg:top-8 lg:left-1/2 lg:transform lg:-translate-x-1/2">
                                    <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 rounded-full border-4 border-white shadow-xl overflow-hidden">
                                        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                            <img
                                                src={wgs}
                                                alt="WGS Logo"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Empty space for left side */}
                                <div className="hidden lg:block lg:w-1/2 lg:pr-8 xl:pr-12"></div>

                                {/* Content Panel - Right side on desktop */}
                                <div className="w-full lg:w-1/2 lg:pl-8 xl:pl-12">
                                    <div className="lg:ml-8 xl:ml-12">
                                        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                                            {/* Arrow for desktop */}
                                            <div className="hidden lg:block absolute left-0 top-8 transform -translate-x-2 w-4 h-4 bg-white border-l border-b border-gray-200 rotate-45"></div>

                                            <div className="timeline-heading mb-4">
                                                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                                                    Backend Developer Intern
                                                </h3>
                                                <div className="text-sm sm:text-base text-gray-600 mb-4">
                                                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-medium">
                                                        Juli 2024 - Present
                                                    </span>
                                                    <span className="mx-2 text-gray-400">•</span>
                                                    <span className="font-semibold text-gray-800">WGS</span>
                                                </div>
                                            </div>

                                            <div className="timeline-body mb-6">
                                                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                                    Building a corporate leave management application, developing back-end logic,
                                                    managing the database, and creating APIs for front-end integration.
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};