//热门歌手边栏
import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getHotDjAction } from '../../../../redux/recommend/actions/actionCreater';
import { HotDjStyled } from './hotdjstyled'
export default memo(
  function HotDj() {
    let dispatch = useDispatch();
    let djData = useSelector(state => state.recommend.hotDjData);
    useEffect(() => {
      dispatch(getHotDjAction());
    }, [dispatch]);
  
    return (
      
      <HotDjStyled>
        <div className="head">
          <span className="tt">热门主播</span>
        </div>
        <div className="listbox">
          <ul className="s-list">
            {
              djData.map(item => {
                return (
                  <li key={item.id} className="item">
                    <a href={`user/home?id=${item.id}`} className="infobox">
                      <div className="h-d">
                        <img className='h-img' src={item.avatarUrl} alt={item.nickName} />
                      </div>
                    </a>
                    <div className='info'>
                      <p className="nam text-nowrap"><a href={`user/home?id=${item.id}`} className='n-l'>{item.nickName}</a></p>
                      <p className='text-nowrap'>热度指数：{item.score}</p>
                    </div>
                  </li>
                )
              })
            }
  
          </ul>
  
  
        </div>
      </HotDjStyled>
    )
  }
  
)