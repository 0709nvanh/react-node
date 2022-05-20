import React from 'react'
import { BsArrowRight, BsPinterest, BsInstagram, BsFacebook } from "react-icons/bs"
import { Link } from 'react-router-dom'
import '../css/footer.css'

const Footer = () => {
  return (
    <div>
        <div className="top-footer text-center mt-3 pt-5">
            <div className="title items-center">
                <h2 className='uppercase font-bold text-[25px]'>
                    get voucher
                </h2>
                <p className='text-[16px] text-[#666666]'>
                    Subscribe to get voucher 50% and more special offer
                </p>
            </div>
            <div className="form flex w-[600px] relative mx-auto">
                <input type="text"  class="w-[400px] hover:border-indigo-500 transition-all duration-300 ease-linear flex-1 block p-3 border-2 rounded-[40px] sm:text-sm border-gray-300" placeholder="Enter your email..." />
                <button className='absolute top-[15px] left-[560px] text-[#666] text-[20px] hover:text-[#3d3c3c]'><BsArrowRight /></button>
            </div>
        </div>
        <div className="flex justify-between mx-auto px-[80px] items-center">
            <div className="icon-company">
                <ul className="flex flex-row items-center justify-center font-roboto">
                    <li className="mx-[10px] color-[#252a2b]">
                        <img className='item-icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png" alt="" />
                    </li>
                    
                    <li className="mx-[10px] color-[#252a2b]">
                        <img className='item-icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png" alt="" />
                    </li>
                    
                    <li className="mx-[10px] color-[#252a2b]">
                        <img className='item-icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png" alt="" />
                    </li>
                    
                    <li className="mx-[10px] color-[#252a2b]">
                        <img className='item-icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png" alt="" />
                    </li>
                    
                </ul>
            </div>
            <div className="image py-4">
                <img alt="" className="h-[39px] w-[150px]" src="https://cdn.shopify.com/s/files/1/0031/3072/0369/files/logo_2_150x@2x.png?v=1622352543"/>
            </div>
            <div className="menu-right flex items-center font-roboto">
                <div className="icon-company">
                    <ul className="flex flex-row items-center justify-center font-roboto">
                        <li className="mx-[10px] color-[#252a2b]">
                            <Link to="" className='hover:text-[#b4b0b0] transition-all duration-300 ease-linear'>
                                <BsPinterest />
                            </Link>
                        </li>
                        <li className="mx-[10px] color-[#252a2b] hover:text-[#b4b0b0] transition-all duration-300 ease-linear">
                            <BsInstagram />
                        </li>
                        <li className="mx-[10px] color-[#252a2b] hover:text-[#b4b0b0] transition-all duration-300 ease-linear">
                            <BsFacebook />
                        </li>
                        <li className="mx-[10px] color-[#252a2b] hover:text-[#b4b0b0] transition-all duration-300 ease-linear">
                            <BsPinterest />
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        
    </div>
  )
}

export default Footer