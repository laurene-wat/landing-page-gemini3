import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', onClick, className = '', icon }) => {
  const baseClasses = "px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-[#2B0608] text-[#EBE7E0] hover:scale-105 shadow-lg",
    outline: "border border-[#2B0608]/30 text-[#2B0608] hover:border-[#2B0608] hover:bg-white bg-transparent"
  };

  return (
    <button 
      onClick={onClick} 
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
      {icon && <span>{icon}</span>}
    </button>
  );
};

export default Button;