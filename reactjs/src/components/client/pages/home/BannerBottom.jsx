import React from 'react'
import { Link } from 'react-router-dom'

const BannerBottom = () => {
  return (
    <div>
        <div className="grid grid-cols-2 gap-[20px]">
            <div className='relative overflow-hidden'>
                <img className='w-[555px] h-[321px] object-cover hover:scale-105 transition-all duration-300 ease-linear' src="https://cdn.shopify.com/s/files/1/0595/7291/2305/files/6_7e5004fe-26cf-40a5-b019-ba66ded5c416_1140x.jpg?v=1635394458" alt="" />
                <div class="absolute image-card__content flex z-10  pointer-events-none p-5 sm:p-10 inset-0 justify-start items-center">
                    <div>
                        <div className='text-left pb-9'>
                            <p className='uppercase text-white text-[16px]'>holiday favorite</p>
                            <h3 className='uppercase font-bold text-white text-[40px]'>
                                20% off
                                <br />
                                everything
                            </h3>
                        </div>
                        <Link className='text-white border-2 rounded-[45px] py-2 px-6 font-semibold text-[18px]' to="">Shop now</Link>
                    </div>
                </div>
            </div>
            <div className='relative overflow-hidden'>
                <img className='w-[555px] h-[321px] object-cover hover:scale-105 transition-all duration-300 ease-linear' 
                src="https://cdn.shopify.com/s/files/1/0595/7291/2305/files/7_f7b997db-0328-4158-83a6-d5c19bb7d910_1140x.jpg?v=1635394474" alt="" />
                <div class="absolute image-card__content flex z-10  pointer-events-none p-5 sm:p-10 inset-0 justify-start items-center">
                    <div>
                        <div className='text-left pb-9'>
                            <p className='uppercase text-white text-[16px]'>the holiday shop</p>
                            <h3 className='uppercase font-bold text-white text-[40px]'>
                                take up to
                                <br />
                                50% off
                            </h3>
                        </div>
                        <Link className='text-white border-2 rounded-[45px] py-2 px-6 font-semibold text-[18px]' to="">Shop now</Link>
                    </div>
                </div>
            </div>
            {/* <div className='relative overflow-hidden'>
                <img className='w-[555px] h-[321px] object-cover hover:scale-105 transition-all duration-300 ease-linear' src="https://cdn.shopify.com/s/files/1/0595/7291/2305/files/7_f7b997db-0328-4158-83a6-d5c19bb7d910_1140x.jpg?v=1635394474" alt="" />
                <div class="absolute image-card__content flex z-10  pointer-events-none p-5 sm:p-10 inset-0 justify-start items-center">
                    <div>
                        <p className='uppercase font-bold text-white text-[28px]'>boy sale</p>
                    </div>
                    <Link to="">Shop now</Link>
                </div>
            </div> */}
        </div>
        
    </div>
  )
}

export default BannerBottom