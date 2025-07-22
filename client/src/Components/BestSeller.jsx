import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

// Import Lucide icons
import {
  Camera,
  Smartphone,
  Monitor,
  Watch,
  Headphones,
  Gamepad2
} from 'lucide-react';

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, SetbestSeller] = useState([]);
  const [activeCategory, setActiveCategory] = useState('Camera'); // Default active

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestSeller);
    SetbestSeller(bestProduct.slice(0, 5));
  }, [products]);

  // Category List
  const categories = [
    { label: 'Phones', icon: <Smartphone /> },
    { label: 'Computers', icon: <Monitor /> },
    { label: 'SmartWatch', icon: <Watch /> },
    { label: 'Camera', icon: <Camera /> },
    { label: 'HeadPhones', icon: <Headphones /> },
    { label: 'Gaming', icon: <Gamepad2 /> },
  ];

  return (
    <div className="my-10">
      {/* Title */}
      <div className="text-left py-8 text-3xl">
        <Title text1={'Browse By'} text2={'Category'} />
        <div className="flex w-full h-[4px] mt-2 mb-4">
          <div className="w-1/5 bg-blue-500"></div>  {/* 25% Blue */}
          <div className="w-4/5 bg-gray-700"></div>  {/* 75% Gray */}
        </div>
      </div>

      {/* Category Buttons */}
      <div className="flex items-center justify-between gap-4 flex-wrap px-2 sm:px-4 py-4">
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => setActiveCategory(category.label)}
            className={`w-28 h-28 flex flex-col items-center justify-center border rounded-lg shadow-sm cursor-pointer transition-all ${
              activeCategory === category.label
                ? 'bg-red-800 text-white'
                : 'bg-white text-black hover:bg-gray-100'
            }`}
          >
            <div className="text-2xl mb-2">{category.icon}</div>
            <p className="text-sm font-medium">{category.label}</p>
          </div>
        ))}

        {/* Navigation Arrows */}
        
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((item, index) => (
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
};

export default BestSeller;
