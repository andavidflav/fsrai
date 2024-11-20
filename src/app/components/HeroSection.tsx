// "use client"
// import { useEffect, useRef } from 'react';

// const HeroSection = () => {
//     const videoRef = useRef<HTMLVideoElement>(null);

//     useEffect(() => {
//         if (videoRef.current) {
//             videoRef.current.playbackRate = 0.45; // Adjust the playback rate to slow down the video
//         }
//     }, []);

//     return (
//         <div className="relative h-[100vh] text-white flex items-center justify-center overflow-hidden">
//             <video
//                 ref={videoRef}
//                 autoPlay
//                 loop
//                 muted
//                 className="absolute inset-0 w-full h-full object-cover object-[center_right] md:object-[center_right] z-0"
//             >
//                 <source src="/video-ai.mp4" type="video/mp4" />
//                 Your browser does not support the video tag.
//             </video>
//             <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70 md:opacity-50 z-1"></div>
//             <div className="relative z-10 text-center p-6 bg-grey bg-opacity-30 md:bg-opacity-20 rounded-lg">
//                 <h1 className="text-4xl md:text-6xl font-bold mb-4">B-TU Tech Fest</h1>
//                 <p className="text-xl md:text-xl inline-block mb-2 text-white bg-gray-800 bg-opacity-70 rounded-xl py-2 px-5">
//                     Hackathon | Tech-Talk | Gaming
//                 </p>
//                 <h2 className='text-4xl md:text-6xl font-bold mb-4'>12/12/24</h2>
//             </div>
//         </div>
//     );
// }

// export default HeroSection;

"use client";
import { useEffect, useRef } from 'react';
import Link from 'next/link';

const HeroSection = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.45; // Adjust the playback rate to slow down the video
        }
    }, []);

    return (
        <div className="relative h-[100vh] text-white flex items-center justify-center overflow-hidden">
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover object-[center_right] md:object-[center_right] z-0"
            >
                <source src="/video-ai.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70 md:opacity-50 z-1"></div>
            <div className="relative z-10 text-center p-6 bg-grey bg-opacity-30 md:bg-opacity-20 rounded-lg">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">B-TU Tech Fest</h1>
                <div className="flex gap-4 justify-center mb-2">
                    <Link
                        href="/hackathon"
                        className="text-xl text-white bg-gray-800 bg-opacity-70 rounded-xl py-2 px-5 transition-transform duration-300 hover:bg-gray-600 hover:scale-105"
                    >
                        Hackathon
                    </Link>
                    <Link
                        href="/Tecktalk"
                        className="text-xl text-white bg-gray-800 bg-opacity-70 rounded-xl py-2 px-5 transition-transform duration-300 hover:bg-gray-600 hover:scale-105"
                    >
                        Tech-Talk
                    </Link>
                    <Link
                        href="/gaming"
                        className="text-xl text-white bg-gray-800 bg-opacity-70 rounded-xl py-2 px-5 transition-transform duration-300 hover:bg-gray-600 hover:scale-105"
                    >
                        Gaming
                    </Link>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold mb-4">12/12/24</h2>
            </div>
        </div>
    );
};

export default HeroSection;
