
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Sun className="h-8 w-8 text-rajasthan-orange" />
            <span className="font-bold text-xl">Rajasthan Solar</span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-rajasthan-orange transition-colors font-medium">
              Home
            </Link>
            <Link to="/schemes" className="text-gray-700 hover:text-rajasthan-orange transition-colors font-medium">
              Schemes
            </Link>
            <Link to="/success-stories" className="text-gray-700 hover:text-rajasthan-orange transition-colors font-medium">
              Success Stories
            </Link>
            <Link to="/challenges" className="text-gray-700 hover:text-rajasthan-orange transition-colors font-medium">
              Challenges
            </Link>
          </div>

          {/* Apply now button */}
          <div className="hidden md:block">
            <Button asChild className="bg-rajasthan-orange hover:bg-rajasthan-terracotta text-white">
              <Link to="/contact">Apply Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-rajasthan-orange focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-rajasthan-orange transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/schemes" 
              className="text-gray-700 hover:text-rajasthan-orange transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Schemes
            </Link>
            <Link 
              to="/success-stories" 
              className="text-gray-700 hover:text-rajasthan-orange transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Success Stories
            </Link>
            <Link 
              to="/challenges" 
              className="text-gray-700 hover:text-rajasthan-orange transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Challenges
            </Link>
            <Button asChild className="bg-rajasthan-orange hover:bg-rajasthan-terracotta text-white w-full">
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Apply Now</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
