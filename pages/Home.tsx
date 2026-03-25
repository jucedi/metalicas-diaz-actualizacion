import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { Helmet } from 'react-helmet-async';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Etiquetas SEO Dinámicas */}
      <Helmet>
        <title>Inicio | Metálicas Díaz - Soluciones Metálicas y Tiny Houses</title>
        <meta name="description" content="Ingeniería de precisión y diseño industrial. Especialistas en metalistería, aluminio arquitectónico y construcción de Tiny Houses." />
      </Helmet>

      {/* Hero Section */}
      <section 
        className="relative h-screen min-h-[600px] flex items-center justify-center bg-fixed bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: 'url("/imagenprincipal.svg")' }}
      >
        {/* Capas oscuras con pointer-events-none para no bloquear los clics */}
        <div className="absolute inset-0 bg-brand-navy/60 z-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent z-10 pointer-events-none"></div>

        {/* Contenedor de contenido con pointer-events-auto */}
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto pointer-events-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
          >
            Construimos Tu <br/>
            <span className="text-brand-gold">Futuro en Metal</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light"
          >
            Ingeniería de precisión y diseño industrial para proyectos que desafían el tiempo. Expertos en metalistería, aluminio y soluciones modulares para el mañana.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button to="/proyectos" variant="primary" className="group">
              Ver Proyectos <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button to="/contacto" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy transition-all">
              Solicitar Presupuesto
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 bg-gray-50 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-navy mb-4">Nuestros Pilares</h2>
            <div className="w-24 h-1.5 bg-brand-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                title: "Innovación Técnica", 
                desc: "Utilizamos maquinaria de última generación para cortes y soldaduras de precisión milimétrica en cada estructura.", 
                // Cuando tengas tu imagen local, cambia esto por "/tu-imagen.jpg"
                img: "/pilar_innovacion.jpg" 
              },
              { 
                title: "Diseño Moderno", 
                desc: "Fusionamos la robustez industrial con una estética contemporánea para crear espacios y piezas únicas.", 
                img: "/pilar_diseno.jpg" 
              },
              { 
                title: "Sostenibilidad", 
                desc: "Procesos optimizados para reducir residuos y el uso de materiales 100% reciclables y duraderos.", 
                img: "/pilar_sostenibilidad.jpg" 
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
              >
                <div className="overflow-hidden h-64">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-bold text-brand-navy mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-brand-navy text-white px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-8 flex flex-col items-center">
              <div className="w-20 h-20 bg-brand-gold/20 rounded-full flex items-center justify-center mb-6 text-brand-gold shadow-lg shadow-brand-gold/10">
                <ShieldCheck size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Garantía Certificada</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Todos nuestros materiales y procesos de fabricación cuentan con los más altos estándares de calidad.</p>
            </div>
            
            <div className="p-8 flex flex-col items-center border-y md:border-y-0 md:border-x border-white/10">
              <div className="w-20 h-20 bg-brand-gold/20 rounded-full flex items-center justify-center mb-6 text-brand-gold shadow-lg shadow-brand-gold/10">
                <Clock size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Entrega Puntual</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Respetamos rigurosamente los cronogramas pactados porque sabemos que tu tiempo es lo más valioso.</p>
            </div>
            
            <div className="p-8 flex flex-col items-center">
              <div className="w-20 h-20 bg-brand-gold/20 rounded-full flex items-center justify-center mb-6 text-brand-gold shadow-lg shadow-brand-gold/10">
                <Award size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-3">+20 Años Liderando</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Dos décadas de experiencia en el sector respaldan cada uno de nuestros proyectos entregados.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;