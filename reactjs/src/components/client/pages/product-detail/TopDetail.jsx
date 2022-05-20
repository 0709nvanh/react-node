import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BsArrowRightShort } from "react-icons/bs";
import { useEffect } from 'react';
import { readProduct } from '../../../../apis/product';


const TopDetail = () => {
    const [product, setProduct] = useState()
    const { slug } = useParams()

    useEffect(() => {
        const getSlug = async () => {
            const { data } = await readProduct(slug);
            // console.log('slug', data);
            setProduct(data)
        }
        getSlug()
    }, [])
  return (
    <div>
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
                                    <Link to="/product" className='p-4'>Product</Link>
                                    <span><BsArrowRightShort /></span>
                                    <span>{product?.name}</span>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopDetail