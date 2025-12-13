import React from 'react';
import { SERVICES } from '../constants';
import Button from '../components/Button';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="pt-8 pb-20">
      {/* Header */}
      <div className="bg-brand-navy py-16 mb-16 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Servicios</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto px-4">
          Soluciones integrales en metal y arquitectura ligera.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {SERVICES.map((service, index) => {
          const isEven = index % 2 === 0;
          const isTinyHouse = service.id === 'tiny-houses';

          return (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col md:flex-row items-center gap-12 ${
                isEven ? '' : 'md:flex-row-reverse'
              } ${isTinyHouse ? 'bg-brand-navy rounded-3xl p-8 md:p-12 shadow-2xl text-white transform md:scale-105' : ''}`}
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2">
                <div className={`relative rounded-2xl overflow-hidden shadow-lg ${isTinyHouse ? 'border-4 border-brand-gold' : ''}`}>
                  <img 
                    src={service.imageUrl} 
                    alt={service.title} 
                    className="w-full h-[300px] md:h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                  {service.isNew && !isTinyHouse && (
                    <div className="absolute top-4 left-4 bg-brand-gold text-brand-navy px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      Nuevo
                    </div>
                  )}
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full md:w-1/2">
                {isTinyHouse && (
                  <span className="inline-block bg-brand-gold text-brand-navy px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
                    Producto Estrella
                  </span>
                )}
                
                <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isTinyHouse ? 'text-white' : 'text-brand-navy'}`}>
                  {service.title}
                </h2>
                <p className={`text-lg mb-8 leading-relaxed ${isTinyHouse ? 'text-gray-200' : 'text-gray-600'}`}>
                  {service.description}
                </p>

                {isTinyHouse ? (
                  <div className="space-y-6">
                    <ul className="space-y-2">
                      {['Eco-amigables', 'Totalmente móviles', 'Diseño personalizado'].map((item) => (
                        <li key={item} className="flex items-center space-x-2 text-gray-200">
                          <Check className="text-brand-gold w-5 h-5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button to="/proyectos" variant="primary" className="w-full sm:w-auto">
                      Ver Modelos Disponibles
                    </Button>
                  </div>
                ) : (
                   <Button to="/contacto" variant="outline" className={isTinyHouse ? "border-white text-white hover:bg-white hover:text-brand-navy" : ""}>
                    Cotizar {service.title}
                  </Button>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;