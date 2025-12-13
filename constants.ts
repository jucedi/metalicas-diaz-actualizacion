import { NavItem, Project, Service } from './types';
import { Shield, Home, Maximize, Lock, Hammer } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', path: '/' },
  { label: 'Servicios', path: '/servicios' },
  { label: 'Proyectos', path: '/proyectos' },
  { label: 'Nosotros', path: '/nosotros' },
  { label: 'Contacto', path: '/contacto' },
];

export const SERVICES: Service[] = [
  {
    id: 'puertas',
    title: 'Puertas y Portones',
    description: 'Seguridad y automatización para tu hogar o empresa. Diseños modernos y resistentes.',
    imageUrl: 'https://picsum.photos/seed/gate/800/600',
  },
  {
    id: 'rejas',
    title: 'Rejas y Cerramientos',
    description: 'Protección perimetral con alto valor estético. Diseños personalizados.',
    imageUrl: 'https://picsum.photos/seed/fence/800/600',
  },
  {
    id: 'estructuras',
    title: 'Estructuras Metálicas',
    description: 'Cubiertas, naves industriales y reforzamientos estructurales de alta ingeniería.',
    imageUrl: 'https://picsum.photos/seed/structure/800/600',
  },
  {
    id: 'aluminio',
    title: 'Aluminio Arquitectónico',
    description: 'Ventanería termoacústica, fachadas flotantes y divisiones de baño. Modernidad y luz.',
    imageUrl: 'https://picsum.photos/seed/window/800/600',
    isNew: true,
  },
  {
    id: 'tiny-houses',
    title: 'Tiny Houses',
    description: 'Viviendas modulares ecológicas, móviles y listas para habitar. La nueva forma de vivir.',
    imageUrl: 'https://picsum.photos/seed/tinyhouse/800/600',
    isNew: true,
    isFeatured: true,
  },
];

export const PROJECTS: Project[] = [
  { id: '1', title: 'Portón Automatizado Residencial', category: 'metalisteria', imageUrl: 'https://picsum.photos/seed/p1/600/400' },
  { id: '2', title: 'Nave Industrial Zona Franca', category: 'metalisteria', imageUrl: 'https://picsum.photos/seed/p2/600/400' },
  { id: '3', title: 'Tiny House Modelo "Alba"', category: 'tiny-houses', imageUrl: 'https://picsum.photos/seed/p3/600/400' },
  { id: '4', title: 'Fachada Flotante Edificio Norte', category: 'aluminio', imageUrl: 'https://picsum.photos/seed/p4/600/400' },
  { id: '5', title: 'Tiny House Interior - Cocina', category: 'tiny-houses', imageUrl: 'https://picsum.photos/seed/p5/600/400' },
  { id: '6', title: 'Cerramiento Conjunto Cerrado', category: 'metalisteria', imageUrl: 'https://picsum.photos/seed/p6/600/400' },
  { id: '7', title: 'Ventanería Termoacústica', category: 'aluminio', imageUrl: 'https://picsum.photos/seed/p7/600/400' },
  { id: '8', title: 'Tiny House Modelo "Bosque"', category: 'tiny-houses', imageUrl: 'https://picsum.photos/seed/p8/600/400' },
];

export const CONTACT_INFO = {
  phone: '+57 300 123 4567',
  email: 'contacto@metalicasdiaz.com',
  address: 'Cra 45 # 12-34, Zona Industrial, Bogotá, Colombia',
  whatsapp: '573001234567' // Clean number for link
};