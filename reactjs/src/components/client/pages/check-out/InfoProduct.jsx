import React, { useEffect } from 'react'
import { useState } from 'react'
import { getProduct } from '../../../../apis/product'

const InfoProduct = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        const getDetailCart = async () => {
            const { data } = await getProduct()
            setProduct(data)
        }
        getDetailCart()
    }, [])
  return (
    <div className='w-3/4 border-l-2 bg-[#f3f3f3]'>
        <div className='pt-[72px] pl-[44px] pr-[80px]'>
            <div className="info-product flex items-center pb-5">
                <div className="image-product">
                    <img className='w-[75px] border-[1px] bg-[#bebebe] border-[#bebebe] object-cover rounded-md' src="https://cdn.shopify.com/s/files/1/0595/7291/2305/products/3_8d5afff0-730c-4465-ade9-0bbd751d961c_128x128.png?v=1634293870" alt="" />
                </div>
                <div className="name px-3 w-full">
                    <p className='text-[14px]'><strong>Brown Wall Paint</strong></p>
                </div>
                <div className="price">
                    <p>$12.00</p>
                </div>
            </div>
            <hr />
            <div className='py-5'>
                <div className="subtotal flex justify-between">
                    <div>
                        <span className='text-[14px] text-[#7a7a7a]'>Shipping</span>
                    </div>
                    <div>
                    <span className='text-[14px] text-[#7a7a7a]'>$12.00</span>
                    </div>
                </div>
                <div className="subtotal flex justify-between">
                    <div>
                        <span className='text-[14px] text-[#7a7a7a]'>Subtotal</span>
                    </div>
                    <div>
                    <span className='text-[14px] text-[#7a7a7a]'>Calculated at next step</span>
                </div>
            </div>
            </div>
            
            <hr />
            <div className="total py-8 flex justify-between">
                <span>Total</span>
                <span>$12.00</span>
            </div>
        </div>
    </div>
  )
}

export default InfoProduct