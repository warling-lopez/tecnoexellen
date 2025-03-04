import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const FooterSection = ({ title, items }) => (
  <div className="w-full sm:w-1/3 p-4 border-l border-zinc-400/30">
    <h3 className="font-semibold text-lg mb-3 text-white">{title}</h3>
    <hr className="border-zinc-400 mb-3" />
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li
          key={index}
          className="text-zinc-300 hover:text-white transition-colors"
        >
          <Link to="/" className="text-sm">
            {item}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const SocialIcon = ({ Icon, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-zinc-300 transition-colors"
  >
    <Icon size={24} />
  </a>
);

const Footer = () => {
  const informationLinks = [
    "Quiénes Somos",
    "Servicios",
    "Proyectos",
    "Contacto",
  ];

  const techLinks = ["Tecnologías", "Innovación", "Desarrollo", "Soporte"];

  const socialLinks = [
    { Icon: Facebook, href: "#" },
    { Icon: Instagram, href: "#" },
    { Icon: Twitter, href: "#" },
    { Icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="bg-zinc-700 text-white py-8 w-full">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-2/3 flex flex-col sm:flex-row">
          <FooterSection title="Información" items={informationLinks} />
          <FooterSection title="Tecnoexellen" items={techLinks} />
          <div className="w-full sm:w-1/3 p-4 border-l border-zinc-400/30">
            <h3 className="font-semibold text-lg mb-3 text-white">Redes</h3>
            <hr className="border-zinc-400 mb-3" />
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href }, index) => (
                <SocialIcon key={index} Icon={Icon} href={href} />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 flex justify-center items-center p-4">
          <img
            src="/Logo-NoFondo.png"
            alt="Tecnoexellen Logo"
            className="max-w-[250px] object-contain"
          />
        </div>
      </div>

      <div className="text-center text-zinc-400 text-sm mt-4 border-t border-zinc-600 pt-4">
        © {new Date().getFullYear()} Tecnoexellen. Todos los derechos
        reservados.
      </div>
    </footer>
  );
};

export default Footer;
