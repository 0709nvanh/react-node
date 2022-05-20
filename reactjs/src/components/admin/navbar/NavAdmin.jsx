import React from 'react'

const NavAdmin = () => {
  return (
    <div className="min-h-full">
        <nav className="bg-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center font-roboto">
                        <div className="flex-shrink-0">
                            <img alt="" className="h-[39px] w-[150px]" src="https://cdn.shopify.com/s/files/1/0031/3072/0369/files/logo_2_150x@2x.png?v=1622352543"/>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <a href="/admin" className="bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Dashboard</a>

                                <a href="/admin/product" className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Product</a>

                                <a href="/admin/category" className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Category</a>

                                <a href="#" className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</a>

                                <a href="#" className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Reports</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavAdmin