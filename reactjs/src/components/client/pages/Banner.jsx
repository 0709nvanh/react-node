import React from 'react'
import '../css/banner.css'
const Banner = () => {
  return (
    <div className='w-full'>
      <div className='main'>
        <div className="banner-left bg-[#f1efeb] relative">
          <div className='p-5 absolute mx-auto'>
            <div className="text mx-auto my-auto">
              <p className='text-[16px] font-semibold	text-center'>🔥 Up to 50% off almost everything</p>
              <h2 className='text-[70px] font-bold px-3 justify-center text-center'>YOUR OFFER <br />CYBER MONDAY</h2>
            </div>
            <div className="btn text-center">
              <button className='uppercase border-2 rounded-[40px] px-4 py-2 hover:text-white hover:bg-black hover:scale-105 transition-all duration-300 ease-linear'>shop collection</button>
            </div>
          </div>
          
        </div>
        <div className="banner-right">
          <img src="https://cdn.shopify.com/s/files/1/0595/7291/2305/files/1_b471756d-152f-4728-aa00-28ba1648dbf9_1440x.jpg?v=1635386875" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Banner