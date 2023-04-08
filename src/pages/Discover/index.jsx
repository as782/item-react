import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import './index.css'
//发现音乐路由
export default function Discover(props) {

  return (
   <div className="container">
     <div className="wrap">
      <div className='nav-discover'>
        <ul className='navlist'>
          <li  className='navitem'>
            <NavLink  className={({isActive})=>isActive?'menu-active':''} to='recommend'><em>推荐</em></NavLink>
          </li>
          <li className='navitem'>
            <NavLink  className={({isActive})=>isActive?'menu-active':''} to='rankings'><em>排行榜</em></NavLink>
          </li>
          <li className='navitem'>
            <NavLink  className={({isActive})=>isActive?'menu-active':''} to='playlist'><em>排行榜</em></NavLink>
          </li>
          <li className='navitem'>
            <NavLink  className={({isActive})=>isActive?'menu-active':''} to='radio'><em>主播电台</em></NavLink>
          </li>
          <li className='navitem'>
            <NavLink  className={({isActive})=>isActive?'menu-active':''} to='singer'><em>主播电台</em></NavLink>
          </li>
          <li className='navitem'>
            <NavLink  className={({isActive})=>isActive?'menu-active':''} to='newdisc'><em>新碟上架</em></NavLink>
          </li>
        </ul>
      </div> 
    </div>
    <div className="main_router">
        <Outlet />
      </div>
   </div>
  )
}
