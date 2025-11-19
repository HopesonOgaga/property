// src/constant/maincarousel.jsx
import React from "react";
import EmblaCarousel from "./EmblaCarousel"; // make sure path is correct

export const slides = [
  "/image/ceo.jpg",
  "/image/ceo.jpg",
  "/image/ceo.jpg",
  "/image/ceo.jpg",
  "/image/ceo.jpg",
];

export const options = { loop: true };

const Maincarousel = () => {
  return (
    <div className="h-screen ">
      <EmblaCarousel slides={slides} options={options} />
    </div>
  );
};

export default Maincarousel;
