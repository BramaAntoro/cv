import yt from '../assets/img/yt-icon.png';
import { Button } from "flowbite-react";

export const Work = () => {
    return (
        <div className="container-work mx-auto my-12" id='work'>
            <h1 className="text-center text-4xl font-bold mb-6" >
                Work
            </h1>
            <div className="flex justify-center">
                <div className="w-full">
                    <ul className="timeline space-y-6">
                        <li className="relative">
                            <div
                                className="timeline-badge w-40 h-40 bg-cover bg-center rounded-full absolute top-4 left-1/2 transform -translate-x-1/2">
                                <img src={yt} alt="" />
                            </div>
                            <div className="timeline-panel bg-white border border-gray-300 p-6 rounded-lg relative">
                                <div className="timeline-heading">
                                    <h3 className="timeline-title text-xl font-semibold">YouTube</h3>
                                    <span className="date text-sm text-gray-500 block mb-4">28 Juli 2023</span>
                                </div>
                                <div className="timeline-body">
                                    <p className="text-sm">
                                        My YouTube channel is called Brama 2689, this is a place for my creativity, tutorials, and other things.
                                    </p>
                                </div>

                                <a href="https://www.youtube.com/@Brama2689" target="_blank" rel="noopener noreferrer">
                                    <Button.Group>
                                        <Button className='rounded ' color="red">See my channel</Button>
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