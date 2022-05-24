import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const InfoCheckOut = () => {
    const [product, setProduct] = useState([])
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [user, setUsers] = useState()

    useEffect(() => {
        const auth = localStorage.getItem('auth')
        setUsers(JSON.parse(auth).user)
    }, [])

    const onAddCartProduct = () => {

    }
    useEffect(() => {
        const ProductLocal = localStorage.getItem('cart')
        if(JSON.parse(ProductLocal).length>0){
            setProduct(JSON.parse(ProductLocal))
        }
        console.log('product', product);
    }, [])
  return (
    <div className='w-full'>
        <div className="info-user pl-[200px] pr-[50px] py-8">
            <div className="image-title">
                <Link to="/"><img className="w-[200px] object-cover m-0" src="https://cdn.shopify.com/s/files/1/0031/3072/0369/files/logo_2_150x@2x.png?v=1622352543" alt="" /></Link>
            </div>
            <div>
                <form action="" onSubmit={handleSubmit(onAddCartProduct)}>
                    {
                        user?.username ? "" : 
                        <div>
                            <div className='flex justify-between items-baseline flex-wrap pt-7'>
                                <h1>Contact information</h1>
                                <span className='text-[14px]'>Already have an account?<Link to="/" className='pl-1 text-blue-600 hover:text-blue-800 transition-all duration-300 ease-linear'>Log in</Link></span>
                            </div>
                            <div className="email py-3">
                                <input type="email" { ...register('email', { required: true})}  placeholder='Email' className='w-full outline-none border-[1px] p-2 rounded-md' />
                            </div>
                        </div>
                    }
                    <div className='shipping py-3'>
                        <h1>Shipping Address</h1>
                        <div className="name flex justify-between py-2">
                            <input type="text" { ...register('name', { required: true})} className='w-full outline-none border-[1px] p-2 rounded-md' placeholder='Name...'/>
                        </div>
                        <div className="address py-2">
                            <input type="text" { ...register('address', { required: true})}  className='w-full outline-none border-[1px] p-2 rounded-md' placeholder='Address'/>
                        </div>
                        <div className="address py-2">
                            <input type="number" { ...register('phone-number', { required: true})}  className='w-full outline-none border-[1px] p-2 rounded-md' placeholder='Phone number'/>
                        </div>
                    </div>
                    <div className='py-5 flex items-center'>
                        <div className='btn'>
                            <button className='px-5 py-4 bg-blue-600 text-white rounded-md hover:bg-white hover:text-blue-600 hover:border-2 transition-all duration-300 ease-in-out'>Continue to shipping</button>
                        </div>
                        <div className="return px-5">
                            <Link to="" className='text-[14px] text-blue-600 hover:text-blue-800'>Return to cart</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default InfoCheckOut