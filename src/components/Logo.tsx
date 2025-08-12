import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {/* Logo Symbol */}
      <div className="relative">
        <img 
          src="https://casohrqgydyyvcclqwqm.supabase.co/storage/v1/object/public/images/egechat_logo.jpg" 
          alt="EGEChat Logo" 
          className="w-12 h-12 md:w-16 md:h-16"
        />
      </div>
      
      {/* Platform Name */}
      <div className="text-2xl md:text-3xl font-poppins font-semibold">
        <span className="text-white">EGE</span>
        <span className="gradient-text">Chat</span>
      </div>
    </div>
  );
};

export default Logo;
