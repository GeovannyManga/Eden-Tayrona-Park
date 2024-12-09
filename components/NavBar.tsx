'use client';

import React, { useState } from "react";
import Image from "next/image";
import logo from "../public/image.png";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="fixed top-0 left-0 bg-white/10 backdrop-blur-lg shadow-lg border-b border-white/20 z-50 w-full h-20 items-center flex justify-between px-4 md:px-8">
      {/* Logo */}
      <Image
        className="w-16 h-16 rounded-lg"
        src={logo}
        width={200}
        height={100}
        alt="logo de Eden Tayrona Park"
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex w-min h-10 bg-white/80 backdrop-blur-md items-center justify-center rounded-lg p-2 shadow-md border border-white/20">
        <li className="cursor-pointer h-full px-6 bg-transparent text-gray-700 flex items-center justify-center rounded-l-md hover:bg-gray-700/10">
          Home
        </li>
        <li className="cursor-pointer h-full px-6 bg-transparent text-gray-700 flex items-center justify-center hover:bg-gray-700/10">
          Habitaciones
        </li>
        <li className="cursor-pointer h-full px-6 bg-transparent text-gray-700 flex items-center justify-center hover:bg-gray-700/10">
          Precios
        </li>
        <li className="cursor-pointer h-full px-6 bg-transparent text-gray-700 flex items-center justify-center rounded-r-md hover:bg-gray-700/10">
          Contáctanos
        </li>
      </ul>

      {/* Language Selector */}
      <select
        className="hidden md:block bg-white/80 backdrop-blur-md p-2 rounded-md border border-white/20 shadow-sm"
        name=""
        id=""
      >
        <option value="Spanish">Spanish</option>
        <option value="English">English</option>
      </select>

      {/* Mobile Menu Toggle */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 bg-gray-700/20 text-gray-700 rounded-md"
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white/50 backdrop-blur-lg shadow-lg border-t border-white/10 z-40">
          <ul className="flex flex-col items-center space-y-2 py-4">
            <li className="cursor-pointer px-6 py-2 text-gray-700 hover:bg-gray-700/10 w-full text-center">
              Home
            </li>
            <li className="cursor-pointer px-6 py-2 text-gray-700 hover:bg-gray-700/10 w-full text-center">
              Habitaciones
            </li>
            <li className="cursor-pointer px-6 py-2 text-gray-700 hover:bg-gray-700/10 w-full text-center">
              Precios
            </li>
            <li className="cursor-pointer px-6 py-2 text-gray-700 hover:bg-gray-700/10 w-full text-center">
              Contáctanos
            </li>
          </ul>
          <div className="flex justify-center py-2">
            <select
              className="bg-white/80 backdrop-blur-md p-2 rounded-md border border-white/20 shadow-sm"
              name=""
              id=""
            >
              <option value="Spanish">Spanish</option>
              <option value="English">English</option>
            </select>
          </div>
        </div>
      )}
    </nav>
  );
}
