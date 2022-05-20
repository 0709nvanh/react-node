import React from 'react'
import { Outlet } from 'react-router-dom'
import NavAdmin from '../../components/admin/navbar/NavAdmin'
import NavBar from '../../components/client/pages/NavBar'

export const LayoutAdmin = () => {
  return (
    <div>
      <NavAdmin />
      <main><Outlet /></main>
    </div>
  )
}
export default LayoutAdmin