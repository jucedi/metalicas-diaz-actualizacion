import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';
import Button from './Button';

const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', path: '/' },
  { label: 'Servicios', path: '/servicios' },
  { label: 'Proyectos', path: '/proyectos' },
  { label: 'Nosotros', path: '/nosotros' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-brand-navy/95 backdrop-blur-sm shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl flex justify-between items-center">
        {/* Logo con Imagen */}
<Link to="/" className="flex items-center gap-2 z-50">
  <img 
    src="/logo taller.png" 
    alt="Metálicas Díaz" 
    className="h-10 md:h-12 w-auto object-contain transition-transform hover:scale-105" 
  />
</Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-medium transition-colors hover:text-brand-gold ${
                isScrolled || location.pathname !== '/' ? 'text-brand-softSteel' : 'text-white/90'
              } ${location.pathname === item.path ? 'text-brand-gold' : ''}`}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/contacto">
            <Button variant={isScrolled ? "primary" : "primary"} className="px-6 py-2 text-sm">
              Contactar
            </Button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-brand-navy z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-2xl font-semibold text-white hover:text-brand-gold"
            >
              {item.label}
            </Link>
          ))}
          <Link to="/contacto">
            <Button variant="primary" className="text-lg">
              Contactar Ahora
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;