import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

type FilterType = 'all' | 'metalisteria' | 'aluminio' | 'tiny-houses';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredProjects = filter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const filters: { id: FilterType; label: string }[] = [
    { id: 'all', label: 'Todos' },
    { id: 'metalisteria', label: 'Metalistería' },
    { id: 'aluminio', label: 'Aluminio' },
    { id: 'tiny-houses', label: 'Tiny Houses' },
  ];

  return (
    <div className="pt-8 pb-20 bg-brand-light min-h-screen">
       <div className="bg-brand-navy py-16 mb-12 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Galería de Proyectos</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto px-4">
          Una muestra de nuestro compromiso con la calidad y el diseño.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === f.id
                  ? 'bg-brand-navy text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white rounded-xl overflow-hidden shadow-md cursor-pointer"
              >
                <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-brand-gold text-xs font-bold uppercase tracking-wider mb-2">
                      {project.category.replace('-', ' ')}
                    </span>
                    <h3 className="text-white text-xl font-bold">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No se encontraron proyectos en esta categoría.
          </div>
        )}
      </div>

      {/* Tiny Houses Special Section */}
      {filter === 'tiny-houses' && (
        <div className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-gold/10 rounded-3xl p-8 md:p-12 text-center">
             <h3 className="text-2xl font-bold text-brand-navy mb-4">¿Interesado en una Tiny House?</h3>
             <p className="text-gray-700 mb-6">Agenda una visita a nuestro modelo de exhibición y siente la experiencia.</p>
             <a href="/contacto" className="inline-block bg-brand-navy text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-colors">
               Agendar Visita
             </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;