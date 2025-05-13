
import { useRef, useState, useEffect } from "react";

const About = () => {
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
    <section id="about" className="py-20 bg-malabar-50" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1000&h=1200" 
                alt="The Malabar Haven" 
                className="rounded-lg shadow-lg object-cover w-full h-[500px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                <p className="text-gold-800 font-serif italic">
                  "A sanctuary of luxury amidst Munnar's breathtaking landscapes, where every moment becomes a cherished memory."
                </p>
              </div>
            </div>
          </div>
          
          <div className={`animate-on-scroll ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-malabar-800 mb-6">
              Our Story & Location
            </h2>
            
            <p className="text-muted-foreground mb-4">
              Nestled in the heart of Munnar's lush tea plantations, The Malabar Haven stands as a testament to luxury, serenity, and the natural beauty of Kerala. Established in 2005, our resort has welcomed guests from across the world, offering them an authentic experience of Kerala's rich cultural heritage combined with world-class hospitality.
            </p>
            
            <p className="text-muted-foreground mb-6">
              Our carefully chosen location offers breathtaking views of the Western Ghats, surrounded by misty mountains and verdant tea gardens. Just a short drive from Munnar town, we provide the perfect balance of seclusion and accessibility.
            </p>
            
            <div className="mt-8">
              <h3 className="text-xl font-serif font-semibold text-malabar-800 mb-4">Find Us Here</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-malabar-700 mb-2">Address:</h4>
                  <p className="text-muted-foreground">
                    The Malabar Haven<br />
                    Pothamedu View Point Road<br />
                    Munnar, Kerala 685612<br />
                    India
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-malabar-700 mb-2">Contact:</h4>
                  <p className="text-muted-foreground">
                    Phone: +91 94973 82651<br />
                    Email: info@malabarhaven.com<br />
                    Reception: 24/7
                  </p>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-medium text-malabar-700 mb-2">Distances:</h4>
                <ul className="text-muted-foreground">
                  <li>• Munnar Town Center: 4 km</li>
                  <li>• Cochin International Airport: 110 km</li>
                  <li>• Eravikulam National Park: 12 km</li>
                  <li>• Tea Museum: 5 km</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
