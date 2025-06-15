
import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & About */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-flex items-center">
              <span className="text-2xl font-bold text-white">
                Reveal<span className="text-ghana-gold">by</span>Reney
              </span>
            </Link>
            <p className="mt-4 text-gray-300 text-sm">
              Authentic Ghanaian clothing and accessories that celebrate our rich culture and heritage.
              Each piece is handcrafted with love and attention to detail.
            </p>
            <div className="mt-6 flex space-x-4">
              <a 
                href="https://www.instagram.com/revealbyreney?igsh=YjVxM3l0MnR5cTNr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-ghana-gold transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://www.facebook.com/share/1ATMYYySLz/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-ghana-gold transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="mailto:revealbyreneyofficial@gmail.com" 
                className="text-gray-400 hover:text-ghana-gold transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=clothing" className="text-gray-300 hover:text-ghana-gold transition-colors text-sm">
                  Clothing
                </Link>
              </li>
              <li>
                <Link to="/products?category=accessories" className="text-gray-300 hover:text-ghana-gold transition-colors text-sm">
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/products?category=jewelry" className="text-gray-300 hover:text-ghana-gold transition-colors text-sm">
                  Jewelry
                </Link>
              </li>
              <li>
                <Link to="/products?category=bags" className="text-gray-300 hover:text-ghana-gold transition-colors text-sm">
                  Bags
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-ghana-gold transition-colors text-sm">
                  All Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-ghana-gold transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-ghana-gold transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/videos" className="text-gray-300 hover:text-ghana-gold transition-colors text-sm">
                  Videos
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-ghana-gold transition-colors text-sm">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-ghana-gold transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-ghana-gold flex-shrink-0" />
                <span className="text-gray-300 text-sm">Accra, Ghana</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-ghana-gold flex-shrink-0" />
                <span className="text-gray-300 text-sm">+233 244239487</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-ghana-gold flex-shrink-0" />
                <a 
                  href="mailto:revealbyreneyofficial@gmail.com" 
                  className="text-gray-300 hover:text-ghana-gold transition-colors text-sm"
                >
                  revealbyreneyofficial@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} RevealbyReney. All rights reserved. <br className="md:hidden" />
            <span className="hidden md:inline">|</span> Handmade with love in Ghana.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
