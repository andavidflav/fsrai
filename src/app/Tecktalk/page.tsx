'use client';

import { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import { AiOutlineGlobal } from 'react-icons/ai';
import { CiMail } from 'react-icons/ci';
import { FaInstagram } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Tecktalks: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slide images
  const slides = [
    { src: '/2.jpg', alt: 'Slide 1' },
    { src: '/4.jpg', alt: 'Slide 2' },
    { src: '/3.jpg', alt: 'Slide 3' }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const logos = [
    { id: 1, src: '/l1.png', alt: 'Logo 1' },
    { id: 2, src: '/l2.png', alt: 'Logo 2' },
    { id: 3, src: '/l3.png', alt: 'Logo 3' },
    { id: 4, src: '/l4.png', alt: 'Logo 4' },
    { id: 5, src: '/l5.png', alt: 'Logo 5' },
    { id: 6, src: '/l6.png', alt: 'Logo 6' },
    { id: 7, src: '/l1.png', alt: 'Logo 1' },
    { id: 8, src: '/l2.png', alt: 'Logo 2' },
    { id: 9, src: '/l3.png', alt: 'Logo 3' },
    { id: 10, src: '/l4.png', alt: 'Logo 4' },
    { id: 11, src: '/l5.png', alt: 'Logo 5' },
    { id: 12, src: '/l6.png', alt: 'Logo 6' }
  ];

  return (
    <div className="new-page">
      {/* Banner Section */}
      <section className="relative h-[100vh] text-white flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/1.jpg"
            alt="Tech Talks Banner"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="w-full h-full"
          />
        </div>

        {/* Scroll Down Notification */}
        <div className="absolute bottom-10 left-5 flex items-center justify-center gap-3 text-white">
          <span className="text-2xl font-semibold">Scroll Down</span>
          <svg
            className="w-10 h-10 animate-bounce"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l7 7 7-7"
            />
          </svg>
        </div>
      </section>

      {/* Slider Section */}
      <section className="slider bg-gray-400 py-10">
        <div className="overflow-hidden whitespace-nowrap boxed-container py-8">
          <h2 className='text-3xl font-bold mb-10 text-white'>Exhibiting Companies (Mockup logos)</h2>
          <div className="flex animate-marquee justify-center">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={10}
              slidesPerView={3}
              autoplay={{ delay: 0 }}
              loop={true}
              speed={1000}
              breakpoints={{
                0: {
                  slidesPerView: 2, // 2 slides for small screens
                },
                640: {
                  slidesPerView: 3, // 3 slides for tablets
                },
                768: {
                  slidesPerView: 4, // 4 slides for medium screens and up
                },
                1024: {
                  slidesPerView: 6, // 6 slides for large screens
                },
              }}
            >
              {logos.map(logo => (
                <SwiperSlide key={logo.id}>
                  <div className="flex items-center justify-center w-32 h-32 mx-2">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="object-contain w-full h-full border border-gray-600 p-2 rounded-sm"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="relative h-[100vh] text-white flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/5.jpg"
            alt="Tech Talks Banner"
            layout="fill"
            objectFit="fill"
            objectPosition="center"
            className="w-full h-full"
          />
        </div>
      </section>

      {/* Image Slider Section */}
      <section className="slider bg-gray-100 py-10 relative">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(/giphy.gif)', // Update this with your GIF path
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        <h2 className="text-3xl font-bold mb-4 text-cyan-600 text-center ">Highlighted Teck Talks From Industry experts of Brandenburgische State</h2>

        <div className="relative mx-auto pt-10 w-full sm:w-[75%] h-[500px] overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`slide flex-shrink-0 w-full 
                  ${index === currentSlide ? 'opacity-100' : 'opacity-50'} 
                  ${index === currentSlide ? '' : 'filter blur-sm'}`}
              >
                <div className="relative w-full h-[500px] overflow-hidden">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg transition-all ease-in-out duration-500"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={() => setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 text-white bg-black bg-opacity-50 rounded-full"
          >
            &#8592;
          </button>
          <button
            onClick={() => setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 text-white bg-black bg-opacity-50 rounded-full"
          >
            &#8594;
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="slider bg-gray-800 py-10">
        <div className="boxed-container bg-gray-800">
          <div className="about-section mt-5 pb-10">
            <h2 className="text-3xl font-bold mb-4 text-white text-center">Contact Us</h2>
            <div className="flex flex-wrap justify-center gap-10">
              <div className="contact-box flex justify-center">
                <AiOutlineGlobal size={60} color="white" />
                <h4 className="font-semibold text-white mt-3">Visit Our Website</h4>
                <p className="text-white">example.com</p>
              </div>
              <div className="contact-box flex justify-center">
                <CiMail size={60} color="white" />
                <h4 className="font-semibold text-white mt-3">Mail Us</h4>
                <p className="text-white">info@example.com</p>
              </div>
              <div className="contact-box flex justify-center">
                <FaInstagram size={60} color="white" />
                <h4 className="font-semibold text-white mt-3">Follow Us</h4>
                <p className="text-white">Instagram Handle</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tecktalks;
