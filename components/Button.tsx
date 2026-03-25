import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'white';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  to?: string; // ¡Añadimos esta línea crucial!
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  type = 'button',
  className = '',
  disabled = false,
  to // Recibimos la propiedad
}) => {
  const baseClasses = "px-8 py-3 font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-gradient-to-r from-brand-gold to-brand-goldEnd text-brand-navy shadow-md hover:shadow-lg hover:scale-105",
    outline: "border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white transition-colors",
    white: "bg-white text-brand-navy hover:bg-gray-100 shadow-md"
  };

  const combinedClasses = `${baseClasses} ${variants[variant]} ${className}`;

  // Si el botón tiene un destino (to), renderizamos un Link para cambiar de página
  if (to) {
    return (
      <Link to={to} className={combinedClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }

  // Si no tiene destino, renderizamos un botón normal (ej: para el formulario)
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      {children}
    </motion.button>
  );
};

export default Button;