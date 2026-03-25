import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const About: React.FC = () => {
  return (
    <div className="pb-20">
      <Helmet>
        <title>Sobre Nosotros | 20 Años de Experiencia - Metálicas Díaz</title>
        <meta name="description" content="Conoce la historia de Metálicas Díaz. Dos décadas liderando la transformación del metal, con un equipo altamente capacitado y comprometido con la excelencia." />
      </Helmet>

      <div className="bg-brand-navy py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre Nosotros</h1>
        <p className="text-lg text-gray-300">Historia, pasión y compromiso.</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <div className="prose prose-lg text-gray-600 max-w-none">
            <h3 className="text-2xl font-bold text-brand-navy mb-4">Nuestra Historia</h3>
            <p className="mb-8">
              Fundada en el año 2000, Metálicas Díaz comenzó como un modesto taller familiar enfocado en la cerrajería tradicional. Con el paso de los años, y gracias a la confianza de nuestros clientes, evolucionamos para integrar tecnologías modernas en metalistería industrial.
            </p>
            <p className="mb-8">
              Hoy, bajo la segunda generación de liderazgo, hemos dado un salto hacia la innovación arquitectónica, integrando líneas de aluminio de alta prestación y siendo pioneros en la fabricación de <strong>Tiny Houses</strong> en la región.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-brand-light p-6 rounded-xl border-l-4 border-brand-navy">
                <h4 className="text-xl font-bold text-brand-navy mb-2">Misión</h4>
                <p className="text-sm">
                  Proveer soluciones metálicas y modulares que combinen seguridad, funcionalidad y estética, superando las expectativas de calidad de nuestros clientes.
                </p>
              </div>
              <div className="bg-brand-light p-6 rounded-xl border-l-4 border-brand-gold">
                <h4 className="text-xl font-bold text-brand-navy mb-2">Visión</h4>
                <p className="text-sm">
                  Ser reconocidos en 2030 como la empresa líder en construcción modular y arquitectura metálica sostenible a nivel nacional.
                </p>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden h-[400px] mt-8">
              <img 
  src="/nosotros-taller.jpg" // ¡Foto real de Sobre Nosotros conectada!
  alt="Nuestro Taller - Metálicas Díaz" 
  className="w-full h-full object-cover"
/>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                  <p className="font-bold text-lg">Nuestro equipo en acción</p>
                </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;