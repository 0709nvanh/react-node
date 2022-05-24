import React, { useEffect } from 'react'
import { useState } from 'react'
import { getProduct } from '../../../../apis/product'

const InfoProduct = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        const carts = localStorage.getItem('cart')
        if(JSON.parse(carts).length > 0){
            setProduct(JSON.parse(carts))
        } 
    }, [])
    
    let total = 0;
    if(product?.length > 0){
        product.forEach((item) => {
            total += item.quantityProduct * item.price
        })
    }
  return (
    <div className='w-3/4 border-l-2 bg-[#f3f3f3]'>
        <div className='pt-[72px] pl-[44px] pr-[80px]'>
            {product?.map((item, index) => (
            <div className="info-product flex items-center pb-5">
                <div className="image-product">
                    <img className='w-[75px] border-[1px] bg-[#bebebe] border-[#bebebe] object-cover rounded-md' src="https://cdn.shopify.com/s/files/1/0595/7291/2305/products/3_8d5afff0-730c-4465-ade9-0bbd751d961c_128x128.png?v=1634293870" alt="" />
                </div>
                <div className="name px-3 w-full">
                    <p className='text-[12px]'><strong>{item.name}</strong></p>
                </div>
                <div className="quantity pr-[80px] flex">
                    <p>{item.quantityProduct}</p>
                    <p>x</p>
                </div>
                <div className="price">
                    <p>${item.price}</p>
                </div>
            </div>
            ))}
            <hr />
            <div className="total py-8 flex justify-between">
                <span>Total</span>
                <span>${total}</span>
            </div>
        </div>
    </div>
  )
}

export default InfoProduct