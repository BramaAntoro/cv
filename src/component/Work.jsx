import React, { useState, useEffect } from "react";
import { Button } from "flowbite-react";
import $ from 'jquery';  

export const Work = () => {
    const [channelData, setChannelData] = useState(null);
    const [loading, setLoading] = useState(true);
    const API_KEY = "AIzaSyBDRig9BoSmYgs3a-xwDAqeGi4X0yH8QFw"; 
    const CHANNEL_ID = "UC8oLIwownHoOyyAR5c3XvBg"; 

    useEffect(() => {
        const fetchChannelData = () => {
            $.ajax({
                url: `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${CHANNEL_ID}&key=${API_KEY}`,
                method: 'GET',
                success: (data) => {
                    if (data.items.length > 0) {
                        setChannelData(data.items[0]);
                    } else {
                        console.error("Channel not found!");
                    }
                },
                error: (error) => {
                    console.error("Error fetching data from YouTube API:", error);
                },
                complete: () => {
                    setLoading(false);
                }
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
                        <li className="relative">
                            <div
                                className="timeline-badge w-40 h-40 bg-cover bg-center rounded-full absolute top-4 left-1/2 transform -translate-x-1/2">
                                <img src={thumbnails.default.url} alt="YouTube Channel Thumbnail" className="rounded-full w-full h-full"
                                />
                            </div>
                            <div className="timeline-panel bg-white border border-gray-300 p-6 rounded-lg relative">
                                <div className="timeline-heading">
                                    <h3 className="timeline-title text-xl font-semibold">{title}</h3>
                                    <span className="date text-sm text-gray-500 block mb-4">
                                        {subscriberCount} Subscribers • {videoCount} Videos
                                    </span>
                                </div>
                                <div className="timeline-body">
                                    <p className="text-sm">{description}</p>
                                </div>
                                <a href="https://www.youtube.com/@Brama2689" target="_blank" rel="noopener noreferrer">
                                    <Button.Group>
                                        <Button className="rounded" color="red">
                                            See my channel
                                        </Button>
                                    </Button.Group>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
