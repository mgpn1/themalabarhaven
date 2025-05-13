
import { useRef, useState, useEffect } from "react";
import { Wifi, Coffee, Utensils, Dumbbell, Waves, Car, Users, MapPin } from "lucide-react";

interface Amenity {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const amenities: Amenity[] = [
  {
    icon: Coffee,
    title: "Fine Dining",
    description: "Experience authentic Kerala cuisine and international dishes at our award-winning restaurant."
  },
  {
    icon: Waves,
    title: "Infinity Pool",
    description: "Relax in our stunning infinity pool with panoramic views of the tea plantations."
  },
  {
    icon: Dumbbell,
    title: "Fitness Center",
    description: "Stay active in our state-of-the-art fitness center with modern equipment."
  },
  {
    icon: Utensils,
    title: "Ayurvedic Spa",
    description: "Rejuvenate your body and mind with traditional Kerala Ayurvedic treatments."
  },
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description: "Stay connected with complimentary high-speed WiFi throughout the property."
  },
  {
    icon: Car,
    title: "Airport Transfer",
    description: "Enjoy hassle-free travel with our luxury airport transfer service."
  },
  {
    icon: Users,
    title: "Cultural Activities",
    description: "Immerse yourself in local culture with our curated experiences and activities."
  },
  {
    icon: MapPin,
    title: "Guided Tours",
    description: "Explore the beauty of Munnar with our expert local guides."
  }
];

const Amenities = () => {
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
    <section id="amenities" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className={`text-center mb-12 animate-on-scroll ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-malabar-800 mb-4">
            Exceptional Amenities & Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Indulge in an array of premium amenities and personalized services designed to enhance your stay.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <div 
              key={index} 
              className={`bg-muted p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:transform hover:-translate-y-1 animate-on-scroll ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-malabar-100 p-3 rounded-full mr-4">
                  <amenity.icon className="h-6 w-6 text-malabar-600" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-malabar-800">
                  {amenity.title}
                </h3>
              </div>
              <p className="text-muted-foreground">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
