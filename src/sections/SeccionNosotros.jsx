const SeccionNosotros = () => {
  return (
    <div className="flex max-md:flex-col justify-around p-2 bg-white shadow-lg">
      <div className="p-3 gap-3 flex flex-1 flex-col">
        <h2 className="text-gray-800 text-2xl font-bold">Sobre Nosotros</h2>
        <hr />
        <div className="bg-white rounded-lg py-2 px-5 hover:shadow-xl hover:bg-zinc-100 transition">
          <h2 className="font-bold text-gray-700 text-xl">Misión</h2>
          <p className="pl-5">
            Brindar soluciones tecnologicas en la automatización, conectividad y
            seguridad para hogares y empresas. Nos enfocamos en ofrecer
            productos y servicios de alta calidad, garantizando confianza,
            seguridad y bienestar a nuestros clientes a través de la
            tecnología.
          </p>
        </div>
        <div className="bg-white rounded-lg py-2 px-5 hover:shadow-xl hover:bg-zinc-100 transition">
          <h2 className="font-bold text-gray-700 text-xl">Visión</h2>
          <p className="pl-5">
            Ser la empresa líder en servicios y soluciones tecnológicas
            integrales, reconocida por su compromiso con la excelencia en el
            servicio y la satisfacción del cliente. Aspiramos a transformar la
            manera en que las personas y las empresas interactúan con la
            tecnología, mejorando su calidad de vida y productividad.
          </p>
        </div>
      </div>
      <hr className="border-l h-96 min-md:block hidden" />
      <div className="flex flex-1 flex-col rounded-xl p-2 items-center text-black gap-2">
        <h2 className="font-bold text-gray-700 text-xl">Valores</h2>
        <ul className="pl-6 list-disc bg-white rounded-lg py-2 px-5 hover:shadow-xl hover:bg-zinc-100 transition">
          <li>
            Compromiso: Nos comprometemos en brindar un servicio confiables y
            soluciones adaptadas a las necesidades de cada cliente.
          </li>
          <li>
            Seguridad: Protegemos los espacios de nuestros clientes con
            tecnología confiable y segura.
          </li>
          <li>
            Responsabilidad: Actuamos con ética y transparencia en cada proyecto
            que desarrollamos.
          </li>
          <li>
            Confiabilidad: Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Temporibus maxime animi atque et natus non, nesciunt quos
            explicabo autem fuga veniam illo in facilis iste eius. Nam soluta
            delectus ipsum!
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SeccionNosotros;
