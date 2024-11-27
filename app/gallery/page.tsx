"use client";

import React, { useEffect, useState } from "react";

const Gallery = () => {
  const [, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([
    "./gallery1.png",
    "./gallery2.png",
    "./gallery3.png",
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext(); // Call handleNext to change the image automatically
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [images.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % images.length;
      updateImages(nextIndex);
      return nextIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = (prevIndex - 1 + images.length) % images.length;
      updateImages(nextIndex);
      return nextIndex;
    });
  };

  const updateImages = (index: number) => {
    setImages([
      images[index],
      images[(index + 1) % images.length],
      images[(index + 2) % images.length],
    ]);
  };

  return (
    <div className="bg-gray-100 py-10">
      <h2 className="text-center text-3xl text-black font-semibold mb-6">
        Gallery
      </h2>
      <br />
      <br />
      <br />
      <br />
      <div className="flex justify-center items-center space-x-4">
        <button
          onClick={handlePrev}
          className="rounded-full bg-white p-2 shadow-md focus:outline-none"
        >
          <span>&larr;</span>
        </button>
        <div className="w-full max-w-4xl flex justify-center">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Image ${index + 1}`}
              className={`rounded-lg transition-all duration-300 ${
                index === 1 // Center image is always at index 1
                  ? "z-10 transform scale-150 -translate-y-4 shadow-lg"
                  : "opacity-50"
              }`}
              style={{ width: index === 1 ? "40%" : "30%" }} // Center image is wider
            />
          ))}
        </div>
        <button
          onClick={handleNext}
          className="rounded-full bg-white p-2 shadow-md focus:outline-none"
        >
          <span>&rarr;</span>
        </button>
      </div>
    </div>
  );
};

export default Gallery;
