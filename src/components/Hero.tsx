
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  buttonText?: string;
  buttonLink?: string;
  overlayColor?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  buttonText,
  buttonLink = '/',
  overlayColor = 'from-black/70 to-black/40'
}) => {
  return (
    <div 
      className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-r ${overlayColor}`}></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl animate-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">{subtitle}</p>
        )}
        {buttonText && (
          <Button asChild className="bg-rajasthan-orange hover:bg-rajasthan-yellow hover:text-gray-800 text-white text-lg px-8 py-6">
            <Link to={buttonLink}>{buttonText}</Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Hero;
