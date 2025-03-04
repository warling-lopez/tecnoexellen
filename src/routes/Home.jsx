
import SeccionNosotros from "../sections/SeccionNosotros";
import SeccionContacto from "../sections/SeccionContacto";

const Home = () => {
  return (

    <div className="flex flex-col items-center">
      <hr className="w-3/4 border-gray-300 my-4 mx-auto" />
      <SeccionNosotros />
      <hr className="w-3/4 border-gray-300 my-4 mx-auto" />
      <SeccionContacto />
    </div>
  );
};

export default Home;