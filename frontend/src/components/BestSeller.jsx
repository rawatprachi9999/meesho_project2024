import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

import ProductItem from './ProductItem';

const BestSeller = () => {

    const {products} = useContext(ShopContext);
    const [bestSeller,setBestSeller] = useState([]);

    useEffect(()=>{
        const bestProduct = products.filter((item)=>(item.bestseller));
        setBestSeller(bestProduct.slice(0,5))
    },[products])

  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
          <div className='flex items-center justify-center py-8'>
          <div className='h-0.5 w-[100px] bg-black mr-4'></div>
            <div className='text-4xl font-bold'>
            Best Seller
          </div>
     <    div className='h-0.5 w-[100px] bg-black ml-4'></div>
      </div>

        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        The Most Popular and Trusted Products Chosen by Shoppers Like You!
        </p>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
            bestSeller.map((item,index)=>(
                <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
            ))
        }
      </div>
    </div>
  )
}

export default BestSeller
