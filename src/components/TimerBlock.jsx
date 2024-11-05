"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const TimerBlock = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 23,
    minutes: 59,
    seconds: 35,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              } else {
                clearInterval(timer);
                return prev;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Days', value: timeLeft.days },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="relative h-72 md:h-[18rem] flex items-center">
      <Image 
        src='/images/jbl.png'
        width={1200}
        height={1200}
        alt='Featured product'
        className="object-contain"
      />
      <div className="absolute flex gap-4 bottom-10 left-14 md:scale-100">
        {timeUnits.map((unit) => (
          <div key={unit.label} className="flex flex-col items-center">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center text-black text-xl md:text-2xl font-bold shadow-md">
              {String(unit.value).padStart(2, '0')}
            </div>
            <span className="mt-2 text-white text-xs md:text-sm">{unit.label}</span>
          </div>
        ))}
      </div>
    <div className='absolute flex py-3 px-7 text-sm text-white justify-center items-center gap-4 -bottom-12 left-14 md:scale-100 rounded-sm bg-lime-500'>Buy Now!</div>
    </div>
  );
};

export default TimerBlock;
