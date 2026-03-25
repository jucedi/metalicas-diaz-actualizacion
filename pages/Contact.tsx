import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import Button from '../components/Button';
import { Helmet } from 'react-helmet-async';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const [phoneError, setPhoneError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xbdzvkoa";

  const validatePhone = (phone: string) => {
    const regex = /^\d{7,14}$/;
    return regex.test(phone);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validatePhone(formData.phone)) {
      setPhoneError('Introduce un número de teléfono válido (solo números, entre 7 y 14 dígitos).');
      return;
    }
    
    setPhoneError('');
    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ name: '', phone: '', email: '', service: '', message: '' });
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        alert("Hubo un problema al enviar el mensaje. Por favor, intenta de nuevo o escríbenos por WhatsApp.");
      }
    } catch (error) {
      alert("Error de conexión. Verifica tu internet y vuelve a intentarlo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (e.target.name === 'phone') {
      setPhoneError('');
    }
  };

  return (
    <div className="pt-8 pb-20 bg-brand-light">
      <Helmet>
        <title>Contacto | Cotiza tu Proyecto con Metálicas Díaz</title>
        <meta name="description" content="Solicita tu presupuesto sin compromiso. Atendemos proyectos de metalistería general, aluminio arquitectónico y construcción de Tiny Houses. ¡Escríbenos!" />
      </Helmet>

      <div className="bg-brand-navy py-16 mb-12 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contáctanos</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto px-4">
          Estamos listos para hacer realidad tu proyecto.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Formulario */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-brand-navy mb-6">Envíanos un mensaje</h3>
            
            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 text-green-700 flex items-center gap-3">
                <CheckCircle size={24} />
                <p className="font-medium">¡Gracias por contactarnos! Te responderemos a la brevedad.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                  placeholder="Juan Pérez"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:border-transparent outline-none transition-all ${
                      phoneError ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-brand-gold'
                    }`}
                    placeholder="3001234567"
                  />
                  {phoneError && <p className="text-red-500 text-xs mt-1">{phoneError}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                    placeholder="juan@ejemplo.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Servicio de Interés</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="metalisteria">Metalistería General</option>
                  <option value="aluminio">Aluminio Arquitectónico</option>
                  <option value="tiny-house">Tiny Houses</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                <textarea
                  required
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                  placeholder="Cuéntanos detalles sobre tu proyecto..."
                ></textarea>
              </div>

              <Button 
                type="submit" 
                variant="primary" 
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" /> Enviando...
                  </>
                ) : (
                  <>
                    <Send size={18} /> Enviar Solicitud
                  </>
                )}
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-brand-navy text-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gold/20 p-3 rounded-full">
                    <MapPin className="text-brand-gold w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-gold">Visítanos</p>
                    <p className="text-gray-300">{CONTACT_INFO.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gold/20 p-3 rounded-full">
                    <Phone className="text-brand-gold w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-gold">Llámanos</p>
                    <a href={`tel:${CONTACT_INFO.phone}`} className="text-gray-300 hover:text-white transition-colors">
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-brand-gold/20 p-3 rounded-full">
                    <Mail className="text-brand-gold w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-gold">Escríbenos</p>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-300 hover:text-white transition-colors">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Mapa Real de Girón */}
            <div className="bg-gray-200 rounded-2xl shadow-lg overflow-hidden h-80 relative group">
               <iframe 
                src="https://www.google.com/maps?q=Cra+35c+%23+33b-04,+Gir%C3%B3n,+Santander&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                title="Ubicación Metálicas Díaz"
                className="grayscale group-hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;