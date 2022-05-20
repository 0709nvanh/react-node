import React from 'react'

const ListItemShopNow = () => {
  return (
    <div>
        <div className='text-center'>
            <a href='' className='uppercase text-[34px] text-[#C02C30] font-bold'>flash sale</a>
        </div>
        <div className="grid grid-cols-3 gap-[30px] mx-auto">
            <div className='relative overflow-hidden'>
                <a href="">
                    <img class="hover:scale-105 transition-all duration-300 ease-linear" src="https://cdn.shopify.com/s/files/1/0595/7291/2305/files/4_879acc3c-8861-4431-8e64-c9384dcee3b6_720x.jpg?v=1635393565" alt="" />
                </a>
                <div class="absolute flex flex-col justify-center z-10 inset-0 left-[96px] pointer-events-none group">
                    <div>
                        <p className='uppercase font-bold text-white text-[28px]'>boy sale</p>
                    </div>
                    <div className="shop-now">
                        <button className='uppercase border-2 rounded-[40px] px-4 py-2 text-white hover:scale-105 hover:text-black transition-all duration-300 ease-linear'>shop now</button>
                    </div>
                </div>
            </div>
            <div className='relative overflow-hidden'>
                <a href="">
                    <img class="hover:scale-105 transition-all duration-300 ease-linear" 
                    src="https://cdn.shopify.com/s/files/1/0595/7291/2305/files/5_52824fc9-258b-4d25-bdcf-3ebba196d92b_740x.jpg?v=1635393582" alt="" />
                </a>
                <div class="absolute flex flex-col justify-center z-10 inset-0 left-[96px] pointer-events-none group">
                    <div>
                        <p className='uppercase font-bold text-white text-[28px]'>boy sale</p>
                    </div>
                    <div className="shop-now">
                        <button className='uppercase border-2 rounded-[40px] px-4 py-2 text-white hover:scale-105 hover:text-black transition-all duration-300 ease-linear'>shop now</button>
                    </div>
                </div>
            </div>
            <div className='relative overflow-hidden'>
                <a href="">
                    <img class="hover:scale-105 transition-all duration-300 ease-linear" src="https://cdn.shopify.com/s/files/1/0595/7291/2305/files/3_44d12ace-b513-4049-ada9-68c9ce0cb8b1_720x.jpg?v=1635393549" alt="" />
                </a>
                <div class="absolute flex flex-col justify-center z-10 inset-0 left-[96px] pointer-events-none group">
                    <div>
                        <p className='uppercase font-bold text-white text-[28px]'>boy sale</p>
                    </div>
                    <div className="shop-now">
                        <button className='uppercase border-2 rounded-[40px] px-4 py-2 text-white hover:scale-105 hover:text-black transition-all duration-300 ease-linear'>shop now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ListItemShopNow