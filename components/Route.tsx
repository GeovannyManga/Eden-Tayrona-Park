"use client";

import React from "react";

// Datos de la ruta
const routeSteps = [
  {
    id: 1,
    title: "Desde Santa Marta",
    description: "Comienza tu viaje desde el centro de Santa Marta.",
    videoUrl: "https://youtu.be/KN4NIA1MCFU",
  },
  {
    id: 2,
    title: "Carretera a Riohacha",
    description: "Toma la carretera principal hacia Riohacha.",
    videoUrl: "https://youtu.be/vTvpbw3fpWw",
  },
  {
    id: 3,
    title: "Entrada al Parque Tayrona",
    description: "Llega a la entrada principal del parque.",
    videoUrl: "https://youtu.be/JvPKJEu6BGM",
  },
];


export default function RouteWithVideos() {

  const getYouTubeID = (url:string) => {
    const match = url.match(
      /(?:youtube\.com\/(?:[^\/]+\/[^\/]+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
    );
    return match ? match[1] : null;
  };
  
  return (
    <section className="bg-white py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Ruta al Parque Tayrona</h1>
          <p className="text-lg text-gray-600 mt-4">
            Sigue estos pasos para llegar al paraíso. Cada punto incluye un video con más detalles.
          </p>
        </div>

        {/* Línea de tiempo */}
        <div className="relative">
          {routeSteps.map((step, index) => (
            <div
              key={step.id}
              className="mb-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 relative"
            >
              {/* Línea de conexión */}
              {index < routeSteps.length + 1 && (
                <div className="absolute w-1 h-full bg-gray-300 left-[-0.14rem] sm:left-[-1.18rem] top-0"><div className="absolute w-4 h-4 bg-blue-500 rounded-full left-1/2 transform -translate-x-1/2  top-4 sm:top-1/2"></div></div>
              )}

              {/* Punto de la línea */}
              

              {/* Contenido */}
              <div className="w-full sm:w-1/2 text-center sm:text-left px-4">
                <h2 className="text-xl font-semibold text-gray-800">{step.title}</h2>
                <p className="text-gray-600 mt-2">{step.description}</p>
              </div>

              {/* Video */}
              <div className="w-full sm:w-1/2 px-4">
              <iframe
            width="100%"
            height="200"
            src={`https://www.youtube.com/embed/${getYouTubeID(step.videoUrl)}`}
            title={`Video sobre ${step.title}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full rounded-lg shadow-lg border border-gray-200"
          />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
