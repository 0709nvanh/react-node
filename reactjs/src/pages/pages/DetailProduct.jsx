import React from 'react'
import MainDetail from '../../components/client/pages/product-detail/MainDetail'
import RelatedProduct from '../../components/client/pages/product-detail/RelatedProduct'
import TopDetail from '../../components/client/pages/product-detail/TopDetail'

const DetailProduct = () => {
  return (
    <div className='w-full mx-auto'>
        <div className='px-[150px]'>
            <TopDetail />
            <MainDetail />
            <RelatedProduct />
        </div>
    </div>
  )
}

export default DetailProduct