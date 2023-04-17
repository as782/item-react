import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RangingRecTable } from './ranktable'
import { getRabkingAction } from '@/redux/recommend/actions/actionCreater';
export default memo(function RankTable(props) {
    const rankData = useSelector(state => state.recommend.rankThreeData);
    const dispatch = useDispatch();
    useEffect(() => {
        // 飙升榜19723756 新歌榜3779629 原创榜2884035 id
        dispatch(getRabkingAction({ id1: 19723756, id2: 3779629, id3: 2884035 }))
    }, [dispatch]);

    return (

        <RangingRecTable >
            <div className="rank-t">
                {
                    rankData.map(item => {
                        return (
                            <div key={item.id} className="rt">
                                <div className="t-head">
                                    <div className="img-b">
                                        <img className='i-g' src={item.coverImgUrl} alt="" />
                                        <a href={`https://music.163.com/#/discover/toplist?id=${item.id}`} className='mask' title={item.name}>&nbsp;</a>
                                    </div>
                                    <div className='text-b'>
                                        <a href="#!" className="title-text">{item.name}</a>
                                        <div className="btn">
                                            <a href="#!" className="i-pl sprite_02" title="播放">&nbsp;</a>
                                            <a href="#!" className="i-sc sprite_02" title="收藏">&nbsp;</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="t-tr">
                                    <ol className="rnk-list">
                                        {
                                            item.tracks.slice(0, 10).map((songitem, index) => {
                                                return (
                                                    <li key={songitem.id} className="rnk-item">
                                                        <span className='r-num'>{index + 1}</span>
                                                        <a href={`/song?id=${songitem.id}`} className="s-link" title={songitem.name}>{songitem.name}</a>
                                                        {/* 播放，收藏，添加播放列表 */}
                                                        <div className="op-bar">
                                                            <a href="#!" className='icon-play sprite_02' title='播放'>&nbsp;</a>
                                                            <a href="#!" className='icon-add sprite_icon2' title='添加到播放列表'>&nbsp;</a>
                                                            <a href="#!" className='icon-sc sprite_02' title='收藏'>&nbsp;</a>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ol>
                                    <div className="more">
                                        <a href={`https://music.163.com/#/discover/toplist?id=${item.id}`} className='tit'>查看全部&gt;&gt;</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </RangingRecTable>
    )
}
)