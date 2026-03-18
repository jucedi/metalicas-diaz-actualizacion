import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { FormStatus } from '../types';
import { CheckCircle, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(FormStatus.SUBMITTING);
    
    // Simulate API call
    setTimeout(() => {
      setStatus(FormStatus.SUCCESS);
    }, 2000);
  };

  return (
    <div className="pt-24 pb-20 bg-brand-ice min-h-screen px-4 md:px-8 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Contact Info Sidebar */}
        <div className="bg-brand-navy text-white p-10 md:w-2/5 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-6">Hablemos</h2>
            <p className="text-brand-softSteel mb-8">
              ¿Tienes un proyecto en mente? Completa el formulario y nuestro equipo técnico te contactará en menos de 24 horas.
            </p>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-brand-gold">Ubicación</h4>
              <p className="text-sm text-brand-softSteel">Polígono Industrial Las Lomas, Nave 42, Madrid</p>
            </div>
            <div>
              <h4 className="font-semibold text-brand-gold">Teléfono</h4>
              <p className="text-sm text-brand-softSteel">+34 912 345 678</p>
            </div>
            <div>
              <h4 className="font-semibold text-brand-gold">Email</h4>
              <p className="text-sm text-brand-softSteel">info@metalicasdiaz.com</p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="p-10 md:w-3/5 relative">
          {status === FormStatus.SUCCESS ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full flex flex-col items-center justify-center text-center space-y-4"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy">¡Mensaje Enviado!</h3>
              <p className="text-brand-steel">Gracias por contactarnos. Te responderemos pronto.</p>
              <Button onClick={() => setStatus(FormStatus.IDLE)} variant="outline">
                Enviar otro mensaje
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-brand-navy ml-1">Nombre</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="Tu nombre"
                    className="w-full bg-brand-ice border-0 rounded-xl px-4 py-3 text-brand-navy placeholder-gray-400 focus:ring-2 focus:ring-brand-gold focus:outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-brand-navy ml-1">Teléfono</label>
                  <input 
                    required 
                    type="tel" 
                    placeholder="+34 ..."
                    className="w-full bg-brand-ice border-0 rounded-xl px-4 py-3 text-brand-navy placeholder-gray-400 focus:ring-2 focus:ring-brand-gold focus:outline-none transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-brand-navy ml-1">Email</label>
                <input 
                  required 
                  type="email" 
                  placeholder="nombre@empresa.com"
                  className="w-full bg-brand-ice border-0 rounded-xl px-4 py-3 text-brand-navy placeholder-gray-400 focus:ring-2 focus:ring-brand-gold focus:outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-brand-navy ml-1">Interés</label>
                <select className="w-full bg-brand-ice border-0 rounded-xl px-4 py-3 text-brand-navy focus:ring-2 focus:ring-brand-gold focus:outline-none transition-all">
                  <option>Estructuras Metálicas</option>
                  <option>Carpintería de Aluminio</option>
                  <option>Tiny Houses</option>
                  <option>Otro</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-brand-navy ml-1">Mensaje</label>
                <textarea 
                  required 
                  rows={4}
                  placeholder="Cuéntanos sobre tu proyecto..."
                  className="w-full bg-brand-ice border-0 rounded-xl px-4 py-3 text-brand-navy placeholder-gray-400 focus:ring-2 focus:ring-brand-gold focus:outline-none transition-all resize-none"
                ></textarea>
              </div>

              <Button 
                type="submit" 
                className="w-full justify-center" 
                disabled={status === FormStatus.SUBMITTING}
              >
                {status === FormStatus.SUBMITTING ? (
                  <>
                    <Loader2 className="animate-spin" /> Enviando...
                  </>
                ) : (
                  "Enviar Solicitud"
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;