import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, Award } from 'lucide-react';
import Button from '../components/Button';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ 
            backgroundImage: 'url("https://picsum.photos/seed/construction/1920/1080")', 
          }}
        >
          <div className="absolute inset-0 bg-brand-navy/80 mix-blend-multiply"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              Expertos en Soluciones <br/>
              <span className="text-brand-gold">Metálicas y Arquitectura Modular</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-3xl mx-auto font-light">
              Transformamos acero y aluminio en estructuras seguras y estéticas. 
              Descubre nuestra nueva línea de <strong>Tiny Houses</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/contacto" variant="primary">
                Solicitar Cotización
              </Button>
              <Button to="/proyectos" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy">
                Ver Proyectos
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Nuestros Pilares</h2>
            <div className="w-20 h-1 bg-brand-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Metalistería", 
                desc: "Puertas, portones y estructuras pesadas diseñadas para durar.", 
                img: "https://picsum.photos/seed/welding/600/400" 
              },
              { 
                title: "Aluminio", 
                desc: "Sistemas arquitectónicos modernos, fachadas y ventanería.", 
                img: "https://picsum.photos/seed/aluminum/600/400" 
              },
              { 
                title: "Tiny Houses", 
                desc: "Viviendas modulares ecológicas y listas para habitar.", 
                img: "https://picsum.photos/seed/tinyhome/600/400" 
              },
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-brand-navy mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.desc}</p>
                  <Link to="/servicios" className="inline-flex items-center text-brand-gold font-semibold hover:text-brand-navy transition-colors">
                    Saber más <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <Shield className="w-12 h-12 text-brand-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Garantía Asegurada</h3>
              <p className="text-gray-300">Materiales de primera calidad y mano de obra experta en cada soldadura.</p>
            </div>
            <div className="p-6">
              <Clock className="w-12 h-12 text-brand-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Entrega Puntual</h3>
              <p className="text-gray-300">Respetamos tu tiempo. Cronogramas claros y cumplimiento de plazos.</p>
            </div>
            <div className="p-6">
              <Award className="w-12 h-12 text-brand-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Experiencia Comprobada</h3>
              <p className="text-gray-300">Más de 20 años en el mercado respaldan nuestra trayectoria.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-20 bg-brand-gold/10">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Desde un portón residencial hasta un complejo de Tiny Houses, lo hacemos realidad.
          </p>
          <Button to="/contacto" variant="primary" className="shadow-xl">
            Hablemos Ahora
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;