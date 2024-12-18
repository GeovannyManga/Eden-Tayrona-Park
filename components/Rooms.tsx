'use client'

import React from 'react';
import Image from "next/image";
import comida from "../public/comida.jpg";
import masaje from "../public/masaje.avif";
import habitacion from "../public/habitacion.jpg";

export default function Rooms() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8">
          Descubre Nuestros Servicios
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Cada una de nuestras habitaciones ofrece comodidad y estilo para una estancia inolvidable.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tarjeta 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src={comida}
              alt="Habitación 1"
              className="w-full h-64 object-cover"
              width={1000}
              height={1000}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Restaurante</h3>
              <p className="text-gray-600 mb-4">
                Disfruta de una experiencia gastronomica única en nuestro restaurante.
              </p>
              <a
                href="#"
                className="inline-block px-6 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300"
              >
                Ver más
              </a>
            </div>
          </div>

          {/* Tarjeta 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src={habitacion}
              alt="Habitación 2"
              className="w-full h-64 object-cover"
              width={1000}
              height={1000}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Habitación Familiar</h3>
              <p className="text-gray-600 mb-4">
                Perfecta para familias, con espacios amplios y cómodos para todos.
              </p>
              <a
                href="#"
                className="inline-block px-6 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300"
              >
                Ver más
              </a>
            </div>
          </div>

          {/* Tarjeta 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src={masaje}
              alt="Habitación 3"
              className="w-full h-64 object-cover"
              width={1000}
              height={1000}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Servicio de Spa</h3>
              <p className="text-gray-600 mb-4">
              Disfruta de un spa revitalizante en medio de la belleza natural del Parque Tayrona.
              </p>
              <a
                href="#"
                className="inline-block px-6 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300"
              >
                Ver más
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
