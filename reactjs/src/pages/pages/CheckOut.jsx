import React from 'react'
import InfoCheckOut from '../../components/client/pages/check-out/InfoCheckOut'
import InfoProduct from '../../components/client/pages/check-out/InfoProduct'

const CheckOut = () => {
  return (
        <div className='w-full'>
            <div className="flex m-0">
                <InfoCheckOut />
                <InfoProduct />
            </div>
        </div>
  )
}

export default CheckOut