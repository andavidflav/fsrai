"use client";
import { useState, useEffect } from 'react';

const Newsletter: React.FC = () => {
  // Set target date to November 28th, 5:00 PM of the current year
  const targetDate = new Date(new Date().getFullYear(), 10, 28, 17, 0, 0).toISOString();

  const calculateTimeLeft = () => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <>
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-green-300 text-center mt-9">
        Registration open soon!
      </h2>
      <div className="flex justify-center items-center my-10">
        <div className="flex flex-wrap gap-4 text-2xl sm:text-4xl md:text-5xl font-mono text-gray-800 bg-gray-300 p-4 md:p-6 rounded-lg shadow-md w-full max-w-lg justify-center">
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-5xl md:text-6xl font-bold">{String(timeLeft.days).padStart(2, '0')}</span>
            <span className="text-xs sm:text-sm">Days</span>
          </div>
          <span className="text-4xl sm:text-5xl md:text-6xl font-bold">:</span>
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-5xl md:text-6xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</span>
            <span className="text-xs sm:text-sm">Hours</span>
          </div>
          <span className="text-3xl sm:text-5xl md:text-6xl font-bold">:</span>
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-5xl md:text-6xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</span>
            <span className="text-xs sm:text-sm">Minutes</span>
          </div>
          <span className="text-3xl sm:text-5xl md:text-6xl font-bold">:</span>
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-5xl md:text-6xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</span>
            <span className="text-xs sm:text-sm">Seconds</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
