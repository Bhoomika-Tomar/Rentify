import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router'

const Footer = () => {
    const navigate = useNavigate('/')
    const handleNavigate = () =>{
        navigate('/');
        window.scrollTo(0,0);
    }
  return (
        <footer className="px-6 mt-8 md:px-16 lg:px-24 xl:px-32 w-full bg-gray-50 border-t border-gray-200">
            <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-12">
                
                {/* Left Section */}
                <div className="max-w-96">
                    <img src={assets.Logo} alt="Rentify" className='h-12 cursor-pointer' onClick={()=>handleNavigate()} />
                    <p className="mt-6 text-sm text-gray-600 leading-relaxed">
                        Rentify is your trusted rental platform helping landlords and tenants connect easily.
                        Find the best properties tailored to your comfort and needs.
                    </p>
                    <div className="flex items-center gap-4 mt-4">
                        <a href="#"><i className="fab fa-twitter text-gray-500 hover:text-gray-700 text-lg"></i></a>
                        <a href="#"><i className="fab fa-facebook text-gray-500 hover:text-gray-700 text-lg"></i></a>
                        <a href="#"><i className="fab fa-linkedin text-gray-500 hover:text-gray-700 text-lg"></i></a>
                        <a href="#"><i className="fab fa-instagram text-gray-500 hover:text-gray-700 text-lg"></i></a>
                    </div>
                </div>
        
                {/* Middle Sections */}
                <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-10">
                    
                    {/* Resources */}
                    <div>
                        <h2 className="font-semibold text-gray-900 mb-5">RESOURCES</h2>
                        <ul className="text-sm text-gray-600 space-y-2 list-none">
                            <li><a href="#" className="hover:text-gray-900 transition">Documentation</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition">Tutorials</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition">Blog</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition">Community</a></li>
                        </ul>
                    </div>

                    {/* NEW SECTION: Support */}
                    <div>
                        <h2 className="font-semibold text-gray-900 mb-5">SUPPORT</h2>
                        <ul className="text-sm text-gray-600 space-y-2 list-none">
                            <li><a href="#" className="hover:text-gray-900 transition">Help Center</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition">FAQs</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition">Contact Us</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition">Report an Issue</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h2 className="font-semibold text-gray-900 mb-5">COMPANY</h2>
                        <ul className="text-sm text-gray-600 space-y-2 list-none">
                            <li><a href="#" className="hover:text-gray-900 transition">About</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition">Careers</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition">Privacy</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition">Terms</a></li>
                        </ul>
                    </div>
                </div>
        
            </div>

            {/* Bottom Bar */}
            <p className="py-6 text-center text-xs md:text-sm text-gray-500 border-t border-gray-200">
                Copyright 2025 © <span className="font-semibold text-gray-700">rentify</span>. All Rights Reserved.
            </p>
        </footer>
  )
}

export default Footer
