import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LayoutWeb from './pages/layout/LayoutWeb'
import LayoutAdmin from './pages/layout/LayoutAdmin'
import Home from './pages/pages/Home'
import Dashboard from './components/admin/navbar/Dashboard'
import UpdateProduct from './components/admin/product/UpdateProduct'
import AddProduct from './components/admin/product/AddProduct'
import ListProduct from './components/admin/product/ListProduct'
import ListCate from './components/admin/category/ListCate'
import AddCate from './components/admin/category/AddCate'
import Signup from './pages/pages/Signup'
import Product from './pages/pages/Product'
import DetailProduct from './pages/pages/DetailProduct'

function App() {

  return (
    <Routes>
      <Route path="/" element={<LayoutWeb />}>
        <Route index element={<Home />}/>
        <Route path="sign-up" element={<Signup />}/>
        <Route path="product" element={<Product />}/>
        <Route path=":slug/detail" element={<DetailProduct />}/>

      </Route>
      
      <Route path="admin" element={<LayoutAdmin />}>
        <Route index element={<Dashboard />}/>

        <Route path="product" element={<ListProduct />} />
        <Route path="product/edit/:slug" element={<UpdateProduct />}/>
        <Route path="product/add" element={<AddProduct />}/>

        <Route path="category" element={<ListCate />}/>
        <Route path="category/add" element={<AddCate />}/>
      </Route>
    </Routes>
  )
}

export default App
