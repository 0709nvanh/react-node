import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getCategories } from '../../../../apis/category'

const LeftProduct = () => {
    const [categories, setCategories] = useState()

    useEffect(() => {
        const getCate = async () => {
            const { data } = await getCategories()
            // console.log('data', data);
            setCategories(data)
        }
        getCate()
    }, [])
  return (
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
                            <Link to="/" className='text-[15px] hover:text-[#797979] hover:font-medium transition-all duration-300 ease-in-out'><span>{item.name}</span></Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default LeftProduct