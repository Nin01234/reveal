import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X, Search, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = localStorage.getItem('cart');
      if (cart) {
        const items = JSON.parse(cart);
        const count = items.reduce((total: number, item: CartItemType) => total + item.quantity, 0);
        setCartCount(count);
      } else {
        setCartCount(0);
      }
    };

    updateCartCount();
    window.addEventListener('storage', updateCartCount);
    
    // Check cart count every second for updates
    const interval = setInterval(updateCartCount, 1000);

    return () => {
      window.removeEventListener('storage', updateCartCount);
      clearInterval(interval);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/products?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-ghana-black reveal-logo">
                Reveal<span className="text-ghana-gold">by</span>Reney
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-ghana-gold font-medium transition-colors">
                Home
              </Link>
              <Link to="/products" className="text-gray-700 hover:text-ghana-gold font-medium transition-colors">
                Shop
              </Link>
              <Link to="/videos" className="text-gray-700 hover:text-ghana-gold font-medium transition-colors">
                Videos
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-ghana-gold font-medium transition-colors">
                Our Story
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-ghana-gold font-medium transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Search, Social and Cart */}
          <div className="hidden md:flex items-center space-x-6">
            <form onSubmit={handleSearchSubmit} className="relative">
              <Input
                type="search"
                placeholder="Search products..."
                className="w-40 lg:w-64 pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </form>
            
            <div className="flex items-center space-x-4">
              <a href="https://www.instagram.com/revealbyreney?igsh=YjVxM3l0MnR5cTNr" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5 text-gray-500 hover:text-reveal-purple transition-colors" />
              </a>
              <a href="https://www.facebook.com/share/1ATMYYySLz/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5 text-gray-500 hover:text-reveal-blue transition-colors" />
              </a>
              <Link to="/cart" className="relative">
                <ShoppingCart className="h-6 w-6 text-gray-500 hover:text-ghana-gold transition-colors" />
                <span className="absolute -top-2 -right-2 bg-reveal-red text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-500" />
              <span className="absolute -top-2 -right-2 bg-reveal-red text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            </Link>
            <button onClick={toggleMenu} className="text-gray-500 hover:text-ghana-gold">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-ghana-gold"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-ghana-gold"
              onClick={toggleMenu}
            >
              Shop
            </Link>
            <Link 
              to="/videos" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-ghana-gold"
              onClick={toggleMenu}
            >
              Videos
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-ghana-gold"
              onClick={toggleMenu}
            >
              Our Story
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-ghana-gold"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
          
          <div className="pt-4 pb-3 border-t border-gray-200">
            <form onSubmit={handleSearchSubmit} className="px-4 mb-4">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </form>
            
            <div className="flex justify-center space-x-6 px-4">
              <a href="https://www.instagram.com/revealbyreney?igsh=YjVxM3l0MnR5cTNr" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-6 w-6 text-gray-500 hover:text-reveal-purple" />
              </a>
              <a href="https://www.facebook.com/share/1ATMYYySLz/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-6 w-6 text-gray-500 hover:text-reveal-blue" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
