// Secciones
import SeccionNosotros from "../sections/SeccionNosotros";
import SeccionContacto from "../sections/SeccionContacto";

const Home = () => {
  return (
    <>
      <hr className="w-3/4 border-gray-300 absolute right-[50%] translate-x-[50%]" />
      <SeccionNosotros />
      <hr className="w-3/4 border-gray-300 absolute right-[50%] translate-x-[50%]" />
      <SeccionContacto />
    </>
  );
};

export default Home;
