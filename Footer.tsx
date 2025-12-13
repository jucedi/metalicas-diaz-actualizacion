import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin, Hammer } from 'lucide-react';
import { CONTACT_INFO, NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
             <div className="flex items-center space-x-2">
              <div className="bg-brand-gold p-2 rounded-lg">
                <Hammer className="text-brand-navy w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg tracking-wider leading-none">METÁLICAS</span>
                <span className="text-brand-gold font-bold text-base tracking-widest leading-none">DÍAZ</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Más de 20 años transformando metal y aluminio en soluciones duraderas. Ahora innovando con arquitectura modular y Tiny Houses.
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-gold">Navegación</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-gold">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-gray-300 hover:text-white transition-colors text-sm">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-gold shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-300 hover:text-white transition-colors text-sm">
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-gold">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-brand-gold hover:text-brand-navy transition-all duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-brand-gold hover:text-brand-navy transition-all duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Metálicas Díaz. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;