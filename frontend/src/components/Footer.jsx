import React from 'react'

import meeshoLogo from '../assets/meeshoLogo.svg'
const Footer = () => {
  return (
    <div className='bg-[#f0f3f5] p-4 m-2'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-4 text-sm'>

        <div>
            <img src={meeshoLogo} className='mb-5 w-32' alt="" />
            <h2>Shop Non-stop on Meesho</h2>
            <p className='w-full md:w-2/3 text-gray-600'>
            Trusted by more than 1 crore Indians <br /> Cash on  Delivery | Free Delivery
            </p>
            <p className='w-full md:w-2/3 text-gray-600 mt-4'>
              Fashnear Technologies Private Limited<br />
                        3rd Floor, Wing-E, Helios Business Park,<br />
                        Kadubeesanahalli Village, Varthur Hobli,<br />
                        Outer Ring Road Bellandur, Bangalore,<br />
                        Bangalore South, Karnataka, India, 560103<br />
                        E-mail address: <a href="mailto:query@meesho.com">query@meesho.com</a>
          </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Careers</li>
                <li>Become a supplier</li>
                <li>Hall of FameSitemap</li>
                <li>Meesho Tech blogNotices and Returns</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>Reach out to us</p>
            <ul className='flex flex-row gap-1 text-gray-600'>
                <li><img src='https://meesho.com/assets/facebook.png' alt='facebook'/>
                </li>
                <li>
                <img src='https://meesho.com/assets/instagram.png' alt='instagram'/>
                </li>
                <li>
                <img src='https://meesho.com/assets/linkedin.png' alt='linkedin'/>
                </li>
                <li>
                <img src='https://meesho.com/assets/twitter.png' alt='twitter'/>
                </li>
            </ul>
          
      </div>
    </div>
    <hr/>
    <p className='py-5 text-sm text-center'>Copyright 2024@ meesho.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
