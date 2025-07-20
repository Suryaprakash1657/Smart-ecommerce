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
        <p className="w-18 h-[1px] sm:h-[2px] bg-gray-700 mt-2 mb-4"></p>

        {/* Static Preview Images with Text Below */}
        <div className="flex flex-wrap justify-start p-3 px-4 gap-10">
          {Array(9).fill(0).map((_, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src="src/assets/p_img2.png"
                alt="Sample Product"
                className="w-28 h-28 object-contain border rounded-md shadow-sm"
              />
              <p className="mt-2 text-sm text-gray-700 text-center">Sample Product</p>
            </div>
          ))}

          <div className="flex flex-col items-center">
            <img
              src="src/assets/p_img53.png"
              alt="Sample Product"
              className="w-28 h-28 object-contain border rounded-md shadow-sm"
            />
            <p className="mt-2 text-sm text-gray-700 text-center">Sample Product</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="src/assets/p_img53.png"
              alt="Sample Product"
              className="w-28 h-28 object-contain border rounded-md shadow-sm"
            />
            <p className="mt-2 text-sm text-gray-700 text-center">Sample Product</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="src/assets/p_img53.png"
              alt="Sample Product"
              className="w-28 h-28 object-contain border rounded-md shadow-sm"
            />
            <p className="mt-2 text-sm text-gray-700 text-center">Sample Product</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="src/assets/p_img53.png"
              alt="Sample Product"
              className="w-28 h-28 object-contain border rounded-md shadow-sm"
            />
            <p className="mt-2 text-sm text-gray-700 text-center">Sample Product</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="src/assets/p_img53.png"
              alt="Sample Product"
              className="w-28 h-28 object-contain border rounded-md shadow-sm"
            />
            <p className="mt-2 text-sm text-gray-700 text-center">Sample Product</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="src/assets/p_img53.png"
              alt="Sample Product"
              className="w-28 h-28 object-contain border rounded-md shadow-sm"
            />
            <p className="mt-2 text-sm text-gray-700 text-center">Sample Product</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="src/assets/p_img53.png"
              alt="Sample Product"
              className="w-28 h-28 object-contain border rounded-md shadow-sm"
            />
            <p className="mt-2 text-sm text-gray-700 text-center">Sample Product</p>
          </div>
          
        </div>
      </div>

      {/* Dynamic Product Rendering */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((item, index) => (
          <ProductItem
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default LatestCollections;
