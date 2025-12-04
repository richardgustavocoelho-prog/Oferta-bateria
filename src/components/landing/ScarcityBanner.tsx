"use client";

import { useState, useEffect } from 'react';

export function ScarcityBanner() {
  const [timeLeft, setTimeLeft] = useState({ hours: '00', minutes: '00', seconds: '00' });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const endOfDay = new Date();
      
      // Set to midnight in Brasília time (UTC-3)
      endOfDay.setUTCHours(3, 0, 0, 0); // 00:00 Brasília time is 03:00 UTC
      
      // If it's already past midnight in Brasília, set for the next day
      if (now.getTime() > endOfDay.getTime()) {
        endOfDay.setUTCDate(endOfDay.getUTCDate() + 1);
      }

      const difference = endOfDay.getTime() - now.getTime();

      let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      let minutes = Math.floor((difference / 1000 / 60) % 60);
      let seconds = Math.floor((difference / 1000) % 60);

      return {
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0'),
      };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full bg-[#FF3B3B] text-white flex items-center justify-center text-center p-2 z-[9999] h-[60px] md:h-[45px]"
    >
      <p className="font-bold text-sm md:text-base">
        Aproveite a oferta especial. Só hoje! ⏳ 
        <span className="inline-block ml-2 tabular-nums">
          {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
        </span>
      </p>
    </div>
  );
}
