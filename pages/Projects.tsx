import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';

const PROJECTS: Project[] = [
  { id: 1, title: "Nave Industrial Logística", category: "Metalistería", image: "https://picsum.photos/600/600?random=20" },
  { id: 2, title: "Cerramiento Residencial", category: "Aluminio", image: "https://picsum.photos/600/600?random=21" },
  { id: 3, title: "Modelo Nordic 24m²", category: "Tiny Houses", image: "https://picsum.photos/600/600?random=22" },
  { id: 4, title: "Escalera Flotante", category: "Metalistería", image: "https://picsum.photos/600/600?random=23" },
  { id: 5, title: "Ventanas Panorámicas", category: "Aluminio", image: "https://picsum.photos/600/600?random=24" },
  { id: 6, title: "Refugio de Montaña", category: "Tiny Houses", image: "https://picsum.photos/600/600?random=25" },
  { id: 7, title: "Pérgola Bioclimática", category: "Aluminio", image: "https://picsum.photos/600/600?random=26" },
  { id: 8, title: "Estructura Centro Comercial", category: "Metalistería", image: "https://picsum.photos/600/600?random=27" },
  { id: 9, title: "Modelo Studio Office", category: "Tiny Houses", image: "https://picsum.photos/600/600?random=28" },
];

const CATEGORIES = ["Todos", "Metalistería", "Aluminio", "Tiny Houses"];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState("Todos");

  const filteredProjects = filter === "Todos" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="pt-24 pb-20 bg-brand-ice min-h-screen px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">Nuestros Proyectos</h1>
          <p className="text-brand-steel">Explora nuestra galería de trabajos recientes.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === cat
                  ? "bg-brand-navy text-white shadow-lg scale-105"
                  : "bg-white text-brand-steel hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="relative group rounded-2xl overflow-hidden shadow-md cursor-pointer aspect-square"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-brand-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6">
                  <span className="text-brand-gold text-sm font-semibold uppercase tracking-wider mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-white text-2xl font-bold">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;