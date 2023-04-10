import React from 'react'
import { HotReContentStyled } from './hotrecommend'
import ThemeHeader from '@/components/Header-recommend';
import SongCover from '@/components/Song-cover';
export default function HotReContent() {
  return (
    <HotReContentStyled>
         <ThemeHeader title = '热门推荐' keyword={[ '华语','流行' , '摇滚' , '民谣' , '电子']} />
         <div style={{width:"100%",height:"300px"}}>
         <SongCover />
         </div>
    </HotReContentStyled>
  )
}
