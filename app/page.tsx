"use client"
import NavBar from "../components/NavBar";
import PhotoCarousel from "../components/PhotoCarousel";
import Rooms from "../components/Rooms";
import Maps from "../components/Maps";
import Route from "../components/Route";



export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <PhotoCarousel></PhotoCarousel>
      <Rooms></Rooms>
      <Maps></Maps>
      <Route></Route>

    </div>
  );
}
