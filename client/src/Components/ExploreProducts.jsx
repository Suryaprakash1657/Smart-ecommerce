import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';
import { FaHeart } from 'react-icons/fa';

// 1️⃣ Create an array of 21 image paths (make sure these files exist in src/assets/)
const previewImages = [
  'src/assets/p_img1.png',
  'src/assets/p_img2.png',
  'src/assets/p_img3.png',
  'src/assets/p_img4.png',
  'src/assets/p_img5.png',
  'src/assets/p_img6.png',
  'src/assets/p_img7.png',
  'src/assets/p_img8.png',
  'src/assets/p_img9.png',
  'src/assets/p_img10.png',
  'src/assets/p_img11.png',
  'src/assets/p_img12.png',
  'src/assets/p_img13.png',
  'src/assets/p_img14.png',
  // 'src/assets/p_img15.png',
  // 'src/assets/p_img16.png',
  // 'src/assets/p_img17.png',
  // 'src/assets/p_img18.png',
  // 'src/assets/p_img19.png',
  // 'src/assets/p_img20.png',
  // 'src/assets/p_img21.png',
];

function ExploreProducts() {
  const { products } = useContext(ShopContext);
  const [exploreProducts, setExploreProducts] = useState([]);
  const [liked, setLiked] = useState(Array(previewImages.length).fill(false));

  useEffect(() => {
    setExploreProducts(products.slice(0, 10));
  }, [products]);

  const toggleHeart = (index) => {
    const newLiked = [...liked];
    newLiked[index] = !newLiked[index];
    setLiked(newLiked);
  };

  return (
    <div className="my-10">
      {/* Title and Button */}
      <div className="flex justify-between items-center px-2 py-8">
        <h2 className="text-3xl text-left">Explore Our Products</h2>
        <button className="text-sm text-white bg-red-700 px-4 py-2 rounded hover:bg-red-600 transition-all">
          View All
        </button>
      </div>

      {/* Divider */}
      <div className="flex w-full h-[4px] mb-4">
        <div className="w-1/5 bg-blue-500"></div>
        <div className="w-4/5 bg-gray-700"></div>
      </div>

      {/* Static Preview Images with Heart Icon */}
      <div className="flex flex-wrap justify-start p-3 px-4 gap-10">
        {previewImages.map((imgSrc, index) => (
          <div key={index} className="flex flex-col items-center relative">
            <div className="relative w-40 h-52">
              {/* Heart Icon Button */}
              <button
                onClick={() => toggleHeart(index)}
                className="absolute top-2 right-2 p-1 bg-white rounded-full shadow z-10 hover:scale-105 transition-transform"
              >
                <FaHeart
                  className={`text-lg transition-colors duration-300 ${
                    liked[index] ? 'text-red-600' : 'text-gray-400'
                  }`}
                />
              </button>

              {/* Product Image */}
              <img
                src={imgSrc}
                alt={`Sample Product ${index + 1}`}
                className="w-full h-full object-cover border rounded-md shadow-sm transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Product Info */}
            <p className="mt-2 text-sm text-gray-700 text-center font-medium">
              Sample Product {index + 1}
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
