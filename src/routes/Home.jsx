import Inicio from "../sections/Inicio";
import SeccionNosotros from "../sections/SeccionNosotros";
import SeccionContacto from "../sections/SeccionContacto";
import Footer from "../sections/Footer";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <Inicio />
      <hr className="w-3/4 border-gray-300 my-4 mx-auto" />
      <SeccionNosotros />
      <hr className="w-3/4 border-gray-300 my-4 mx-auto" />
      <SeccionContacto />
      <Footer />
    </div>
  );
};

export default Home;
