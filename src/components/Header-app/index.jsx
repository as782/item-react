import React from 'react'
//头部 导航 组件
import { NavLink } from 'react-router-dom'
import { Headerstyle } from './header.js'
export default function Header() {
  return (
    <Headerstyle>
      <div className="nav-top">
        <h1 className='Logo sprite_01'><NavLink to='/discover' /></h1>
        <ul className="navList">
          <li className='listItem'><NavLink className={({ isActive }) => isActive ? ' select' : ''} to='/discover'>发现音乐
            <span className='sprite_01 arrow'></span>
          </NavLink></li>
          <li className='listItem'><NavLink className={({ isActive }) => isActive ? ' select' : ''} to='/mine'>我的音乐
            <span className='sprite_01 arrow'></span>
          </NavLink></li>
          <li className='listItem'><NavLink className={({ isActive }) => isActive ? ' select' : ''} to='/friend'>我的朋友
            <span className='sprite_01 arrow'></span>
          </NavLink></li>
          <li className='listItem'><NavLink className={({ isActive }) => isActive ? ' select' : ''} to='/ '>商城
            <span className='sprite_01 arrow'></span>
          </NavLink></li>
          <li className='listItem'><NavLink className={({ isActive }) => isActive ? ' select' : ''} to='/ '>音乐人
            <span className='sprite_01 arrow'></span>
          </NavLink></li>
          <li className='listItem'><NavLink className={({ isActive }) => isActive ? ' select' : ''} to='/ '>下载客户端
            <span className='sprite_01 arrow'></span>
          </NavLink></li>
        </ul>
        <div className="right">
          <div className="searchbox">
            <div className="search">
              <span className='icon'></span>
              <input type="text" name="search" id="search" placeholder='音乐/视频/用户/电台' />
            </div>
          </div>
          <div className="createbox">
            <div className='create'>
              <NavLink to='/firend'>创作者中心</NavLink>
            </div>
          </div>
          <div className="avatarbox">
            <div className="avatar">
              <img src="http://p4.music.126.net/bQYUy2egCjy1lh_xEjY1pA==/109951166546565633.jpg?param=30y30" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="red-line"></div>
    </Headerstyle>


  )
}
