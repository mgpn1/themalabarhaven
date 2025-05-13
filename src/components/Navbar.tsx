
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled 
          ? "bg-white bg-opacity-95 shadow-md py-2" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className={cn(
            "text-2xl md:text-3xl font-serif font-semibold transition-colors",
            scrolled ? "text-malabar-800" : "text-white"
          )}>
            The Malabar Haven
          </a>
        </div>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-6">
          {['Home', 'Rooms', 'Amenities', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={cn(
                "font-medium transition-colors hover:text-gold-500",
                scrolled ? "text-gray-700" : "text-white"
              )}
            >
              {item}
            </a>
          ))}
          <a 
            href="#booking" 
            className="px-4 py-2 bg-gold-500 hover:bg-gold-600 text-white rounded-md transition-colors"
          >
            Book Now
          </a>
        </div>
        
        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className={cn(
            "md:hidden p-2 rounded-md", 
            scrolled ? "text-malabar-800" : "text-white"
          )}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            {['Home', 'Rooms', 'Amenities', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-medium text-gray-700 hover:text-gold-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a 
              href="#booking" 
              className="px-4 py-2 bg-gold-500 hover:bg-gold-600 text-white rounded-md transition-colors inline-block text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
