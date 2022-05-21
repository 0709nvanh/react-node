import React, { useState } from 'react'
import { useEffect } from 'react'
import { getProduct } from '../../../../apis/product'
import {BsFillEnvelopeFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const ListProduct = () => {
    const [products, setProducts] = useState()

    useEffect(() => {
        const getProducts = async () => {
            const { data } = await getProduct()
            console.log('data', data);
            setProducts(data)
        }
        getProducts()
    }, [])

  return (
    <div className='pl-8 max-w'>
        <div className="flex items-center justify-between">
            <div className="sort">
                <select>
                    <option value="">Name A-Z</option>
                    <option value="">Name Z-A</option>
                    <option value="">Name A-Z</option>
                </select>
            </div>
            <div className='flex-1'></div>
            <div className='flex'>
                <div className='px-2 text-[20px]'>
                    <BsFillEnvelopeFill />
                </div>
                <div className='px-2 text-[20px]'>
                    <BsFillEnvelopeFill />
                </div>
                <div className='px-2 text-[20px]'>
                    <BsFillEnvelopeFill />
                </div>
                <div className='pl-2 text-[20px]'>
                    <BsFillEnvelopeFill />
                </div>
            </div>
        </div>
        <div className="list-product">
            <div className='grid grid-cols-4 gap-4 py-[40px]'>
            {products?.map((item, index) => (
                    <div class="relative overflow-hidden">
                        <div key={index} className="">
                            <img className='w-full h-full hover:scale-105 transition-all duration-300 ease-linear' src="https://cdn.shopify.com/s/files/1/0595/7291/2305/products/52_540x.jpg?v=1638505970" alt="" />
                            <div className='text-left py-6'>
                                <Link to={"/" +item.slug + "/detail"}  className='text-[16px] hover:text-[#797979] font-medium transition-all duration-300 ease-in-out'><h3>{item.name}</h3></Link>
                                <span className='text-[16px]'>{item.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    </div>
  )
}

export default ListProduct