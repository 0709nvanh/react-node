import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRightShort } from "react-icons/bs";
import LeftProduct from '../../components/client/pages/product/LeftProduct';
import ListProduct from '../../components/client/pages/product/ListProduct';

const Product = () => {
  return (
    <div div className='w-full mx-auto'>
        <div className='px-[90px]'>
            <div className='flex items-center justify-center relative py-[70px]'>
                <div className='absolute -inset-0 bg-color bg-no-repeat bg-cover bg-center pointer-events-none'></div>
                <div class="container text-center">
                    <div class="relative z-1 text-dark">
                        <h1 class="collection-header__title lg:text-[42px] text-2xl capitalize">product</h1>
                        <div class="sf-breadcrumb w-full ">
                            <nav>
                                <div class="flex -mx-4 items-center justify-center">
                                    <Link className='p-4 hover:text-[#666]' to="/">Home</Link>
                                    <span><BsArrowRightShort /></span>
                                    <span className='p-4'>Product</span>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='px-9 flex'>
            <LeftProduct />
            <div className='flex-1 w-full'>
                <ListProduct />
            </div>
        </div>
    </div>
  )
}

export default Product