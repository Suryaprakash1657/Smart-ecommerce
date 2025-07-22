import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

function ExploreProducts() {
  const { products } = useContext(ShopContext);
  const [exploreProducts, setExploreProducts] = useState([]);

  useEffect(() => {
    setExploreProducts(products.slice(0, 10));
  }, [products]);

  return (
    <div className="my-10">

      {/* Title and Button in same row, with proper sizing */}
      <div className="flex justify-between items-center px-2 py-8">
        <h2 className="text-3xl text-left">
          Explore Our Products
        </h2>
        <button className="text-sm text-white bg-red-700 px-4 py-2 rounded hover:bg-red-600 transition-all">
          View All
        </button>
      </div>

      {/* Stylish Divider Line */}
      <div className="flex w-full h-[4px] mb-4">
        <div className="w-1/5 bg-blue-500"></div>
        <div className="w-4/5 bg-gray-700"></div>
      </div>

      {/* Static Preview Images with Text Below */}
      <div className="flex flex-wrap justify-start p-3 px-4 gap-10">
        {[...Array(21)].map((_, index) => (
          <div key={index} className="flex flex-col items-center relative group">
            <div className="relative w-40 h-52">
              <img
                src="src/assets/p_img53.png"
                alt="Sample Product"
                className="w-full h-full object-cover border rounded-md shadow-sm transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <p className="mt-2 text-sm text-gray-700 text-center font-medium">
              Sample Product
            </p>
            <button className="mt-1 text-xs text-white bg-gray-800 px-4 py-1 rounded hover:bg-gray-700 transition-all">
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Dynamic Product Rendering */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {exploreProducts.map((item, index) => (
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

export default ExploreProducts;
