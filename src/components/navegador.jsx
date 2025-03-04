import React, { useState } from 'react'

function Navegador() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (<nav className="w-[95%] left-1/2 transform -translate-x-1/2 top-2 fixed bg-white shadow-lg rounded-xl ">  
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Lado Izquierdo */}
          <div className="flex items-center">
            <img 
              src="/public/OIP.jpeg"  
              alt="Logo" 
              className="h-10 w-auto"
            />
          </div>

          {/* Menú Central - Visible solo en escritorio */}
          <div className="hidden md:flex space-x-4">
            <a 
              href="#inicio" 
              className="text-gray-700 hover:bg-blue-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Inicio
            </a>
            <a 
              href="#nosotros" 
              className="text-gray-700 hover:bg-blue-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Nosotros
            </a>
            <a 
              href="#servicios" 
              className="text-gray-700 hover:bg-blue-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Servicios
            </a>
          </div>

          {/* Botón de Contacto - Visible solo en escritorio */}
          <div className="hidden md:block">
            <button 
              className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-950 transition duration-300 ease-in-out"
            >
              Contactar
            </button>
          </div>

          {/* Menú Móvil (Hamburguesa) */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 hover:text-gray-950 focus:outline-none focus:text-gray-600"
            >
              <svg 
                className="h-6 w-6" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Menú Móvil Desplegable */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a 
                href="#inicio" 
                className="text-gray-700 hover:bg-blue-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              >
                Inicio
              </a>
              <a 
                href="#nosotros" 
                className="text-gray-700 hover:bg-blue-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              >
                Nosotros
              </a>
              <a 
                href="#servicios" 
                className="text-gray-700 hover:bg-blue-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              >
                Servicios
              </a>
              <button 
                className="w-full bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-950 transition duration-300 ease-in-out"
              >
                Contactar
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navegador