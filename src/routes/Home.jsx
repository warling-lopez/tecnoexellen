import Inicio from "../sections/Inicio";
import SeccionNosotros from "../sections/SeccionNosotros";
import SeccionContacto from "../sections/SeccionContacto";
import Footer from "../sections/Footer";

const Home = () => {
  return (
    <div id="inicio" className="flex flex-col items-center bg-gray-50">
      <Inicio/>
      <hr id="nosotros" className="w-3/4 border-gray-300 my-4 mx-auto" />
      <SeccionNosotros />
      <hr id="servicios" className="w-3/4 border-gray-300 my-4 mx-auto" />
      <SeccionContacto />
      <Footer />
    </div>
  );
};

export default Home;
