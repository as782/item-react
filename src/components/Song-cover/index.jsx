//歌曲的封面组件
import React from 'react'
import { SongCoverStyled } from './songcover.js'
export default function SongCover(props) {
    // picUrl:封面地址,name:标题音乐名,id:歌单id,playCount：播放数。copywriter描述
    let { picUrl, name, id, playCount, copywriter } = props.songdata;
    return (
        <SongCoverStyled>
            <div className="sc1">
                <div className="imgct">
                    <img className='cover' src={picUrl} alt="" />
                    <a href="#!" className='mask' title={name} src={`https://music.163.com/playlist?id=${id}`}> </a>
                    <div className='pbox'>
                        <div className="liscount sprite_covor">
                            <i className='lis-icon sprite_icon'></i>
                            <span className='p-count'>{playCount / 10000}万</span>
                        </div>
                        {/* 播放按钮 */}
                        <a href="#!" title='播放' className='icon-play sprite_icon'> </a>
                    </div>
                    {/* 右上角的图标 */}
                    <i className='b-i sprite_icon3 none' ></i>
                </div>
                <div className="dec">
                    {/* 音乐类型标签 */}
                    <p > <a href="#!" className={copywriter ? 'dec-text text-nowrap' : 'dec-text '} title={name}><i className='m-f sprite_icon2' style={{ display: 'none' }}></i>{name}</a></p>
                    {/* copywriter 为空就不显示了 */}
                    <p className={copywriter ? 'r-dec' : 'none'}>
                        <span>by</span>
                        <a href="#!" className='dec-write' title={copywriter}>{copywriter}</a>
                        <img className='r-img' src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4761340194/0903/b735/7c7a/0dddcdf78047d397d24125840e54ab5b.png" alt="" />
                    </p>
                </div>
            </div>
        </SongCoverStyled>
    )
}
