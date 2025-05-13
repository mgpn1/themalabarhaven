
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-malabar-800 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-4">The Malabar Haven</h3>
            <p className="text-malabar-100 mb-6">
              Luxury redefined in the heart of Munnar's tea country. Experience the perfect blend of nature, 
              culture, and unparalleled hospitality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gold-400 transition-colors">
                <Facebook />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="hover:text-gold-400 transition-colors">
                <Instagram />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex">
                <Phone className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>+91 94973 82651</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>info@malabarhaven.com</span>
              </li>
              <li className="flex">
                <MapPin className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>Pothamedu View Point Road, Munnar, Kerala 685612, India</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Rooms', 'Amenities', 'Gallery', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-gold-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Newsletter</h4>
            <p className="text-malabar-100 mb-4">
              Subscribe to our newsletter for special deals and updates.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-900"
              />
              <button 
                type="submit" 
                className="bg-gold-500 hover:bg-gold-600 px-4 py-2 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-malabar-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-malabar-200 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} The Malabar Haven. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-malabar-200">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <span>|</span>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
