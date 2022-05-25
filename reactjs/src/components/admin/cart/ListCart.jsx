import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getCarts } from '../../../apis/cart'

const ListCart = () => {
    const [ bill, setBill ] = useState([])

    useEffect(() => {
        const listCart = async () => {
            const { data } = await getCarts()
            // console.log('data', data.listProduct.quantity);
            setBill(data)
        }
        listCart()
    }, [])
  return (
    <div>
      <div className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 font-roboto">
            <h1 className="text-3xl font-bold text-gray-800">Manager Product</h1>
          </div>
          <div>
              <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                  <div className="px-4 py-6 sm:px-0">
                      <div className="rounded-lg h-96">
                        <div className='p-3'>
                          <div className="pb-[10px]">
                            <div className="max-w-7xl mx-auto pt-[5px] pb-3 sm:px-6 lg:px-8 border-2 border-solid border-gray-200 rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="text-center px-6 py-3 text-[14px] w-[20px] font-bold text-gray-500 uppercase tracking-wider">#</th>
                                            <th scope="col" className="text-center px-6 py-3 text-[14px] font-bold text-gray-500 uppercase tracking-wider">Name</th>
                                            <th scope="col" className="text-center px-6 py-3 text-[14px] font-bold text-gray-500 uppercase tracking-wider">Address</th>
                                            <th scope="col" className="text-center px-6 py-3 text-[14px] font-bold text-gray-500 uppercase tracking-wider">Phone</th>
                                            <th scope="col" className="text-center px-6 py-3 text-[14px] font-bold text-gray-500 uppercase tracking-wider">Total</th>
                                            <th scope="col" className="text-center px-6 py-3 text-[14px] font-bold text-gray-500 uppercase tracking-wider">Status</th>
                                            <th scope="col" className="text-center px-6 py-3 text-[14px] font-bold text-gray-500 uppercase tracking-wider">Detail</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {bill?.map((item, index) => 
                                          <tr key={item.name}>
                                              <td className="text-center py-[5px]">{index + 1}</td>
                                              <td className="text-center py-[5px]">{item.name}</td>
                                              <td className="text-center py-[5px]">{item.address}</td>
                                              <td className="text-center py-[5px]">{item.phoneNumber}</td>
                                              <td className="text-center py-[5px]">{item.total}</td>
                                              <td className="text-center py-[5px]">
                                              {
                                                    (() => {
                                                        if (item.status === 1) {
                                                            return (
                                                                <select value="Tạo đơn"  className=" form-select appearance-none block w-full px-3  py-1.5 text-base  font-bold text-black  bg-clip-padding bg-no-repeat  border border-solid border-gray-300  rounded  transition ease-in-out  m-0   focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                                                                    <option value="0">Tạo đơn</option>
                                                                    <option value="1">Đang Vận Chuyển</option>
                                                                    <option value="2">Giao Thành Công</option>
                                                                    <option value="3">Hủy Đơn Hàng</option>
                                                                </select>
                                                            )
                                                        }
                                                        if (item.status === 2) {
                                                            return (
                                                                <select value="Đang Vận Chuyển" className="form-select appearance-none block w-full px-3  py-1.5 text-base  font-bold text-white  bg-green-300 bg-clip-padding bg-no-repeat  border border-solid border-gray-300  rounded  transition ease-in-out  m-0   focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                                                                    <option value="1" >Đang Vận Chuyển</option>
                                                                    <option value="2">Giao Thành Công</option>
                                                                    <option value="3">Hủy Đơn Hàng</option>
                                                                    <option value="4">Đơn Hàng Bị Hủy</option>
                                                                </select>
                                                            )
                                                        }
                                                        if (item.status === 3) {
                                                            return (
                                                                <select className="  form-select appearance-none block w-full px-3  py-1.5 text-base  font-bold text-white  bg-green-500 bg-clip-padding bg-no-repeat  border border-solid border-gray-300  rounded  transition ease-in-out  m-0   focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                                                                    <option value="2">Giao Thành Công</option>
                                                                </select>
                                                            )
                                                        }
                                                        if (item.status === 4) {
                                                            return (
                                                                <select className="  form-select appearance-none block w-full px-3  py-1.5 text-base  font-bold text-white  bg-red-500 bg-clip-padding bg-no-repeat  border border-solid border-gray-300  rounded  transition ease-in-out  m-0   focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                                                                    <option value="3">Hủy Đơn Hàng</option>
                                                                </select>
                                                            )
                                                        }
                                                        if (item.status == 5) {
                                                            return (
                                                                <select className="  form-select appearance-none block w-full px-3  py-1.5 text-base  font-bold text-white  bg-red-500 bg-clip-padding bg-no-repeat  border border-solid border-gray-300  rounded  transition ease-in-out  m-0   focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                                                                    <option value="4">Đơn Hàng Bị Hủy</option>
                                                                </select>
                                                            )
                                                        }
                                                    })()
                                                }
                                              </td>
                                              <td className="items-center text-center">
                                                  <Link to={`/admin/${item._id}/detailBill`} className='text-blue-600 hover:font-bold pr-[5px]'>Detail</Link>
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
  )
}

export default ListCart