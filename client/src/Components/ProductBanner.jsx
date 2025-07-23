import React from 'react';
import ps5 from '../assets/p_img54.png';
import laptop from '../assets/p_img55.png';
import speakers from '../assets/p_img56.png';
import camera from '../assets/p_img57.png';

const ProductBanner = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-10 px-4">
      {/* PS5 */}
      <div className="relative bg-black text-white rounded-lg overflow-hidden h-[544px]">
        <img
          src={ps5}
          alt="PlayStation 5"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 p-4 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent">
          <h3 className="text-xl font-semibold">PlayStation 5</h3>
          <p className="text-sm">Black and White version of the PS5 coming out on sale.</p>
          <button className="mt-2 text-sm underline">Shop Now</button>
        </div>
      </div>

      {/* Right column */}
      <div className="lg:col-span-2 flex flex-col gap-6">
        {/* Laptop */}
        <div className="relative bg-black text-white rounded-lg overflow-hidden h-[260px] w-full">
          <img
            src={laptop}
            alt="Laptop Collection"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent">
            {/* <h3 className="text-xl font-semibold">Laptop Collection</h3> */}
            {/* <p className="text-sm">Featured laptop collections that bring a whole new experience.</p> */}
            <button className="absolute bottom-4 left-9 text-md text-white bg-black-700 px-4 py-2 rounded hover:bg-gray-900 transition-all ">Shop Now</button>
          </div>
        </div>

        {/* Speaker & Camera */}
        <div className="grid grid-cols-2 gap-6">
          {/* Speaker */}
          <div className="relative bg-black text-white rounded-lg overflow-hidden h-[260px]">
            <img
              src={speakers}
              alt="Speakers"
             className="flex justify-center items-center w-full h-full opacity-80 object-contain"

            />
            <div className="absolute inset-0 p-4 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent">
              <h3 className="text-lg font-semibold">Speakers</h3>
              <p className="text-sm">Amazon wireless speakers</p>
              <button className="mt-2 text-sm underline">Shop Now</button>
            </div>
          </div>

          {/* Camera */}
          <div className="relative bg-black text-white rounded-lg overflow-hidden h-[260px]">
            <img
              src={camera}
              alt="Camera"
              className="flex justify-center items-center w-full h-full opacity-80 object-contain"

            />
            <div className="absolute inset-0 p-4 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent">
              <h3 className="text-lg font-semibold">Camera</h3>
              <p className="text-sm">PROSHOT X100 CAMERA</p>
              <button className="mt-2 text-sm underline">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;
