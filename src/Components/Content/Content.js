import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import './Content.css'

const Content = () => {
  return (
    <div className='content'>
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default Content