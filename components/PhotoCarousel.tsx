'use client';

import React, { useState} from 'react';
import tayrona1 from "../public/tayrona1.jpg";
import tayrona2 from "../public/tayrona2.webp";
import tayrona3 from "../public/tayrona3.jpg";
import tayrona4 from "../public/tayrona4.jpg";
import Image from "next/image";

const PhotoCarousel = () => {
  const images = [tayrona1, tayrona2, tayrona3, tayrona4];
  const [currentIndex, setCurrentIndex] = useState(1); // Inicia en la primera imagen real
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTransitionEnd = () => {
    setIsAnimating(false);
    if (currentIndex === 0) {
      setCurrentIndex(images.length); // Mover al último elemento real
    } else if (currentIndex === images.length + 1) {
      setCurrentIndex(1); // Mover al primer elemento real
    }
  };

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="relative w-full h-auto overflow-hidden">
      {/* Slides */}
      <div
        className={`flex transition-transform duration-500 ${
          isAnimating ? "" : "transition-none"
        }`}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {/* Duplicar la última imagen al principio */}
        <div className="w-full h-full flex-shrink-0">
          <Image
            alt="Duplicate Last"
            src={images[images.length - 1]}
            className="w-full h-full"
            width={1920}
            height={1080}
            priority
          />
        </div>
        {/* Imágenes reales */}
        {images.map((image, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <Image
              alt={`Slide ${index}`}
              src={image}
              className="w-full h-full object-cover"
              width={1920}
              height={1080}
              priority
            />
          </div>
        ))}
        {/* Duplicar la primera imagen al final */}
        <div className="w-full h-full flex-shrink-0">
          <Image
            alt="Duplicate First"
            src={images[0]}
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
            priority
          />
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full px-4 py-2"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full px-4 py-2"
      >
        ›
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index + 1)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index + 1 ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoCarousel;
