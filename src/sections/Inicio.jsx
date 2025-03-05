import Navegador from "../components/navegador"

function Inicio() {
  return (<div id="inicio">
    <Navegador/>

    {/* Full width container with maximum width and centered */}
    <div className="w-full px-4 py-12 bg-gray-100 mt-20">
      <div className="flex flex-col md:flex-row items-center justify-between mx-auto">
        {/* Contenedor de Texto */}
        <div className="md:w-1/2 md:pr-12">
          {/* Logo en versión móvil (solo visible en móviles) */}
          <div className="md:hidden flex justify-center mb-6">
            <img 
              src="/Logo-NoFondo.png" 
              alt="Logo" 
              className="h-24 w-24 rounded-full object-cover"
            />
          </div>

          {/* Título Principal */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Desarrollamos Soluciones Digitales
          </h1>

          {/* Subtítulo */}
          <p className="text-lg text-gray-600 mb-6">
            Transformamos ideas en experiencias digitales innovadoras que impulsan el crecimiento de tu negocio.
          </p>

          {/* Formulario de Contacto */}
          <form className="space-y-4 mt-16">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Correo Electrónico
              </label>
              <input 
                type="email" 
                id="email"
                placeholder="Tu correo electrónico" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Asunto
              </label>
              <textarea 
                id="subject"
                placeholder="Describe el motivo de tu contacto" 
                rows="4"
                className="w-full max-h-[250px] min-h-[100px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical"
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-950 transition duration-300"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>

        {/* Contenedor de Logo - Solo visible en escritorio */}
        <div className="hidden md:block w-fit h-fit justify-center">
          <img 
            src="/Logo-NoFondo.png" 
            alt="Logo" 
            className="object-cover"
          />
        </div>
      </div>
    </div>
  </div>)
}

export default Inicio