import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

function LatestCollections() {
  const { products } = useContext(ShopContext);
  const [latestProducts, SetlatestProducts] = useState([]);

  useEffect(() => {
    SetlatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <div className="my-10">
      {/* Section Title */}
      <div className="text-left py-8 text-3xl">
        <Title text1={'Latest'} text2={'Products'} />

        {/* Stylish Divider Line */}
        <div className="flex w-full h-[4px] mt-2 mb-4">
          <div className="w-1/5 bg-blue-500"></div>  {/* 25% Blue */}
          <div className="w-4/5 bg-gray-700"></div>  {/* 75% Gray */}
        </div>

        {/* Static Preview Images with Text Below */}
        <div className="flex flex-wrap justify-start p-3 px-4 gap-10">
  {[...Array(14)].map((_, index) => (
    <div key={index} className="flex flex-col items-center relative group">
      {/* Product Image Container */}
      <div className="relative w-40 h-52">
        {/* NEW Badge */}
        <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-md shadow">
          NEW
        </div>

        {/* 50% OFF Badge */}
        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md shadow">
          50% OFF
        </div>

        {/* Product Image */}
        <img
          src="src/assets/p_img53.png"
          alt="Sample Product"
          className="w-full h-full object-cover border rounded-md shadow-sm transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product Name */}
      <p className="mt-2 text-sm text-gray-700 text-center font-medium">
        Sample Product
      </p>

      {/* View Details Button */}
      <button className="mt-1 text-xs text-white bg-gray-800 px-4 py-1 rounded hover:bg-gray-700 transition-all">
        View Details
      </button>
    </div>
  ))}
</div>

      </div>

      {/* Dynamic Product Rendering */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default LatestCollections;
