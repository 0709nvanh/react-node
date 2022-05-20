import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { limitProduct } from '../../../../apis/product'

const GetProduct = () => {
    const [ products, setProducts ] = useState()

    useEffect(() => {
        const getLimitProduct = async () => {
            const { data } = await limitProduct(4)
            setProducts(data)
        }
        getLimitProduct()
    }, [])
  return (
    <div>
        <div className='pt-[90px] pb-[40px]'>
        <div className='text-center'>
            <a href='' className='uppercase text-[34px] text-[#C02C30] font-bold'>flash sale</a>
        </div>
          <div className="grid grid-cols-4 gap-[30px] mx-auto">
              {products?.map((item, index) => (
                  <div class="py-3">
                      <div key={index} className="cart">
                          <img src="https://cdn.shopify.com/s/files/1/0595/7291/2305/products/11_b_900x.jpg?v=1635497922" alt="..." />
                          <div className="cart-body">
                              <div className='text-center pt-3'>
                                <Link to="/" className='font-bold text-[15px]'>{item.name}</Link>
                              </div>
                              <p className='text-center font-semibold text-[#C02C30]'>{item.price}.00$</p>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
        </div>
    </div>
  )
}

export default GetProduct