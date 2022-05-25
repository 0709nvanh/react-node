import React, { useEffect } from 'react'
import { useState } from 'react'
import { getUsers, removeUser } from '../../../apis/user'

const ListUser = () => {
    const [user, setUser] = useState([])

    useEffect(() => {
        const getAllUsers = async () => {
            const { data } = await getUsers()
            // console.log('data', data);
            setUser(data)
        }
        getAllUsers()
    }, [])

    const onHandleRemove = async (id) => {
      console.log('id', id);
      if(window.confirm("Ban muon xoa khong?")){
        const { data } = await removeUser(id)
        console.log('data', data);
        if(data){
          setProduct(product.filter(item => item.slug !== slug))
        }
      }
    }
  return (
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
                                            <th scope="col" className="text-center px-6 py-3 text-[14px] font-bold text-gray-500 uppercase tracking-wider">Username</th>
                                            <th scope="col" className="text-center px-6 py-3 text-[14px] font-bold text-gray-500 uppercase tracking-wider">Email</th>
                                            <th scope="col" className="text-center px-6 py-3 text-[14px] font-bold text-gray-500 uppercase tracking-wider">Role</th>
                                            <th scope="col" className="text-center px-6 py-3 text-[14px] font-bold text-gray-500 uppercase tracking-wider">Detail</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {user?.map((item, index) => 
                                          <tr key={item.name}>
                                              <td className="text-center py-[5px]">{index + 1}</td>
                                              <td className="text-center py-[5px]">{item.username}</td>
                                              <td className="text-center py-[5px]">{item.email}</td>
                                              <td className="text-center py-[5px]">{item.role === 1 ? "Admin" : "Member"}</td>
                                              <td className="items-center text-center">
                                                  <button onClick={() => onHandleRemove(item._id)}  className='text-blue-600 hover:font-bold pr-[5px] transition-all duration-300 ease-linear'>Delete</button>
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
  )
}

export default ListUser