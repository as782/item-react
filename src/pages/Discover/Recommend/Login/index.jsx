import React from 'react'
import {LoginStyled} from './loginstyled'
export default function Login() {
  return (
    <LoginStyled>
        <div className="loignbox sprite_02">
            <p className='text'>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
            <a href="#!" className='l-btn sprite_02'>用户登录</a>
        </div>
    </LoginStyled>
  )
}
