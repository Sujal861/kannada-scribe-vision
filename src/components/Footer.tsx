
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-4">Kannada Script</h3>
            <p className="text-gray-200 mb-4">
              Deep learning powered Kannada handwritten text recognition for preserving and digitizing cultural heritage.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-200 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-200 hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link to="/demo" className="text-gray-200 hover:text-white transition-colors">Demo</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-200 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact & Social */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" aria-label="Facebook" className="hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="Youtube" className="hover:text-accent transition-colors">
                <Youtube size={20} />
              </a>
              <a href="mailto:info@kannadascript.ai" aria-label="Email" className="hover:text-accent transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-300">
            © {currentYear} Kannada Script. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
