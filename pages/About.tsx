import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-brand-ice min-h-screen">
      
      {/* Header */}
      <div className="bg-brand-navy text-white py-16 mb-16">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Nuestra Historia
          </motion.h1>
          <p className="text-xl text-brand-softSteel max-w-3xl mx-auto">
            De un pequeño taller familiar a referentes en innovación metalúrgica.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img 
              src="https://picsum.photos/800/600?random=30" 
              alt="Taller original" 
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-brand-navy mb-6">Orígenes y Evolución</h2>
            <div className="space-y-4 text-brand-steel leading-relaxed text-lg">
              <p>
                Fundada en 2003 por Carlos Díaz, Metálicas Díaz comenzó como un modesto taller de herrería artesanal. La pasión por el detalle y la robustez de nuestros trabajos pronto nos ganó la confianza de arquitectos locales.
              </p>
              <p>
                En 2015, dimos el salto a la industria 4.0 incorporando tecnología de corte láser y diseño 3D, permitiéndonos abordar proyectos de gran envergadura sin perder nuestra esencia artesanal.
              </p>
              <p>
                Hoy, **Metálicas Díaz 2.0** representa la fusión perfecta entre la solidez del acero y la visión de la arquitectura moderna.
              </p>
            </div>
          </div>
        </div>

        {/* Mission / Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-brand-navy"
          >
            <h3 className="text-2xl font-bold text-brand-navy mb-4">Misión</h3>
            <p className="text-brand-steel text-lg">
              Proveer soluciones metálicas integrales que superen las expectativas de durabilidad y estética, impulsando el éxito de los proyectos de nuestros clientes mediante innovación constante y compromiso inquebrantable con la calidad.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-brand-gold"
          >
            <h3 className="text-2xl font-bold text-brand-navy mb-4">Visión</h3>
            <p className="text-brand-steel text-lg">
              Ser la empresa líder en construcción modular y carpintería metálica de alta gama a nivel nacional, reconocidos por revolucionar la forma de habitar espacios a través de nuestras Tiny Houses y estructuras sostenibles.
            </p>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default About;