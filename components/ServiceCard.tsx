import React from 'react';

interface ServiceCardProps {
  title: string;
  children: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, children }) => {
  return (
    <div className="bg-cream-dark rounded-xl p-6 shadow-none hover:shadow-md transition-all duration-300 h-full flex flex-col min-h-[300px] border border-transparent hover:border-main/5">
      <h3 className="text-2xl font-normal mb-6 tracking-[-0.02em] text-main">{title}</h3>
      <div className="flex-grow flex items-center justify-center bg-white/30 rounded-lg border border-main/5 overflow-hidden relative">
        {children}
      </div>
    </div>
  );
};

export default ServiceCard;