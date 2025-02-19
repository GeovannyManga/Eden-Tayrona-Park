'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../public/image.avif";
import Link from 'next/link';
import { useLanguage } from "../components/LanguajeProvider";


export default function NavBar() {
  const {language, switchLanguage, t } = useLanguage()
  console.log(language)
  const handlerchange = (e:React.ChangeEvent<HTMLSelectElement>)=>{
    const value = e.target.value
    switchLanguage(value)
  }
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  // Detectar el tamaño de la ventana y ajustar el menú
  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.innerWidth < 768;
      setIsMobile(isSmallScreen);

      // Si estamos en pantalla grande, cerrar el menú
      if (!isSmallScreen) {
        setMenuOpen(false);
      }
    };

    // Verificar si el componente ya se ha montado antes de ejecutar el efecto
    if (typeof window !== "undefined") {
      // Llamar a handleResize al cargar el componente para la detección inicial
      handleResize();

      // Agregar el event listener para detectar cambios en el tamaño de la ventana
      window.addEventListener("resize", handleResize);

      // Limpiar el event listener cuando el componente se desmonte
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []); // Este useEffect solo corre una vez cuando el componente se monta

  // Cambiar el estado del menú
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleScrollToSection = () => {
    // Previene el comportamiento por defecto del anclaje
    const target = document.querySelector("#servicios") as HTMLElement;
    if (target) {
      const offset = -40; // Ajusta este valor para el desplazamiento deseado
      const targetPosition = target.offsetTop + offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth", // Desplazamiento suave
      });
    }
  };
  

  return (
    <nav className="fixed top-0 left-0 bg-white/10 backdrop-blur-lg shadow-lg border-b border-white/20 z-50 w-full h-20 items-center flex justify-between px-4 md:px-8">
      {/* Logo */}
      <Image
        className="w-16 h-16 rounded-lg"
        src={logo}
        width={1490}
        height={1170}
        alt="logo de Eden Tayrona Park"
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex w-auto h-10 bg-white/80 backdrop-blur-md items-center justify-center rounded-lg p-2 shadow-md border border-white/20">
        <li className="cursor-pointer h-full px-6 bg-transparent text-gray-700 flex items-center justify-center rounded-l-md hover:bg-gray-700/10">
          <Link href="/">{t.menu.home}</Link>
        </li>
        <li className="cursor-pointer h-full px-6 bg-transparent text-gray-700 flex items-center justify-center hover:bg-gray-700/10">
          <Link onClick={handleScrollToSection}  href="/#servicios" >{t.menu.servicios}</Link>
        </li>
        <li className="cursor-pointer h-full px-6 bg-transparent text-gray-700 flex items-center justify-center hover:bg-gray-700/10">
        <Link href="/about">{t.menu.sobre}</Link>
        </li>
        <li className="cursor-pointer h-full px-6 bg-transparent text-gray-700 flex items-center justify-center rounded-r-md hover:bg-gray-700/10">
          <Link href="https://wa.me/3508676834?text=Hola Eden Tayrona Park%2C%20estoy%20interesado%20en%20su%20servicio%20de%20alojamiento%20¿podrian%20darme%20mas%20informacion?">{t.menu.contacto}</Link>
        </li>
      </ul>

      {/* Language Selector */}
      <select
      onChange={handlerchange}
        className="hidden md:block bg-white/80 text-black backdrop-blur-md p-2 rounded-md border focus:outline-none focus:ring-0 border-white/40 shadow-sm"
        name=""
        id=""
        defaultValue={language}
      >
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>

      {/* Mobile Menu Toggle */}
      <button
        onClick={toggleMenu}
        className="md:hidden w-12 p-2 bg-white/40 text-gray-700 rounded-md"
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {menuOpen && isMobile && (
        <div className="md:hidden absolute top-20 left-0 w-full h-screen bg-gray-700 z-40">
          <ul className="flex flex-col items-center space-y-2 py-4">
            <li className="cursor-pointer px-6 py-2 text-white hover:bg-gray-700/10 w-full text-center">
            <Link href="/">{t.menu.home}</Link>
            </li>
            <li className="cursor-pointer px-6 py-2 text-white hover:bg-gray-700/10 w-full text-center">
            <Link onClick={()=>{setMenuOpen(false)}} href="/#servicios">{t.menu.servicios}</Link>
            </li>
            <li className="cursor-pointer px-6 py-2 text-white hover:bg-gray-700/10 w-full text-center">
              
              <Link href="/about">{t.menu.sobre}</Link>
            </li>
            <li className="cursor-pointer px-6 py-2 text-white hover:bg-gray-700/10 w-full text-center">
            <Link href="https://wa.me/3508676834?text=Hola Eden Tayrona Park%2C%20estoy%20interesado%20en%20su%20servicio%20de%20alojamiento%20¿podrian%20darme%20mas%20informacion?" >Contáctanos</Link>
            </li>
          </ul>
          <div className="flex justify-center py-2">
            <select
            onChange={handlerchange}
              className="bg-white/80 focus:outline-none focus:ring-0 text-black backdrop-blur-md p-2 rounded-md border border-white/40 shadow-sm"
              name=""
              id=""
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
            </select>
          </div>
        </div>
      )}
    </nav>
  );
}
