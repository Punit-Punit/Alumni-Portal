import React, { useState, useEffect } from "react";
import va1 from "./images/one.png"
import va2 from "./images/two.png"
import va3 from "./images/three.png"
import va4 from "./images/four.png"
const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transition, setTransition] = useState(false);
  // Define an array of image URLs
  const slides = [
    va1,
     va2,va3,va4
  ];

  useEffect(() => {
    // Function to move to the next slide
    const nextSlide = () => {
      setTransition(true);
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
        setTransition(false);
      }, 500); // Transition duration (0.5s)
    };

    // Set interval to change slide every 5 seconds (5000 ms)
    const interval = setInterval(nextSlide, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Function to move to a specific slide
  const moveToSlide = (slideIndex) => {
    setTransition(true);
    setTimeout(() => {
      setCurrentSlide(slideIndex);
      setTransition(false);
    }, 500); // Transition duration (0.5s)
  };

  return (
    <div className="flex justify-center m-10">
      <div className="w-9/12 mx-auto relative overflow-hidden rounded-lg border-2 border-gray-200">
        <div className="relative w-full h-96 transition-transform duration-500 transform">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full ${transition ? "transition-transform" : ""} ${currentSlide === index ? "translate-x-0" : currentSlide < index ? "translate-x-full" : "-translate-x-full"
              }`}
            >
              <img
                src={slide}
                alt={`slide-${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full">
          <button
            onClick={() =>
              moveToSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)
            }
            className="btn btn-circle bg-gray-800 text-white opacity-75 hover:opacity-100"
          >
            ❮
          </button>
          <button
            onClick={() =>
              moveToSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)
            }
            className="btn btn-circle bg-gray-800 text-white opacity-75 hover:opacity-100"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
