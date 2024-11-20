"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CompanySection = () => {
    const logos = [
        { id: 1, src: '/chesco.jpg', alt: 'Logo 1' },
        { id: 2, src: '/colab.jpg', alt: 'Logo 2' },
        { id: 3, src: '/dlr.jpg', alt: 'Logo 3' },
        { id: 4, src: '/ipd.png', alt: 'Logo 4' },
        { id: 5, src: '/ml6.png', alt: 'Logo 5' },
        { id: 6, src: '/lpr.png', alt: 'Logo 6' },
        { id: 7, src: '/ips.jpg', alt: 'Logo 7' },
        { id: 8, src: '/perinet.webp', alt: 'Logo 8' },
        { id: 8, src: '/infinion.png', alt: 'Logo 8' },
    ];

    return (
        <div className="overflow-hidden whitespace-nowrap boxed-container py-8">
            <h2 className='text-3xl font-bold mb-10 text-white'>Exhibiting Companies</h2>
            <div className="flex animate-marquee justify-center">
            <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={10}
                    slidesPerView={6}
                    autoplay={{ delay: 0 }}
                    loop={true}
                    speed={1000}
                    breakpoints={{
                        0: {
                            slidesPerView: 3,
                        },
                        640: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 6,
                        },
                        1024: {
                            slidesPerView: 6,
                        },
                    }}
                >
                {logos.map(logo => (
                    <SwiperSlide key={logo.id}>
                        <div key={logo.id} className="flex items-center justify-center w-42 h-42 mx-2 sm:w-42 sm:h-42">
                            <img src={logo.src} alt={logo.alt} className="object-contain w-full h-full border border-gray-600 p-2 rounded-sm  " />
                        </div>
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
        </div>
    );
};

export default CompanySection;