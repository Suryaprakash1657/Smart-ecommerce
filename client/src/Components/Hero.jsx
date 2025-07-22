import React, { useState } from 'react';
import { assets } from '../assets/assets';
import heroImg from '../assets/hero_img1.png'; 
import heroImg1 from '../assets/hero_img2.png'; // Assuming you have another image
function Hero() {
  const heroImages = [assets.hero_img, heroImg, heroImg1];
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
      <img src={heroImages[currentIndex]} alt="Hero Slide" className="w-full h-96" />

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
      {currentIndex === 0 &&  (
        <div className="absolute bottom-5 left-20">
          <button className="bg-gray-800 text-white px-16 py-6 rounded-md shadow-md hover:bg-gray-700 transition-all duration-300">
            SHOP NOW
          </button>
        </div>
      )}
      {currentIndex === 1 && (
        <div className="absolute bottom-5 left-20">
          <button className="bg-green-800 text-white px-16 py-6 rounded-md shadow-md hover:bg-green-700 transition-all duration-300">
            BUY NOW
          </button>
        </div>
      )}

      {currentIndex === 2 && (
        <div className="absolute bottom-5 left-20">
          <button className="bg-gray-800 text-white px-8 py-6 rounded-md shadow-md hover:bg-gray-700 transition-all duration-300">
            PURCHASE NOW
          </button>
        </div>
      )}
    </div>
  );
}

export default Hero;
