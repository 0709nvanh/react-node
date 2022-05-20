import React, { useEffect } from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom';
import { getCategories } from '../../../apis/category';
import { readProduct, updateProduct } from '../../../apis/product';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [category, setCategory] = useState();
    const navigate = useNavigate()
    const { slug } = useParams()

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await readProduct(slug)
            reset(data)
        }
        getProduct()
    }, [])

    const onSubmit = data => {
        updateProduct(data)
        navigate('/admin/product')
    }

    useEffect(() => {
        const getCate = async () => {
            const { data } = await getCategories();
            setCategory(data)
        }
        getCate() 
    })
  return (
    <div>
        <div class="md:grid md:gap-6">
            <div class="md:col-span-1">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 font-roboto">
                    <h1 className="text-3xl font-bold text-gray-800">Add new product</h1>
                </div>
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 font-roboto">
                    <form action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
                        <div class="shadow sm:rounded-md sm:overflow-hidden">
                            <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                                <div class="">
                                    <div class="col-span-3 sm:col-span-2">
                                        <label for="company-website" class="block text-sm font-medium text-gray-700"> Name </label>
                                        <div class="mt-1 rounded-md shadow-sm">
                                            <input type="text" name="company-website" { ...register('name', { required: true})} class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full p-3 rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Name product..." />
                                        </div>
                                        <div className='px-3'>{errors.name && <span className='text-red-400 text-[14px] italic'>Vui lòng nhập tên sản phẩm</span>}</div>
                                    </div>
                                </div>

                                <div>
                                    <label for="about" class="block text-sm font-medium text-gray-700"> Price </label>
                                    <div class="mt-1 rounded-md shadow-sm">
                                        <input type="number" { ...register('price', { required: true})} class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full p-3 rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Price product..." />
                                    </div>
                                    <div className='px-3'>{errors.price && <span className='text-red-400 text-[14px] italic'>Vui lòng nhập tên sản phẩm</span>}</div>
                                </div>
                                
                                <div>
                                    <label for="about" class="block text-sm font-medium text-gray-700"> Quantity </label>
                                    <div class="mt-1 rounded-md shadow-sm">
                                        <input type="number" { ...register('quantity', { required: true})} class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full p-3 rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="quantity product..." />
                                    </div>
                                    <div className='px-3'>{errors.quantity && <span className='text-red-400 text-[14px] italic'>Vui lòng nhập tên sản phẩm</span>}</div>
                                </div>

                                <div>
                                    <label for="about" class="block text-sm font-medium text-gray-700"> Description </label>
                                    <div class="mt-1 rounded-md shadow-sm">
                                        <textarea { ...register('description', { required: true})} className='focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full p-3 rounded-none rounded-r-md sm:text-sm border-gray-300'></textarea>
                                    </div>
                                    <div className='px-3'>
                                        {errors.description && <span className='text-red-400 text-[14px] italic'>Vui lòng nhập tên sản phẩm</span>}
                                    </div>
                                </div>
                                <div>
                                    <label for="about" class="block text-sm font-medium text-gray-700"> Category </label>
                                    <select { ...register('category')} className='focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full p-3 rounded-none rounded-r-md sm:text-sm border-gray-300'>
                                        {category?.map((item) => (
                                            <option value={item._id} className='focus:ring-indigo-500 focus:border-indigo-500 
                                            flex-1 block w-full p-3 rounded-none rounded-r-md sm:text-sm border-gray-300' key={item.name}>{item.name}</option>
                                        ))}
                                    </select>
                                </div>

                                <div class="px-4 py-3 text-right sm:px-6">
                                    <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
  )
}


export default AddProduct