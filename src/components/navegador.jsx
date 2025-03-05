import React, { useState } from 'react'

function Navegador() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
  <nav className="w-[95%] p-1 left-1/2 transform -translate-x-1/2 top-2 fixed bg-white shadow-lg rounded-xl 
    transition-all duration-500 ease-in-out hover:shadow-xl">  
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Lado Izquierdo */}
          <div className="flex items-center">
            <img 
              src="/TECHNOEXELLEN.png"  
              alt="Logo" 
              className="h-20 items-center w-auto 
                transition-transform duration-100 ease-in-out 
                hover:scale-110 hover:rotate-2"
            />
          </div>

          {/* Menú Central - Visible solo en escritorio */}
          <div className="hidden md:flex space-x-4">
            {['Inicio', 'Nosotros', 'Servicios'].map((item, index) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className={`text-gray-700 px-3 py-2 rounded-md text-sm font-medium 
                  transition-all duration-300 ease-in-out
                  ${hoveredItem === index 
                    ? 'bg-blue-50 text-blue-700 scale-105 shadow-md' 
                    : 'hover:bg-blue-50 hover:text-blue-900'}`}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Botón de Contacto - Visible solo en escritorio */}
          <div className="hidden md:block">
            <button 
              className="bg-blue-900 text-white px-4 py-2 rounded-md 
                transition-all duration-300 ease-in-out 
                hover:bg-blue-950 hover:scale-105 hover:shadow-lg 
                active:scale-95"
            >
              Contactar
            </button>
          </div>

          {/* Menú Móvil (Hamburguesa) */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 hover:text-gray-950 focus:outline-none focus:text-gray-600
                transition-all duration-300 ease-in-out
                transform hover:scale-110 active:rotate-90"
            >
              <svg 
                className="h-6 w-6 transition-transform duration-300" 
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
        <div 
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out 
            ${isMenuOpen 
              ? 'max-h-screen opacity-100 transform translate-y-0' 
              : 'max-h-0 opacity-0 -translate-y-4'}`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Inicio', 'Nosotros', 'Servicios'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-gray-700 hover:bg-blue-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium
                  transition-all duration-300 ease-in-out 
                  transform hover:translate-x-2"
              >
                {item}
              </a>
            ))}
            <button 
              className="w-full bg-blue-900 text-white px-4 py-2 rounded-md 
                transition-all duration-300 ease-in-out 
                hover:bg-blue-950 hover:scale-105 
                active:scale-95"
            >
              Contactar
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navegador