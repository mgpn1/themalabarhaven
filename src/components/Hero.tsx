
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div 
      id="home" 
      className="relative h-screen min-h-[600px] bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: 'url("https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1920&h=1080")'
      }}
    >
      <div className="absolute inset-0 hero-gradient"></div>
      
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4 md:px-6">
        <div className="animate-fade-in max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Experience Luxury In The Misty Hills
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl mx-auto">
            Nestled in the breathtaking landscapes of Munnar, 
            The Malabar Haven offers an unforgettable escape into luxury and serenity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-6 rounded-md text-lg">
              <a href="#booking">Book Your Stay</a>
            </Button>
            <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 rounded-md text-lg">
              <a href="#about">Discover More</a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <div className="flex gap-4">
          <span className="text-white text-sm">Scroll Down</span>
          <svg 
            className="animate-bounce w-6 h-6 text-white" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
