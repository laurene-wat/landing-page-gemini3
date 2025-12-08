import React from 'react';

const Marquee: React.FC = () => {
  const text = "LAURENE WATRELOT • CONSULTANTE CS OPS • ";
  // Create an array to repeat the text enough times to fill the screen
  const items = Array(20).fill(text);

  return (
    <div className="w-full bg-cream border-b border-main/10 overflow-hidden py-3 absolute top-0 z-10">
      <div className="whitespace-nowrap animate-marquee inline-block">
        {items.map((item, index) => (
          <span key={index} className="text-[10px] tracking-[0.01em] font-medium font-mono text-main/60 uppercase mx-2">
            {item}
          </span>
        ))}
      </div>
      <div className="whitespace-nowrap animate-marquee inline-block absolute top-3">
        {items.map((item, index) => (
          <span key={`dup-${index}`} className="text-[10px] tracking-[0.01em] font-medium font-mono text-main/60 uppercase mx-2">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;