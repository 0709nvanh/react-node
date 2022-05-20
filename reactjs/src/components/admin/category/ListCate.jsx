import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getCategories } from '../../../apis/category'

const ListCate = () => {
    const [category, setCategory] = useState()

    useEffect(() => {
        (async () => {
            const { data } = await getCategories()
            setCategory(data)
        })()
    }, [])
  return (
    <div>
        <div>
            <div className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 font-roboto">
                    <h1 className="text-3xl font-bold text-gray-800">Manager Category</h1>
                </div>
                <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
                    <Link to="/admin/category/add">
                        <button className='border rounded-md shadow-sm text-white  px-6 py-3 bg-blue-500 font-[18px] hover:bg-white hover:text-black transition-all duration-300 ease-linear'>Add new category</button>
                    </Link>
                </div>
                <div>
                    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                        <div className="px-4 py-6 sm:px-0">
                            <div className="rounded-lg h-96">
                                <div className='p-3'>
                                <div class="pb-[10px]">
                                    <div class="max-w-7xl mx-auto pt-[5px] pb-3 sm:px-6 lg:px-8 border-2 border-solid border-gray-200 rounded-lg">
                                        <table class="min-w-full divide-y divide-gray-200">
                                            <thead>
                                                <tr>
                                                    <th scope="col" class="text-center px-6 py-3 text-[14px] w-[20px] font-bold text-gray-500 uppercase tracking-wider">#</th>
                                                    <th scope="col" class="text-center px-6 py-3 text-[14px] font-bold text-gray-500 uppercase tracking-wider">Name</th>
                                                    <th scope="col" class="text-center px-6 py-3 text-[14px] font-bold text-gray-500 uppercase tracking-wider">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody class="bg-white divide-y divide-gray-200">
                                                {category?.map((item, index) => 
                                                <tr key={item.name}>
                                                    <td class="text-center py-[5px]">{index + 1}</td>
                                                    <td class="text-center py-[5px]">{item.name}</td>
                                                    <td class="items-center text-center">
                                                        <Link to={"edit/" + item.slug} className='text-blue-600 hover:font-bold pr-[5px]'>Edit</Link>
                                                        <button onClick={() => onHandleRemove(item.slug)} class="btn btn-remove text-red-600 hover:font-bold pr-[5px]">Delete</button>
                                                    </td>
                                                </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ListCate