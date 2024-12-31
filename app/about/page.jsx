import React from 'react';
import Image from 'next/image';
import NavBar from '../../components/NavBar';
import Footer from "../../components/Footer";

export default function About() {
  return (
    <div>
      {/* NavBar */}
      <NavBar />

      {/* About Section */}
      <section
        className="bg-gray-100 py-12 px-4 md:px-8 lg:px-16 pt-28"
        id="about"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Section: Image */}
          <div className="relative w-full h-80 md:h-[500px]">
            <Image
              src="/hostal.jpg"
              alt="Vista del hostal Eden Tayrona Park"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Right Section: Content */}
          <div className="flex flex-col space-y-4 text-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Bienvenidos a Eden Tayrona Park
            </h2>
            <p className="text-lg leading-relaxed">
              Ubicado en el corazón del Parque Nacional Natural Tayrona, Eden Tayrona Park es
              un lugar ideal para familias y turistas que buscan una experiencia única en la
              naturaleza. Nuestro hostal ofrece un entorno tranquilo y cómodo, rodeado de la
              belleza natural que caracteriza esta increíble región.
            </p>
            <p className="text-lg leading-relaxed">
              Fundado y dirigido por <strong>Alex Casimiro</strong>, Eden Tayrona Park combina
              hospitalidad cálida con instalaciones diseñadas para tu confort. Además de nuestro
              alojamiento, ofrecemos un restaurante donde puedes disfrutar de{' '}
              <strong>comidas típicas</strong>, elaboradas con ingredientes locales para deleitar
              tu paladar.
            </p>
            <p className="text-lg leading-relaxed">
              Ya sea que estés planeando unas vacaciones familiares, una escapada romántica o una
              aventura en solitario, en Eden Tayrona Park te garantizamos una experiencia
              inolvidable.
            </p>
            <a
              href="https://wa.me/3508676834?text=Hola Eden Tayrona Park%2C%20estoy%20interesado%20en%20su%20servicio%20de%20alojamiento%20¿podrian%20darme%20mas%20informacion?"
              className="text-center mt-4 inline-block bg-green-600 text-white py-4 px-8 rounded-lg shadow-md hover:bg-green-700 transition"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
