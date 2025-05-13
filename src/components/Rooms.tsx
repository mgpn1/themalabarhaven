
import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Room {
  id: number;
  name: string;
  description: string;
  price: string;
  amenities: string[];
  image: string;
}

const rooms: Room[] = [
  {
    id: 1,
    name: "Mountain View Suite",
    description: "Our spacious Mountain View Suites offer breathtaking panoramic views of the Western Ghats. Each suite features a king-size bed, private balcony, and elegant furnishings inspired by Kerala's rich heritage.",
    price: "₹18,500",
    amenities: ["Private balcony", "Mountain views", "Rainfall shower", "Minibar", "65\" Smart TV"],
    image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?auto=format&fit=crop&q=80&w=1920&h=1080"
  },
  {
    id: 2,
    name: "Tea Garden Villa",
    description: "Nestled amidst verdant tea plantations, our exclusive Tea Garden Villas offer unparalleled privacy and luxury. Featuring a separate living area, private garden, and outdoor jacuzzi overlooking the misty slopes.",
    price: "₹25,000",
    amenities: ["Private garden", "Outdoor jacuzzi", "King bed", "Espresso machine", "Butler service"],
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&w=1920&h=1080"
  },
  {
    id: 3,
    name: "Luxury Family Room",
    description: "Perfect for families, these spacious rooms feature two queen beds, ample living space, and modern amenities. Enjoy the serene atmosphere with views of our manicured gardens and distant mountains.",
    price: "₹22,000",
    amenities: ["Two queen beds", "Garden view", "Large bathroom", "Kids amenities", "Entertainment system"],
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1920&h=1080"
  },
  {
    id: 4,
    name: "Presidential Cottage",
    description: "Our most exclusive accommodation, the Presidential Cottage offers the ultimate luxury experience. This standalone cottage features two bedrooms, a private infinity pool, dedicated staff, and breathtaking views.",
    price: "₹45,000",
    amenities: ["Private pool", "Two bedrooms", "Dedicated staff", "Private dining", "Premium bar"],
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=1920&h=1080"
  }
];

const Rooms = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === rooms.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? rooms.length - 1 : prevIndex - 1
    );
  };
  
  // For scroll into view on mobile
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.scrollWidth / rooms.length * currentIndex;
      container.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);
  
  // Animation on scroll
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="rooms" className="py-20 bg-muted" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className={`text-center mb-12 animate-on-scroll ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-malabar-800 mb-4">
            Luxurious Accommodations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Indulge in our exquisitely designed rooms and suites, each offering a perfect blend of 
            traditional Kerala elegance and modern luxury.
          </p>
        </div>

        {/* Desktop view with navigation controls */}
        <div className="hidden md:block relative">
          <div className="flex gap-6 items-stretch">
            <Card className="w-2/3 overflow-hidden">
              <div 
                className="h-[400px] bg-cover bg-center"
                style={{ backgroundImage: `url(${rooms[currentIndex].image})` }}
              ></div>
            </Card>
            
            <div className="w-1/3 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-serif font-semibold text-malabar-800 mb-2">
                  {rooms[currentIndex].name}
                </h3>
                <p className="text-muted-foreground mb-4">{rooms[currentIndex].description}</p>
                
                <div className="mb-6">
                  <p className="font-medium text-lg mb-2">Room Amenities:</p>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {rooms[currentIndex].amenities.map((amenity, i) => (
                      <li key={i} className="flex items-center">
                        <span className="inline-block w-2 h-2 bg-gold-500 rounded-full mr-2"></span>
                        {amenity}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center mb-6">
                  <span className="text-xl font-semibold text-malabar-800">{rooms[currentIndex].price}</span>
                  <span className="text-sm text-muted-foreground ml-1">per night</span>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Button asChild className="flex-1 bg-gold-500 hover:bg-gold-600 text-white">
                  <a href="#booking">Book Now</a>
                </Button>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevSlide}
                    className="border-malabar-800 text-malabar-800"
                  >
                    <ArrowLeft size={18} />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextSlide}
                    className="border-malabar-800 text-malabar-800"
                  >
                    <ArrowRight size={18} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 flex justify-center gap-2">
            {rooms.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index ? "bg-gold-500" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Mobile view with horizontal scroll */}
        <div 
          ref={scrollContainerRef}
          className="md:hidden flex overflow-x-auto gap-4 pb-6 snap-x snap-mandatory hide-scrollbar"
        >
          {rooms.map((room, index) => (
            <div 
              key={room.id} 
              className="min-w-[300px] max-w-[90%] flex-shrink-0 snap-center"
            >
              <Card className="h-full">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${room.image})` }}
                ></div>
                <div className="p-4">
                  <h3 className="text-xl font-serif font-semibold text-malabar-800 mb-2">
                    {room.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-3">{room.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold text-malabar-800">{room.price}</span>
                    <span className="text-xs text-muted-foreground">per night</span>
                  </div>
                  
                  <Button asChild className="w-full bg-gold-500 hover:bg-gold-600 text-white">
                    <a href="#booking">Book This Room</a>
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
