import React, { useState } from 'react'
import { useEffect } from 'react'
import { getProduct, getRelatedCate, sortByName } from '../../../../apis/product'
import {BsFillEnvelopeFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { BsArrowUp, BsArrowDown } from "react-icons/bs";
import { getCategories } from '../../../../apis/category'


const ListProduct = () => {
    const [products, setProducts] = useState()
    const [categories, setCategories] = useState()

    useEffect(() => {
        const getCate = async () => {
            const { data } = await getCategories()
            // console.log('data', data);
            setCategories(data)
        }
        getCate()
    }, [])

    useEffect(() => {
        const getProducts = async () => {
            const { data } = await getProduct()
            // console.log('data', data);
            setProducts(data)
        }
        getProducts()
    }, [])

    const onChangeProduct = async (e) => {
        // console.log('value', e.target.value);
        const { data } = await sortByName(e.target.value)
        // console.log(data);
        setProducts(data)
    }

    const onProductsInCate = async (id) => {
        const { data } = await getRelatedCate(id)
        setProducts(data)
    }
  return (
    <div className='px-9 flex'>
        <div className="overscroll-contain h-full">
            <h3 className="text-3xl p-5 font-medium xl:px-0 xl:mb-8 xl:py-0">Filter</h3>
            <div className="price py-3">
                <h3 className='font-medium	'>Price</h3>
                <div className='flex items-center py-4'>
                    <div className="from relative">
                        <span className='absolute left-[100px] top-3 text-[#666] text-[20px]'>$</span>
                        <input type="text" className='border-2 w-[120px] py-3 px-2 rounded-md'/>
                    </div>
                    <div className='mx-3'>To</div>
                    <div className="from relative">
                        <span className='absolute left-[100px] top-3 text-[#666] text-[20px]'>$</span>
                        <input type="text" className='border-2 w-[120px] py-3 px-2 rounded-md'/>
                    </div>
                </div>
            </div>
            <div className="category py-3">
                <h3 className='font-medium'>Category</h3>
                <div className='py-4'>
                    {categories?.map((item, index) => (
                        <div class="py-2">
                            <div key={index} className="cart">
                                <button onClick={() => onProductsInCate(item._id)} className='text-[15px] hover:text-[#797979] hover:font-medium transition-all duration-300 ease-in-out'><span>{item.name}</span></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <div className='flex-1 w-full'>
            <div className='pl-8 max-w'>
                <div className="flex items-center justify-between">
                    <div className="sort">
                        <select onChange={onChangeProduct}>
                            <option value="sortByName=asc">Name A-Z</option>
                            <option value="sortByName=desc">Name Z-A</option>
                            <option value="sortByPrice=desc">Price Increase</option>
                            <option value="sortByPrice=asc">Price Decrease</option>
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
        </div>
    </div>
  )
}

export default ListProduct