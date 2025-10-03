import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1F1D2B] text-white mt-auto">
      {/* Sección principal del footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/Logo.png" alt="El Súper Gestor" className="w-12 h-12" />
              <h3 className="text-xl font-bold text-[#ec7c6a]">El Súper Gestor</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Tu plataforma de gestión integral. Simplificamos tus trámites y procesos
              para que puedas enfocarte en lo que realmente importa.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#ec7c6a] transition-colors duration-200">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#ec7c6a] transition-colors duration-200">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#ec7c6a] transition-colors duration-200">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#ec7c6a] transition-colors duration-200">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#ec7c6a]">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Inicio</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Trámites</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Servicios</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Soporte</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Acerca de</a>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#ec7c6a]">Servicios</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Gestión Documental</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Trámites Legales</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Consultoría</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Soporte 24/7</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Capacitación</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#ec7c6a]">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-[#ec7c6a] flex-shrink-0" size={16} />
                <span className="text-gray-400 text-sm">Rosario, Santa Fe, Argentina</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-[#ec7c6a] flex-shrink-0" size={16} />
                <span className="text-gray-400 text-sm">+54 341 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-[#ec7c6a] flex-shrink-0" size={16} />
                <span className="text-gray-400 text-sm">info@elsupergestor.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Línea divisoria */}
      <div className="border-t border-gray-700"></div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">© 2025 El Súper Gestor. Todos los derechos reservados.</div>
          <div className="flex items-center space-x-1 text-gray-400 text-sm">
            <span>Hecho con</span>
            <FaHeart className="text-[#ec7c6a] animate-pulse" size={12} />
            <span>en Argentina</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Términos de Servicio</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;