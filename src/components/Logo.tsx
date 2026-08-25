import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  variant?: 'navbar' | 'footer' | 'modal' | 'custom';
  sizeClass?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  variant = 'navbar',
  sizeClass,
}) => {
  const [imgError, setImgError] = useState(false);

  const primarySrc = '/images/logo.png';
  const fallbackSrc = '/images/logo.jpg';

  // Specific sizing based on requirement:
  // Navbar: height around 45px (desktop), 35px (mobile) -> h-[35px] w-[35px] md:h-[45px] md:w-[45px]
  // Footer: height around 60px -> h-[60px] w-[60px]
  const getDefaultSizeClass = () => {
    switch (variant) {
      case 'footer':
        return 'w-[60px] h-[60px]';
      case 'modal':
        return 'w-[50px] h-[50px] mx-auto';
      case 'navbar':
      default:
        return 'w-[40px] h-[40px] md:w-[50px] md:h-[50px]';
    }
  };

  const activeSizeClass = sizeClass || getDefaultSizeClass();

  return (
    <div 
      className={`relative inline-flex items-center justify-center rounded-full border border-pink-200/90 bg-[#faf0f4] p-0.5 shadow-sm transition-transform duration-300 hover:scale-105 flex-shrink-0 ${activeSizeClass} ${className}`}
    >
      <img
        src={!imgError ? primarySrc : fallbackSrc}
        onError={() => setImgError(true)}
        alt="The Ahqar Collection Logo"
        className="w-full h-full object-contain rounded-full select-none"
      />
    </div>
  );
};
