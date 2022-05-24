import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { readCart } from '../../../apis/cart'

const DetailCart = () => {
    const { id } = useParams()
    const [bill, setBill] = useState()

    useEffect(() => {
        const getOneCart = async () => {
            const { data } = await readCart(id)
            console.log('data', data);
            console.log('quantity', data.listProduct?.quantity);
            setBill(data)
        }
        getOneCart()
    }, [id])

  return (
    <div>
        <div class="md:grid md:gap-6">
            <div class="md:col-span-1">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 font-roboto">
                    <h1 className="text-3xl font-bold text-gray-800">Detail Cart</h1>
                </div>
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 font-roboto">
                    <div>
                        <div class="shadow sm:rounded-md sm:overflow-hidden">
                            <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                                <div>
                                    Name: { bill?.name }<br />
                                    Address: { bill?.address }<br />
                                    Phone: { bill?.phoneNumber }<br />
                                    Total: { bill?.total }<br />
                                    Quantity: { bill?.listProduct?.quantity }<br />
                                </div>
                                <div class="px-4 py-3 text-right sm:px-6">
                                    <Link to="/admin/cart"><button class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Back</button></Link>
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

export default DetailCart