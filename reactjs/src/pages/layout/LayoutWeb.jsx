import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/client/pages/Footer'
import NavBar from '../../components/client/pages/NavBar'

const LayoutWeb = () => {
  return (
      <div className='max-h-max	'>
          <header><NavBar /></header>
          <main><Outlet /></main>
          <footer><Footer /></footer>
      </div>
  )
}

export default LayoutWeb