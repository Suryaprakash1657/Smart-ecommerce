import React, { useState } from 'react';
import { assets } from '../assets/assets';

function Hero() {
  const heroImages = [assets.hero_img, assets.hero_img, assets.hero_img];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <div className="relative flex flex-col sm:flex-row border border-gray-400">
      {/* Hero Left Side (kept as-is, currently unused) */}
      <div>
        <div className="text-[#414141]">{/* Kept for potential future use */}</div>
      </div>

      {/* Hero Right Side with dynamic image */}
      <img src={heroImages[currentIndex]} alt="Hero Slide" className="w-full object-cover" />

      {/* Arrow Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-200 transition"
      >
        &#8592;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-200 transition"
      >
        &#8594;
      </button>

      {/* SHOP NOW Button only on first slide */}
      {currentIndex === 0 && (
        <div className="absolute bottom-12 left-20">
          <button className="bg-gray-800 text-white px-12 py-4 rounded-md shadow-md hover:bg-gray-700 transition-all duration-300">
            SHOP NOW
          </button>
        </div>
      )}
    </div>
  );
}

export default Hero;
