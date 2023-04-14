import React, { useEffect } from 'react'
import { HotReContentStyled } from './hotrecommend'
import ThemeHeader from '@/components/Header-recommend';
import SongCover from '@/components/Song-cover';
import { useDispatch, useSelector } from 'react-redux';
// 获取songer的action
import { getSongCoverAction } from '@/redux/recommend/actions/actionCreater';
export default function HotReContent() {
  let dispatch = useDispatch();
  let { result } = useSelector((state) => state.songcoverdata)
  
  let resultdata = result ||[];
  useEffect(() => {
    dispatch(getSongCoverAction())
  }, [dispatch])


  return (
    <HotReContentStyled>
      <ThemeHeader title='热门推荐' keyword={['华语', '流行', '摇滚', '民谣', '电子']} />

      <ul className='listbox'>

        {
          resultdata.map((item) => {
            return (
              <li key={item.id} className="itembox">
                <SongCover songdata = {item} />
              </li>
            )
          })
        }
      </ul>

    </HotReContentStyled>
  )
}
