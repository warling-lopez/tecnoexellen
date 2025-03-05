import StarRating from "../components/StarRating";

const SeccionNosotros = () => {
  return (
    <div className="flex max-md:flex-col justify-around p-2 bg-white shadow-lg">
      <div className="p-3 gap-3 flex flex-1 flex-col">
        <h2 className="text-gray-800 text-2xl font-bold">Sobre Nosotros</h2>
        <hr />
        <div className="bg-white rounded-lg py-2 px-5 hover:shadow-xl hover:bg-zinc-100 transition">
          <h2 className="font-bold text-gray-700 text-xl">Misión</h2>
          <p className="pl-5">
            Brindar soluciones tecnológicas innovadoras y personalizadas en
            automatización, conectividad y seguridad para hogares y empresas.
            Nos enfocamos en ofrecer productos y servicios de alta calidad,
            garantizando confianza, eficiencia y bienestar a nuestros clientes a
            través de la tecnología
          </p>
        </div>
        <div className="bg-white rounded-lg py-2 px-5 hover:shadow-xl hover:bg-zinc-100 transition">
          <h2 className="font-bold text-gray-700 text-xl">Visión</h2>
          <p className="pl-5">
            Ser la empresa líder en soluciones tecnológicas integrales,
            reconocida por su compromiso con la innovación, la excelencia en el
            servicio y la satisfacción del cliente. Aspiramos a transformar la
            manera en que las personas y las empresas interactúan con la
            tecnología, mejorando su calidad de vida y productividad.
          </p>
        </div>
      </div>
      <hr className="border-l h-96 min-md:block hidden" />
      <div className="flex flex-1 flex-col rounded-xl p-2 items-center text-black gap-2">
        <img
          className="rounded-full w-[200px] h-[200px] shadow-lg"
          src="/OIP.jpeg"
          alt=""
        />
        <h2 className="text-2xl text-gray-500">Juansito</h2>
        <p className="p-2 rounded-xl text-gray-900 text-center">
          Excelente Servicio, ¡me encanto!
        </p>
        <StarRating />
      </div>
    </div>
  );
};

export default SeccionNosotros;
