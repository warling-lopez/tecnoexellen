import ServiceCard from "../components/ServiceCard";

const SeccionContacto = () => {
  return (
    <div className="p-2">
      <h2 className="font-semibold text-2xl">¿Te interesan nuestros servicios?</h2>
      {/* Service list */}
      <div className="flex flex-col gap-5 p-3">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
      <div className="flex flex-col items-center gap-4">
        <span className="text-center font-semibold text-xl">
          ¡Contactanos ya!
        </span>
        <button type="button" className="bg-blue-900 text-white font-semibold py-2 w-full min-lg:w-2/4 rounded hover:-translate-y-0.5 hover:bg-blue-950 transition cursor-pointer">
          Clíck aquí
        </button>
      </div>
    </div>
  );
};

export default SeccionContacto;
