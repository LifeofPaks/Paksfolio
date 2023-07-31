import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import './Layout.css'

import React from 'react'

const Layout = () => {
  return (
    <div className='layout'>
      <Sidebar/>

      <div className="page">
        <span className="tags top-tags forlio ">&lt;body&gt;</span>
        <Outlet/>
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className=" bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  )
}

export default Layout