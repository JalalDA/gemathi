import React, { useState, useEffect } from "react";

const Countdown: React.FC<{ targetDate: string }> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(countdown);
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [targetDate]);

  return (
    <div className="flex space-x-4 text-center">
      {["Hari", "Jam", "Menit", "Detik"].map((label, index) => (
        <div key={label}>
          <p className="text-xl font-bold text-primary text-blue-700 font-DancingScript">
            {Object.values(timeLeft)[index]}
          </p>
          <p className="text-sm text-blue-700 font-DancingScript">{label}</p>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
