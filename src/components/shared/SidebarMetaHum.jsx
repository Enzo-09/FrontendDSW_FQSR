import React from "react";
import { RiHome6Line } from "react-icons/ri";
import { FaWpforms, FaWindowClose, FaRegUserCircle } from "react-icons/fa";
import { MdContactSupport } from "react-icons/md";
import { CiLogout, CiLogin } from "react-icons/ci";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";



const Sidebar = (props) => {
    const { showMenu, toggleUser } = props;
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

  return (
    <div className={` bg-[#317196] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 transition-all duration-300 ease-in-out shadow-lg
    ${showMenu ? 'left-0' : '-left-full'}`}>
      <div className="text-center my-4 relative group">
            <img
                src="/Images/metahumano.png" // reemplaza con la ruta real del logo
                alt="Logo El Súper Gestor MetaHumano"
                className="mx-auto w-25 h-auto cursor-pointer" // ancho fijo, altura automática para mantener proporción
            />
            {/* Tooltip estilo cómic para el logo */}
            <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                <div className="relative bg-red-500 text-white px-4 py-3 rounded-lg text-sm font-bold border-4 border-black shadow-lg transform rotate-1 whitespace-nowrap">
                <div className="relative z-10">
                    <div className="text-yellow-300 text-lg font-black tracking-wide drop-shadow-lg">
                    EL SUPER GESTOR!
                    </div>
                </div>
                {/* Puntos de estilo cómic */}
                <div className="absolute inset-0 opacity-20">
                    <div className="w-2 h-2 bg-yellow-300 rounded-full absolute top-2 left-2"></div>
                    <div className="w-1 h-1 bg-yellow-300 rounded-full absolute top-4 left-6"></div>
                    <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full absolute bottom-3 right-3"></div>
                    <div className="w-1 h-1 bg-yellow-300 rounded-full absolute bottom-2 right-6"></div>
                </div>
                {/* Flecha del tooltip estilo cómic */}
                <div className="absolute right-full top-1/2 transform -translate-y-1/2">
                    <div className="border-8 border-transparent border-r-red-500"></div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1 border-4 border-transparent border-r-black"></div>
                </div>
                {/* Efecto de sombra */}
                <div className="absolute inset-0 bg-black rounded-lg transform translate-x-1 translate-y-1 -z-10"></div>
                </div>
            </div>
      </div>

        {/* Lista de enlaces */}
      <div>
        <ul className="pl-4">
            <li className="bg-[#b8cbd6] p-4 block rounded-tl-xl rounded-bl-xl">
            <a 
                href="#" 
                className="bg-[#317196] p-4 flex justify-center block rounded-xl text-white relative group"
            >
                <RiHome6Line className="text-2xl" />
                {/* Tooltip */}
                <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-red-500 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                Inicio
                {/* Flecha del tooltip */}
                <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-red-500"></div>
                </div>
            </a>
            </li>

            <li className="hover:bg-[#b8cbd6] p-4 block rounded-tl-xl rounded-bl-xl group transition-colors">
                <a
                    href="#"
                    className="group-hover:bg-[#317196] p-4 flex justify-center block rounded-xl text-white group-hover:text-white relative"
                >
                    <FaWpforms className="text-2xl" />
                    {/* Tooltip */}
                    <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-red-500 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                    Tramites
                    {/* Flecha del tooltip */}
                    <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-red-500"></div>
                    </div>
                </a>
            </li>


            <li className="hover:bg-[#b8cbd6] p-4 block rounded-tl-xl rounded-bl-xl group transition-colors">
                <button
                    onClick={toggleUser}
                    className="group-hover:bg-[#317196] p-4 flex justify-center w-full rounded-xl text-white group-hover:text-white relative"
                >
                    <FaRegUserCircle className="text-2xl" />
                    {/* Tooltip */}
                    <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-red-500 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                    Usuario
                    {/* Flecha del tooltip */}
                    <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-red-500"></div>
                    </div>
                </button>
            </li>

            <li className="hover:bg-[#b8cbd6] p-4 block rounded-tl-xl rounded-bl-xl group transition-colors">
                <a
                    href="#"
                    className="group-hover:bg-[#317196] p-4 flex justify-center block rounded-xl text-white group-hover:text-white relative"
                >
                    <MdContactSupport className="text-2xl" />
                    {/* Tooltip */}
                    <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-red-500 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                    Soporte
                    {/* Flecha del tooltip */}
                    <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-red-500"></div>
                    </div>
                </a>
            </li>

                        
        </ul>
      </div>
      <div>
        <ul className="pl-4">
            <li className="hover:bg-[#b8cbd6] p-4 block rounded-tl-xl rounded-bl-xl group transition-colors">
                <button
                    onClick={handleLogout}
                    className="group-hover:bg-[#317196] p-4 flex justify-center w-full rounded-xl text-white group-hover:text-white relative"
                >
                    <CiLogout className="text-2xl" />
                    {/* Tooltip */}
                    <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-red-500 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                    Cerrar Sesión
                    {/* Flecha del tooltip */}
                    <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-red-500"></div>
                    </div>
                </button>
            </li>
        </ul>
      </div>
      
    </div>
  );
};

export default Sidebar;