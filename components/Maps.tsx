"use client";

import L from "leaflet";
import cabana from "../public/cabana.png";
import type { LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import React from "react";
import { MapContainer, Marker, Tooltip, TileLayer } from "react-leaflet";

// Coordenadas del marcador
const position: LatLngTuple = [11.2899303, -73.9123437];

// Crear el ícono personalizado
const cabanaIcon = L.icon({
  iconUrl: cabana.src,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

// Datos del marcador
const markerData = {
  name: "Eden Tayrona Park",
  position: position,
};

export default function LocationSection() {
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Ubicación
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mt-4">
            Descubre cómo llegar al paraíso. Encuentra la ubicación exacta de{" "}
            <strong>Eden Tayrona Park</strong> y disfruta de una experiencia
            inolvidable en el parque Tayrona.
          </p>
        </div>

        {/* Contenido */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
          {/* Texto descriptivo */}
          <div className="lg:w-1/2 text-gray-700">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Cómo llegar al parque Tayrona
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              El parque Tayrona se encuentra ubicado a las afueras de Santa
              Marta, Colombia. Puedes llegar fácilmente en transporte público o
              vehículo privado. Desde Santa Marta, toma la carretera principal
              hacia Riohacha. Sigue las señales hacia la entrada principal del
              parque. ¡Es el destino perfecto para disfrutar de la naturaleza y
              la tranquilidad del Caribe colombiano!
            </p>
          </div>

          {/* Mapa */}
          <div className="lg:w-1/2">
            <MapContainer
              style={{
                height: "300px",
                width: "100%",
                borderRadius: "12px",
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                zIndex: 1,
              }}
              center={position}
              zoom={13}
              scrollWheelZoom={true}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={markerData.position} icon={cabanaIcon}>
                <Tooltip permanent direction="top" offset={[0, -20]}>
                  <strong>{markerData.name}</strong>
                </Tooltip>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
