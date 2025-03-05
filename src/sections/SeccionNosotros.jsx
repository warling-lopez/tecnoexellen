import StarRating from "../components/StarRating";

const SeccionNosotros = () => {
  return (
    <div className="flex max-md:flex-col justify-around p-2 bg-white shadow-lg">
      <div className="p-3 gap-3 flex flex-1 flex-col">
        <h2 className="text-gray-800 text-2xl font-bold">Sobre Nosotros</h2>
        <hr />
        <div className="bg-white rounded-lg py-2 px-5 hover:shadow-xl hover:bg-zinc-100 transition">
          <h2 className="font-bold text-gray-700 text-xl">
            ¿Qué es Technoexcellen?
          </h2>
          <p className="pl-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            at, quos atque eos quas reprehenderit earum, laudantium, quibusdam
            aspernatur totam provident! Recusandae ipsum minima alias quo optio
            dolore, ratione unde!
          </p>
        </div>
        <div className="bg-white rounded-lg py-2 px-5 hover:shadow-xl hover:bg-zinc-100 transition">
          <h2 className="font-bold text-gray-700 text-xl">
            ¿Por qué elegir Technoexellen?
          </h2>
          <p className="pl-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis illum
            quaerat earum quibusdam dolore officia accusamus amet et sapiente
            repudiandae deleniti, doloremque exercitationem. Odio quae dolorem
            assumenda quisquam quos consectetur!
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
