const SeccionNosotros = () => {
  return (
    <div className="flex justify-around p-2">
      <div className="p-3 gap-3 flex flex-1 flex-col">
        <h2 className="text-gray-800 text-2xl font-bold">Sobre Nosotros</h2>
        <hr />
        <h2 className="font-bold text-gray-700 text-xl">¿Qué es TecnoExcellen?</h2>
        <p className="pl-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          at, quos atque eos quas reprehenderit earum, laudantium, quibusdam
          aspernatur totam provident! Recusandae ipsum minima alias quo optio
          dolore, ratione unde!
        </p>
        <h2 className="font-bold text-gray-700 text-xl">
          ¿Por qué elegir TecnoExcellen?
        </h2>
        <p className="pl-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis illum
          quaerat earum quibusdam dolore officia accusamus amet et sapiente
          repudiandae deleniti, doloremque exercitationem. Odio quae dolorem
          assumenda quisquam quos consectetur!
        </p>
      </div>
      <div className="bg-white shadow-2xl flex flex-1 flex-col rounded-xl p-2 items-center text-black gap-2">
          <img className="rounded-full w-[200px] h-[200px] shadow-lg" src="/OIP.jpeg" alt="" />
          <h2 className="text-2xl text-gray-300">Nombre</h2>
          <p className="bg-gray-400 p-2 rounded-xl text-gray-900 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quae commodi necessitatibus iure? Atque, consectetur voluptatum perferendis corporis beatae modi facilis inventore? Aut asperiores officia quisquam deleniti, fuga sunt esse!</p>
      </div>
    </div>
  );
};

export default SeccionNosotros;
