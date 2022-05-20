import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getRelatedCate, readProduct } from '../../../../apis/product'
import { Link, useParams } from 'react-router-dom'

const RelatedProduct = () => {
  const [products, setProducts] = useState([])
  const { slug } = useParams()

  useEffect(() => {
    const getSlug = async () => {
      const { data } = await readProduct(slug);
      // console.log('data', data);
      if(data.category){
        const { data: data1 } = await getRelatedCate(data.category)
        // console.log('data1', data1);
        setProducts(data1)
      }
    }
    getSlug()

  }, [slug])
  return (
    <div className='py-[80px]'>
        <h3 className='text-[30px]'>You Might Also Like</h3>
        <div className="grid grid-cols-5 gap-[30px] mx-auto">
          {products?.length > 0 && products?.map((item, index) => (
            <div class="py-3">
                <div key={index} className="cart">
                    <img src="https://cdn.shopify.com/s/files/1/0595/7291/2305/products/11_b_900x.jpg?v=1635497922" alt="..." />
                    <div className="cart-body">
                        <div className='text-center pt-3'>
                          <Link to={"/" +item.slug + "/detail"} className='font-bold text-[15px]'>{item.name}</Link>
                        </div>
                        <p className='text-center font-semibold text-[#C02C30]'>{item.price}.00$</p>
                    </div>
                </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default RelatedProduct