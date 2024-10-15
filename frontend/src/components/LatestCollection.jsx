import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem';
import reseller from '../assets/reseller.png'
import store from '../assets/store.png'
const LatestCollection = () => {

  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products])

  return (
    <div className='my-10'>

      <div className='flex items-center justify-center py-8'>

        <div className='h-0.5 w-[200px] bg-black mr-4'></div>

        <div className='text-4xl font-bold'>
          Top Categories to choose from
        </div>

        <div className='h-0.5 w-[200px] bg-black ml-4'></div>
      </div>
      <div>


        <a href="/collection" >
          <img className='mb-6' src={store} alt="store" />
        </a>
      </div>
      <div className='flex items-center justify-center py-8'>

        <div className='h-0.5 w-[200px] bg-black mr-4'></div>

        <div className='text-4xl font-bold'>
          Latest Collections
        </div>

        <div className='h-0.5 w-[200px] bg-black ml-4'></div>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          latestProducts.map((item, index) => (
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
          ))
        }
      </div>

      <div className='mt-6'>
        <a href='https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow&pow_click_page_type=HP&pow_distinct_id=191b1b954c218-03f3a26fdcb07e-26001151-e1000-191b1b954c3347'
          target="_blank">
          <img src={reseller} alt='reseller_image' />
        </a>
      </div>


    </div>


  )
}

export default LatestCollection
