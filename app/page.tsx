"use client";

import dynamic from "next/dynamic";
import NavBar from "../components/NavBar";
import PhotoCarousel from "../components/PhotoCarousel";
import Rooms from "../components/Rooms";
import Route from "../components/Route";
import Footer from "../components/Footer";

// Carga dinámica del mapa solo en el cliente
const Maps = dynamic(() => import("../components/Maps"), { ssr: false});

export default function Home() {
 
  return (
    <div>
      <NavBar  />
      <PhotoCarousel />
      <Rooms />
      <Maps /> {/* Muestra el componente Maps cargado dinámicamente */}
      <Route />
      <Footer/>
    </div>
  );
}
