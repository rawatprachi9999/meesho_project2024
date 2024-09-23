import React from 'react';
import banner from '../assets/banner.webp';
import delivery from '../assets/delivery.png';
import playstore from '../assets/playstore.png';

const Hero = () => {
  return (<>
    <hr className='border-gray-300' />
    <div className='flex flex-col sm:flex-row border border-gray-100 bg-[#ebedf7] mt-8'>
      {/* Hero Left Side */}
      <div className='w-full sm:w-1/2 flex flex-col items-center justify-center py-4 sm:py-0 px-4'> {/* Added padding */}
        <div className='text-center mb-4'> {/* Margin below heading */}
          <h1 className='prata-regular text-5xl sm:py-3 lg:text-4xl leading-[1.5] font-bold'>
            Lowest Prices<br />
            Best Quality Shopping
          </h1>
        </div>

            <div className='flex items-center gap-2 mb-4'>
        <img src={delivery} alt="Delivery" className='w-full' /> {/* Increased height and width */}
      
    </div>


        <div className='bg-[#5a2b8b] text-white p-2 rounded mt-4 flex items-center'> {/* Dark purple background for Play Store div */}
          <img src={playstore} alt="Play Store" className='mr-2' />
          <a 
          href="https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow&pow_click_page_type=HP&pow_distinct_id=192082ab7f61cc-0aa8098ba9b12a-26001151-e1000-192082ab7f73f2" 
          target="_blank" 
          rel="noopener noreferrer"
          className='font-bold'
  >
    Download the Meesho App
  </a>
</div>
</div>

      {/* Hero Right Side */}
      <img className='w-full sm:w-1/2 object-cover' src={banner} alt="Banner" /> {/* Added object-cover for proper image scaling */}
    </div>
    </>
  );
};

export default Hero;
