import React from "react";
import { Send, CheckCircle } from "lucide-react";

const services = [
  {
    title: "Desarrollo Web Profesional",
    description:
      "Soluciones digitales personalizadas optimizadas para rendimiento y conversión",
    features: [
      "Diseño responsivo",
      "Optimización SEO",
      "Integración de sistemas",
    ],
  },
  {
    title: "Consultoría Tecnológica",
    description: "Estrategias de transformación digital adaptadas a tu negocio",
    features: [
      "Análisis de infraestructura",
      "Recomendaciones de mejora",
      "Implementación de soluciones",
    ],
  },
  {
    title: "Soporte Técnico Integral",
    description:
      "Mantenimiento proactivo y soporte continuo para tu infraestructura tecnológica",
    features: [
      "Monitoreo 24/7",
      "Resolución rápida de incidentes",
      "Actualizaciones preventivas",
    ],
  },
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
    <div id="servicios">
      <h2 className="font-semibold text-2xl">¿Te interesan nuestros servicios?</h2>
      {/* Service list */}
      <div className="flex flex-col gap-5 p-3">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
      <div className="flex flex-col items-center gap-4">
        <span className="text-center font-semibold text-xl">
          ¡Contactanos ya!
        </span>
        <button type="button" className="bg-blue-900 text-white font-semibold py-2 w-2/4 rounded hover:-translate-y-0.5 hover:bg-blue-950 transition cursor-pointer">
          Clíck aquí
        </button>
      </div>
    </div>
  );
};

export default SeccionContacto;
