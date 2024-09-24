import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import meeshoLogo from '../assets/meeshoLogo.svg'
import phone from '../assets/phone.png'
import './Navbar.css'
const Navbar = () => {
  

    const [visible,setVisible] = useState(false);

    const {setShowSearch , getCartCount , navigate, token, setToken, setCartItems} = useContext(ShopContext);

    const logout = () => {
        navigate('/login')
        localStorage.removeItem('token')
        setToken('')
        setCartItems({})
    }

  return (

    <div className='flex items-center justify-between py-5 font-medium'>
      
      <Link to='/'><img src={meeshoLogo} className='w-36' alt="" /></Link>
      <div className="flex items-center gap-4">

        <a href="https://apps.apple.com/in/app/meesho/id1457958492" target='_blank' rel="noopener noreferrer">
        <div className="flex items-center gap-2 cursor-pointer">
            <img src={phone} alt="Download App" className="w-6 h-6" />
            <p className="text-gray-600">Download App</p>
        </div>
        </a>
        
        <div className="h-7 border-r border-gray-300"></div>

        <a href="https://supplier.meesho.com/?utm_source=meesho&utm_medium=website&utm_campaign=header" target='_blank' rel="noopener noreferrer">
        <div className="flex items-center gap-2 cursor-pointer">
            <p className="text-gray-600">Become a Supplier</p>
        </div>
        </a>

        <div className="h-7 border-r border-gray-300"></div>

        <a href="https://www.meesho.io/news" target="_blank" rel="noopener noreferrer">
        <div className="flex items-center gap-2 cursor-pointer">
            <p className="text-gray-600">Newsroom</p>
            
        </div>
        </a>
            
        </div>

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        
        <NavLink to='/collection' className="flex items-center gap-2 cursor-pointer">
            <p className="text-gray-600  text-lg">Collection</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

        <NavLink to='/about' className='flex items-center gap-2 cursor-pointer'>
            <p className="text-gray-600  text-lg">About</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

        <NavLink to='/contact' className='flex items-center gap-2 cursor-pointer'>
            <p className="text-gray-600  text-lg">Contact</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

      </ul>
      



      <div className='flex items-center gap-6'>
            <img onClick={()=> { setShowSearch(true); navigate('/collection') }} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
            
            <div className='group relative w-full'>
                <img onClick={()=> token ? null : navigate('/login') } className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />
                
                {/* Dropdown Menu */}
                {token && 
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5  bg-slate-100 text-gray-500 rounded'>
                        <p className='cursor-pointer hover:text-black'>My Profile</p>
                        <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                        <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
                    </div>
                </div>}
            </div> 
            <Link to='/cart' className='relative'>
                <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
                <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
            </Link> 
            <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" /> 
      </div>

        {/* Sidebar menu for small screens */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
                </div>
        </div>

    </div>
  )
}

export default Navbar
