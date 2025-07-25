//Collection == listing , collections of plot and properties


import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import { assets } from '../../assets/assets';
import Title from '../../Components/Title';
import ProductItem from '../../Components/ProductItem';

function Collection() {
  
  {/*Search Recommendation Api */}
  const {products,search,showSearch} = useContext(ShopContext);
  const[showFilter,SetshowFliter] = useState(false);
  const[filterProducts,SetFilterProducts] = useState([]);
  const [category,SetCategory] = useState([]);
  const [subCategory,SetsubCategory] = useState([]);
  const [sortType,SetsortType] = useState('relavent'); 

  const toggleCategory = (e) => {
    if(category.includes(e.target.value)){
      SetCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else{
      SetCategory(prev => [...prev,e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
        if(subCategory.includes(e.target.value)){
      SetsubCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else{
      SetsubCategory(prev => [...prev,e.target.value])
    }
  }
const applyFilter = () => {
  let productsCopy = products.slice();

  if(showSearch && search){
    productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
  }

  if (category.length > 0) {
    productsCopy = productsCopy.filter(item =>
      category.map(val => val.toLowerCase()).includes(item.category?.toLowerCase())
    );
  }

  if (subCategory.length > 0) {
    productsCopy = productsCopy.filter(item =>
      subCategory.map(val => val.toLowerCase()).includes(item.subCategory?.toLowerCase())
    );
  }

  SetFilterProducts(productsCopy);
};

const sortProduct = () => {

  let filterProductCopy = filterProducts.slice();

  switch(sortType){
    case 'low-high':
      SetFilterProducts(filterProductCopy.sort((a,b) => (a.price - b.price)));
      break;

    case 'high-low':
      SetFilterProducts(filterProductCopy.sort((a,b) => (b.price-a.price)));
      break;


    default:
      applyFilter();
      break;
  }
}


  useEffect(() => {

    applyFilter();

  },[category,subCategory,search,showSearch,products])

  useEffect(() => {
    sortProduct();
  },[sortType])



  return (
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t ">
          {/*Filter Options */}
          <div className="min-w-60">
            <p onClick={() => SetshowFliter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
              <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
            </p>

          {/*Category Filter */}
          <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block `} >
            <p className='mb-3 text-sm font-medium' >CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Phones'} onChange={toggleCategory} />Phones
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Computers'} onChange={toggleCategory} />Computers
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'SmartWatch'} onChange={toggleCategory} />SmartWatch
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Camera'} onChange={toggleCategory} />Camera
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Headphones'} onChange={toggleCategory} />Headphones
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Gaming'} onChange={toggleCategory} />Gaming
              </p>
            </div>
          </div>

          

          </div>

          {/*Right Side */}

          <div className="flex-1">
            <div className="flex justify-between text-base sm:text-2xl mb-4">
              <Title text1={'ALL'} text2={'COLLECTIONS'} />

              {/*Product Sort */}

              <select  onChange={(e) => SetsortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
                <option value="relavent">Sort by: Relavent</option>
                <option value="low-high">Sort by: low-high</option>
                <option value="high-low">Sort by: high-low</option>
              </select>
            </div>

            {/*Map Products */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
              {
                filterProducts.map((item,index) =>(
                  <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ) )
              }
            </div>
          </div>
        </div>
  )
}

export default Collection