import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants'; // Aquí importamos los datos reales

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Columna 1: Información de la Empresa */}
          <div>
            <h3 className="text-2xl font-bold text-brand-gold mb-4">Metálicas Díaz</h3>
            <p className="text-gray-400 leading-relaxed">
              Ingeniería de precisión y diseño industrial. Especialistas en metalistería, aluminio arquitectónico y construcción de Tiny Houses.
            </p>
          </div>

          {/* Columna 2: Navegación Rápida */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-brand-gold transition-colors">Inicio</Link></li>
              <li><Link to="/servicios" className="hover:text-brand-gold transition-colors">Servicios</Link></li>
              <li><Link to="/proyectos" className="hover:text-brand-gold transition-colors">Proyectos</Link></li>
              <li><Link to="/nosotros" className="hover:text-brand-gold transition-colors">Nosotros</Link></li>
              <li><Link to="/contacto" className="hover:text-brand-gold transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Columna 3: Información de Contacto Dinámica */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Contáctanos</h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start space-x-3">
                <MapPin className="text-brand-gold w-5 h-5 flex-shrink-0 mt-1" />
                {/* Llama a la dirección de Girón */}
                <span>{CONTACT_INFO.address}</span> 
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-brand-gold w-5 h-5 flex-shrink-0" />
                {/* Llama al celular 315... */}
                <span>{CONTACT_INFO.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-brand-gold w-5 h-5 flex-shrink-0" />
                {/* Llama al correo de Gmail */}
                <span>{CONTACT_INFO.email}</span>
              </div>
            </div>
          </div>

        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm flex flex-col items-center">
          <p>&copy; {new Date().getFullYear()} Metálicas Díaz. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;