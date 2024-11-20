"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const LatestBlogs = () => {
    return (
        <div className="latest-blogs boxed-container">
            <h2 className="text-3xl font-bold mt-12 mb-10 text-white">Featuring Events</h2>
            <div className='flex justify-between'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={10}
                    slidesPerView={3}
                    scrollbar={{ draggable: true }}
                    autoplay={{delay:2000}}
                    loop={true}
                    speed={2000}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    <SwiperSlide>
                    <div className="relative w-full h-[480px]">
                        <img
                            src="./sample.gif"
                            alt="Sample"
                            style={{ objectFit: 'cover', objectPosition: 'top' }}
                            className="w-full h-full"
                        />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="relative w-full h-[480px]">
                        <img
                            src="./schedule.jpg"
                            alt="Sample"
                            style={{ objectFit: 'cover', objectPosition: 'bottom' }}
                            className="w-full h-full"
                        />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="relative w-full h-[480px]">
                        <img
                            src="./digital.jpg"
                            alt="Sample"
                            style={{ objectFit: 'cover', objectPosition: 'bottom' }}
                            className="w-full h-full"
                        />
                        </div>
                    </SwiperSlide>
                </Swiper>
                <style jsx>{`
                    .swiper-pagination {
                        padding-top: 10px;
                    }
                `}</style>
            </div>
        </div>
    );
};

export default LatestBlogs;
