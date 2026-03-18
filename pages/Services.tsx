import React from 'react';
import { motion } from 'framer-motion';
import { Service } from '../types';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const SERVICES: Service[] = [
  {
    id: 1,
    title: "Estructuras Metálicas Pesadas",
    description: "Diseño, fabricación y montaje de naves industriales, vigas de gran porte y refuerzos estructurales. Utilizamos acero certificado de alta resistencia para garantizar la seguridad y durabilidad de sus edificaciones.",
    image: "https://picsum.photos/800/600?random=10"
  },
  {
    id: 2,
    title: "Carpintería de Aluminio de Alta Gama",
    description: "Ventanas, puertas y cerramientos con rotura de puente térmico. Acabados minimalistas que maximizan la luz natural sin sacrificar el aislamiento térmico y acústico.",
    image: "https://picsum.photos/800/600?random=11"
  },
  {
    id: 3,
    title: "Tiny Houses Modulares",
    description: "Viviendas compactas, transportables y autosuficientes. Estructura de acero ligero (Steel Frame), aislamiento premium y diseño inteligente para una vida minimalista sin renunciar al confort. Llave en mano en 60 días.",
    image: "https://picsum.photos/800/600?random=12",
    isTinyHouse: true
  },
  {
    id: 4,
    title: "Corte y Plegado CNC",
    description: "Servicio de transformación de chapa con maquinaria de control numérico. Precisión absoluta para piezas industriales, fachadas ventiladas y elementos decorativos personalizados.",
    image: "https://picsum.photos/800/600?random=13"
  }
];

const Services: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-brand-ice min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">Nuestras Soluciones</h1>
          <p className="text-brand-steel max-w-2xl mx-auto">
            Desde grandes estructuras industriales hasta detalles arquitectónicos finos.
          </p>
        </div>

        <div className="space-y-20">
          {SERVICES.map((service, index) => {
            const isEven = index % 2 === 0;
            
            if (service.isTinyHouse) {
              return (
                <motion.div 
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-brand-navy rounded-3xl overflow-hidden shadow-2xl border-2 border-brand-gold relative"
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
                      <div className="inline-block bg-brand-gold text-brand-navy font-bold px-4 py-1 rounded-full text-xs w-max mb-4 uppercase tracking-wider">
                        Producto Estrella
                      </div>
                      <h2 className="text-3xl font-bold text-white mb-6">{service.title}</h2>
                      <p className="text-brand-softSteel mb-8 text-lg leading-relaxed">
                        {service.description}
                      </p>
                      <div>
                         <Link to="/contacto">
                          <Button variant="primary">Configurar mi Tiny House</Button>
                        </Link>
                      </div>
                    </div>
                    <div className="h-64 md:h-auto order-1 md:order-2">
                       <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid md:grid-cols-2 gap-8 md:gap-16 items-center"
              >
                <div className={`${isEven ? 'order-1' : 'order-1 md:order-2'}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                    <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                
                <div className={`${isEven ? 'order-2' : 'order-2 md:order-1'}`}>
                  <h2 className="text-3xl font-bold text-brand-navy mb-4">{service.title}</h2>
                  <div className="w-16 h-1 bg-brand-gold rounded-full mb-6"></div>
                  <p className="text-brand-steel text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link to="/proyectos" className="text-brand-navy font-semibold hover:text-brand-gold transition-colors inline-flex items-center gap-2">
                    Ver trabajos relacionados <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;