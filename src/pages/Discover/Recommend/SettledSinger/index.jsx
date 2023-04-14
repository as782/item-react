// 入驻歌手边栏
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getHotSingerAction } from '../../../../redux/recommend/actions/actionCreater';
import { SettledSingerStyled } from './settledsingerstyled'
export default function SettledSinger() {
    const dispatch = useDispatch();
    const singerInfo = useSelector(state => state.hotsinger) || [];
    useEffect(() => {
        dispatch(getHotSingerAction());
    }, [dispatch]);
    return (
        <SettledSingerStyled>
            <div className="head">
                <span className="tt">入驻歌手</span>
                <a href="#!" className='more'>查看全部&nbsp;&gt;</a>
            </div>
            <div className="listbox">
                <ul className="s-list">
                     {
                        singerInfo.map(item => {
                            return (
                                <li key={item.id} className="item">
                                    <a href={`/user/home?id=${item.id}`} className="infobox">
                                        <div className="h-d">
                                            <img className='h-img' src={item.picUrl} alt={item.name}/>
                                        </div>
                                        <div className='info'>
                                            <h4>
                                                <span className="nam text-nowrap">{item.name}</span>
                                            </h4>
                                            <p className='text-nowrap'>{item.imageDesc}</p>
                                        </div>
                                    </a>
                                </li>
                            )
                        })
                    }

                </ul>

                <div className="acv">
                    <a href="#!" className="u-btn text-nowarp sprite_button">申请成为网易音乐人</a>
                </div>
            </div>
        </SettledSingerStyled>
    )
}
