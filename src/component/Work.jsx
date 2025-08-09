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

    if (loading) return <p>Loading...</p>;

    if (!channelData) return <p>Channel data could not be loaded.</p>;

    const { snippet, statistics } = channelData;
    const { title, description, thumbnails } = snippet;
    const { subscriberCount, videoCount } = statistics;

    return (
        <div className="container-work mx-auto my-12" id="work">
            <h1 className="text-center text-4xl font-bold mb-6">Work</h1>
            <div className="flex justify-center">
                <div className="w-full">
                    <ul className="timeline space-y-6">
                        {/* YouTube Channel - First (Right) */}
                        <li className="relative flex">
                            <div className="timeline-badge w-40 h-40 bg-cover bg-center rounded-full absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
                                <img src={thumbnails.default.url} alt="YouTube Channel Thumbnail" className="rounded-full w-full h-full object-cover" />
                            </div>
                            <div className="w-1/2 pr-8"></div>
                            <div className="w-1/2 pl-8">
                                <div className="timeline-panel bg-white border border-gray-300 p-6 rounded-lg relative ml-8">
                                    <div className="timeline-heading">
                                        <h3 className="timeline-title text-xl font-semibold">{title}</h3>
                                        <span className="date text-sm text-gray-500 block mb-4">
                                            {subscriberCount} Subscribers • {videoCount} Videos
                                        </span>
                                    </div>
                                    <div className="timeline-body">
                                        <p className="text-sm">{description}</p>
                                    </div>
                                    <div className="mt-4">
                                        <a href="https://www.youtube.com/@Brama2689" target="_blank" rel="noopener noreferrer">
                                            <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 text-sm rounded transition-colors">
                                                See my channel
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>

                        {/* PKL WGS - Second (Left) */}
                        <li className="relative flex">
                            <div className="timeline-badge w-40 h-40 bg-cover bg-center rounded-full absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
                                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                    <img src={wgs} alt="Portrait" className="max-w-full h-auto" />
                                </div>
                            </div>
                            <div className="w-1/2 pr-8">
                                <div className="timeline-panel bg-white border border-gray-300 p-6 rounded-lg relative mr-8 text-right">
                                    <div className="timeline-heading">
                                        <h3 className="timeline-title text-xl font-semibold">Backend Developer Intern</h3>
                                        <span className="date text-sm text-gray-500 block mb-4">
                                            Juli 2024 - Present • WGS
                                        </span>
                                    </div>
                                    <div className="timeline-body">
                                        <p className="text-sm">building a corporate leave management application, developing back-end logic, managing the database, and creating APIs for front-end integration.</p>
                                    </div>
                                    <div className="mt-4">
                                        <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                                            Internship
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2 pl-8"></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};