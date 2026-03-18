import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-brand-softSteel pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="text-2xl font-bold tracking-tighter text-white">
              Metálicas<span className="text-brand-gold">Díaz</span>
            </div>
            <p className="text-sm leading-relaxed">
              Transformando el metal en soluciones arquitectónicas duraderas y estéticas. Construimos el futuro con solidez.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="hover:text-brand-gold transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-brand-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-brand-gold transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-brand-gold transition-colors">Inicio</Link></li>
              <li><Link to="/servicios" className="hover:text-brand-gold transition-colors">Servicios</Link></li>
              <li><Link to="/proyectos" className="hover:text-brand-gold transition-colors">Proyectos</Link></li>
              <li><Link to="/nosotros" className="hover:text-brand-gold transition-colors">Nosotros</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Servicios</h3>
            <ul className="space-y-3">
              <li><Link to="/servicios" className="hover:text-brand-gold transition-colors">Estructuras Metálicas</Link></li>
              <li><Link to="/servicios" className="hover:text-brand-gold transition-colors">Carpintería de Aluminio</Link></li>
              <li><Link to="/servicios" className="hover:text-brand-gold transition-colors">Tiny Houses</Link></li>
              <li><Link to="/servicios" className="hover:text-brand-gold transition-colors">Corte y Doblez</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-gold shrink-0 mt-1" size={18} />
                <span>Polígono Industrial Las Lomas, Nave 42, Madrid</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-gold shrink-0" size={18} />
                <span>+34 912 345 678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-gold shrink-0" size={18} />
                <span>info@metalicasdiaz.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Metálicas Díaz. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;