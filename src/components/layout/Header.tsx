import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from '../ui/Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [fuelsDropdownOpen, setFuelsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setProductsDropdownOpen(false);
    setFuelsDropdownOpen(false);
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Logo size={40} />
            <span className="ml-2 text-xl font-bold text-primary-800">Nature Biomass</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="nav-link font-medium hover:text-primary-500">
              Home
            </Link>
            <Link to="/about" className="nav-link font-medium hover:text-primary-500">
              About Us
            </Link>
            
            <div className="relative group">
              <button 
                className="flex items-center nav-link font-medium hover:text-primary-500"
                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
              >
                Products & Services
                <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link to="/products?category=steam-boilers" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    Steam Boilers
                  </Link>
                  <Link to="/products?category=thermic-fluid-heaters" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    Thermic Fluid Heaters
                  </Link>
                  <Link to="/products?category=generators" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    Generators
                  </Link>
                  <Link to="/products?category=services" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    Services
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <button 
                className="flex items-center nav-link font-medium hover:text-primary-500"
                onClick={() => setFuelsDropdownOpen(!fuelsDropdownOpen)}
              >
                Biomass Fuels
                <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link to="/biomass-fuels?type=briquettes" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    Biomass Briquettes
                  </Link>
                  <Link to="/biomass-fuels?type=pellets" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    Pellets
                  </Link>
                  <Link to="/biomass-fuels?type=wood-chips" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    Wood Chips
                  </Link>
                  <Link to="/biomass-fuels?type=cns" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    CNS
                  </Link>
                </div>
              </div>
            </div>
            
            <Link to="/team" className="nav-link font-medium hover:text-primary-500">
              Team
            </Link>
            <Link to="/contact" className="nav-link font-medium hover:text-primary-500">
              Contact
            </Link>
          </nav>

          <div className="hidden lg:block">
            <Link to="/contact" className="btn-primary">
              Get Your Roadmap
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex items-center p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-md transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto py-4 px-4">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="py-2 font-medium hover:text-primary-500">
              Home
            </Link>
            <Link to="/about" className="py-2 font-medium hover:text-primary-500">
              About Us
            </Link>
            
            <div>
              <button 
                className="flex items-center justify-between w-full py-2 font-medium hover:text-primary-500"
                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
              >
                Products & Services
                <ChevronDown size={16} className={`transition-transform ${productsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`pl-4 space-y-2 mt-2 ${productsDropdownOpen ? 'block' : 'hidden'}`}>
                <Link to="/products?category=steam-boilers" className="block py-2 hover:text-primary-500">
                  Steam Boilers
                </Link>
                <Link to="/products?category=thermic-fluid-heaters" className="block py-2 hover:text-primary-500">
                  Thermic Fluid Heaters
                </Link>
                <Link to="/products?category=generators" className="block py-2 hover:text-primary-500">
                  Generators
                </Link>
                <Link to="/products?category=services" className="block py-2 hover:text-primary-500">
                  Services
                </Link>
              </div>
            </div>
            
            <div>
              <button 
                className="flex items-center justify-between w-full py-2 font-medium hover:text-primary-500"
                onClick={() => setFuelsDropdownOpen(!fuelsDropdownOpen)}
              >
                Biomass Fuels
                <ChevronDown size={16} className={`transition-transform ${fuelsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`pl-4 space-y-2 mt-2 ${fuelsDropdownOpen ? 'block' : 'hidden'}`}>
                <Link to="/biomass-fuels?type=briquettes" className="block py-2 hover:text-primary-500">
                  Biomass Briquettes
                </Link>
                <Link to="/biomass-fuels?type=pellets" className="block py-2 hover:text-primary-500">
                  Pellets
                </Link>
                <Link to="/biomass-fuels?type=wood-chips" className="block py-2 hover:text-primary-500">
                  Wood Chips
                </Link>
                <Link to="/biomass-fuels?type=cns" className="block py-2 hover:text-primary-500">
                  CNS
                </Link>
              </div>
            </div>
            
            <Link to="/team" className="py-2 font-medium hover:text-primary-500">
              Team
            </Link>
            <Link to="/contact" className="py-2 font-medium hover:text-primary-500">
              Contact
            </Link>
            
            <Link to="/contact" className="btn-primary text-center mt-4">
              Get Your Roadmap
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;