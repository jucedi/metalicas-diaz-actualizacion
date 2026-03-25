import { Shield, Home, Maximize, Lock, Hammer } from 'lucide-react';

export const NAV_ITEMS = [
  { label: 'Inicio', path: '/' },
  { label: 'Servicios', path: '/servicios' },
  { label: 'Proyectos', path: '/proyectos' },
  { label: 'Nosotros', path: '/nosotros' },
  { label: 'Contacto', path: '/contacto' },
];

export const SERVICES = [
  {
    id: 'puertas',
    title: 'Puertas y Portones',
    description: 'Seguridad y automatización para tu hogar o empresa. Diseños modernos y resistentes.',
    imageUrl: '/servicio-puertas.jpg', // ¡Foto real conectada!
  },
  {
    id: 'rejas',
    title: 'Rejas y Cerramientos',
    description: 'Protección perimetral con alto valor estético. Diseños personalizados.',
    imageUrl: '/servicio-rejas.jpg', // ¡Foto real conectada!
  },
  {
    id: 'estructuras',
    title: 'Estructuras Metálicas',
    description: 'Cubiertas, naves industriales y reforzamientos estructurales de alta ingeniería.',
    imageUrl: '/servicio-estructuras.jpg', // ¡Foto real conectada!
  },
  {
    id: 'aluminio',
    title: 'Aluminio Arquitectónico',
    description: 'Ventanería termoacústica, fachadas flotantes y divisiones de baño. Modernidad y luz.',
    imageUrl: '/servicio-aluminio.jpg', // ¡Foto real conectada!
    isNew: true,
  },
  {
    id: 'tiny-houses',
    title: 'Tiny Houses',
    description: 'Viviendas modulares ecológicas, móviles y listas para habitar. La nueva forma de vivir.',
    imageUrl: '/servicio-tinyhouse.jpg', // ¡Foto real conectada!
    isNew: true,
    isFeatured: true,
  },
];

// Los proyectos aún tienen fotos de prueba, los cambiaremos en el siguiente paso
export const PROJECTS = [
  { id: '1', title: 'Portón Automatizado Residencial', category: 'metalisteria', imageUrl: '/proyecto-porton.jpg' },
  { id: '2', title: 'Nave Industrial / Estructura', category: 'metalisteria', imageUrl: '/proyecto-nave.jpg' },
  { id: '3', title: 'Tiny House Modelo "Alba"', category: 'tiny-houses', imageUrl: '/proyecto-tiny-alba.jpg' },
  { id: '4', title: 'Fachada Flotante', category: 'aluminio', imageUrl: '/proyecto-fachada.jpg' },
  { id: '5', title: 'Tiny House Interior - Cocina', category: 'tiny-houses', imageUrl: '/proyecto-tiny-cocina.jpg' },
  { id: '6', title: 'Cerramiento de Seguridad', category: 'metalisteria', imageUrl: '/proyecto-cerramiento.jpg' },
  { id: '7', title: 'Ventanería de seguridad', category: 'metalisteria', imageUrl: '/proyecto-ventana.jpg' },
  // ¡ÚLTIMO PROYECTO ACTUALIZADO CON ÉXITO!
  { id: '8', title: 'Puerta Reja de Seguridad Integrada', category: 'metalisteria', imageUrl: '/proyecto-puerta-reja.jpg' },
];

export const CONTACT_INFO = {
  phone: '+57 315 272 4688',
  email: 'metalicasdiaz0210@gmail.com',
  address: 'Cra 35c # 33b-04, Girón, Santander',
  whatsapp: '573152724688' // Número real listo para el botón de WhatsApp
};