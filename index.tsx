import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Localizamos el punto de montaje en el HTML
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("No se pudo encontrar el elemento root para montar la aplicación");
}

const root = ReactDOM.createRoot(rootElement);

// IMPORTANTE: Usamos BrowserRouter para que las rutas coincidan 
// con los botones definidos en Home.tsx y Navbar.tsx
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);