import React from 'react';
import { Send, CheckCircle } from 'lucide-react';

const services = [
  {
    title: "Instalación de equipo domóticos",
    description: "Soluciones digitales personalizadas optimizadas para rendimiento y conversión",
    features: [
      "Asesoria de equipos",
      "Instalación domótica completa",
    ]
  },
  {
    title: "Consultoría Tecnológica",
    description: "Estrategias de transformación digital adaptadas a tu negocio",
    features: [
      "Recomendaciones de mejora",
      "Implementación de soluciones"
    ]
  },
  {
    title: "Soporte Técnico Integral",
    description: "Mantenimiento proactivo y soporte continuo para tu infraestructura tecnológica",
    features: [
      "Monitoreo 24/7",
      "Resolución rápida de incidentes",
      "Actualizaciones preventivas"
    ]
  }
];

const ServiceCard = ({ title, description, features }) => (
  <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
    <h3 className="text-xl font-bold text-blue-900 mb-3">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="space-y-2">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center text-gray-700">
          <CheckCircle className="text-blue-500 mr-2" size={18} />
          <span className="text-sm">{feature}</span>
        </div>
      ))}
    </div>
  </div>
);

const SeccionContacto = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          Potencia tu Negocio con Tecnología de Vanguardia
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-2xl font-semibold text-gray-700 mb-6">
            Transforma tu visión digital en realidad
          </p>
          
          <button 
            className="bg-blue-600 text-white px-8 py-4 rounded-lg 
                       text-lg font-bold tracking-wide 
                       hover:bg-blue-700 transition-colors duration-300
                       flex items-center justify-center mx-auto gap-3
                       shadow-md hover:shadow-xl group cursor-pointer"
          >
            <Send className="group-hover:translate-x-1 transition-transform" size={24} />
            Contáctanos Ahora
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeccionContacto;
