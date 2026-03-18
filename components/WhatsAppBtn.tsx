import React from 'react';
import { motion } from 'framer-motion';

const WhatsAppBtn: React.FC = () => {
  // Configuración de contacto
  const phoneNumber = '573001234567'; 
  const message = 'Hola Metálicas Díaz, me gustaría cotizar un proyecto.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] flex items-center justify-center"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Círculo contenedor verde */}
      <div className="bg-[#25D366] w-16 h-16 rounded-full shadow-2xl flex items-center justify-center overflow-hidden">
        
        {/* Tu imagen PNG reemplazando al SVG */}
        <img 
          src="/whatsapp-logo.svg" 
          alt="WhatsApp" 
          className="w-10 h-10 object-contain" 
        />

      </div>
    </motion.a>
  );
};

export default WhatsAppBtn;