import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import meeshoLogo from '../assets/meeshoLogo.svg';
import phone from '../assets/phone.png';
import './Navbar.css'

const Navbar = () => {
    const [visible, setVisible] = useState(false);

    const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

    const logout = () => {
        navigate('/login');
        localStorage.removeItem('token');
        setToken('');
        setCartItems({});
    };

    const sidebarStyles = {
        position: 'fixed', 
        top: 0,
        right: visible ? '0' : '-100%', 
        bottom: 0,
        width: '80%',
        backgroundColor: 'white',
        transition: 'right 0.3s ease-in-out',
        zIndex: 50,
        paddingTop: '1rem',
    };

    const navLinkStyles = {
        padding: '15px 20px',
        display: 'block',
        textDecoration: 'none',
        color: 'grey',
        borderBottom: '1px solid #eaeaea',
    };

    return (
        <div className="navbar flex items-center justify-between py-5 font-medium">
            <Link to='/'><img src={meeshoLogo} className='w-28 sm:w-36' alt="" /></Link>

            <div className="hidden sm:flex items-center justify-between">
                <div className="flex items-center gap-4">
                  
                    <div className="relative group">
                        <div className="flex items-center gap-2 cursor-pointer">
                            <img src={phone} alt="Download App" className="w-5 h-5 sm:w-6 sm:h-6" />
                            <p className="text-gray-600 text-sm sm:text-base">Download App</p>
                        </div>
                        <div className="absolute opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transform transition-all duration-300 ease-in-out top-full mt-2 w-48 bg-white shadow-md rounded-md">
                            <a href="https://apps.apple.com/in/app/meesho/id1457958492" target='_blank' rel="noopener noreferrer" className="block px-4 py-2 hover:bg-black hover:text-white">
                                Download for iOS
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.meesho.supply" target='_blank' rel="noopener noreferrer" className="block px-4 py-2 hover:bg-black hover:text-white">
                                Download for Android
                            </a>
                        </div>
                    </div>
                  
                    <div className="h-6 sm:h-7 border-r border-gray-300"></div>

                 
                    <a href="https://supplier.meesho.com/?utm_source=meesho&utm_medium=website&utm_campaign=header" target='_blank' rel="noopener noreferrer">
                        <div className="flex items-center gap-2 cursor-pointer">
                            <p className="text-gray-600 text-sm sm:text-base">Become a Supplier</p>
                        </div>
                    </a>
                  
                    <div className="h-6 sm:h-7 border-r border-gray-300"></div>

                    
                    <a href="https://www.meesho.io/news" target="_blank" rel="noopener noreferrer">
                        <div className="flex items-center gap-2 cursor-pointer">
                            <p className="text-gray-600 text-sm sm:text-base">Newsroom</p>
                        </div>
                    </a>
                    <div className="h-6 sm:h-7 border-r border-gray-300"></div>
                </div>

              
                <div className="flex items-center gap-6 ml-4">
                    <ul className='flex gap-5 text-lg text-gray-700'>
                        <NavLink to='/collection' className="text-gray-600">Collection</NavLink>
                        <div className="h-6 sm:h-7 border-r border-gray-300"></div>
                        <NavLink to='/about' className="text-gray-600">About</NavLink>
                        <div className="h-6 sm:h-7 border-r border-gray-300"></div>
                        <NavLink to='/contact' className="text-gray-600">Contact</NavLink>
                        <div className="h-6 sm:h-7 border-r border-gray-300"></div>
                    </ul>
                </div>
            </div>

           
            <div className='flex items-center gap-6'>
                <img onClick={() => { setShowSearch(true); navigate('/collection') }} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />

                <div className='relative group'>
                    <img onClick={() => token ? null : navigate('/login')} className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />
                    {token && (
                        <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                                <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                                <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
                            </div>
                        </div>
                    )}
                </div>

                <Link to='/cart' className='relative'>
                    <img src={assets.cart_icon} className='w-5' alt="" />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white rounded-full text-[8px]'>{getCartCount()}</p>
                </Link>

                
                <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="MENU" />
            </div>

           
            <div style={sidebarStyles}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} style={navLinkStyles} to='/'>HOME</NavLink>
                    <NavLink onClick={() => setVisible(false)} style={navLinkStyles} to='/collection'>COLLECTION</NavLink>
                    <NavLink onClick={() => setVisible(false)} style={navLinkStyles} to='/about'>ABOUT</NavLink>
                    <NavLink onClick={() => setVisible(false)} style={navLinkStyles} to='/contact'>CONTACT</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
