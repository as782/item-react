//歌曲的封面组件
import React from 'react'
import './songcover.css'
export default function SongCover() {
    return (
        <div>
            <div className="sc1">
                <div className="imgct">
                    <img className='cover' src={require(`./test1.jpg`)} alt="" />
                    <a href="#!" className='mask' title='是不是把所有委屈咽下，才显得懂事' ></a>
                    <div className='pbox'>
                        <div className="liscount sprite_covor">
                            <i className='lis-icon sprite_icon'></i>
                            <span className='p-count'>29.9万</span>
                        </div>
                        {/* 播放按钮 */}
                        <a href="#!" title='播放' className='icon-play sprite_icon'></a>
                    </div>
                    {/* 右上角的图标 */}
                    <i className='b-i sprite_icon3'></i>
                </div>
                <div className="dec">
                    {/* 音乐类型标签 */}
                    <a href="#!" className='dec-text' title='是不是把所有委屈咽下，才显得懂事'><i className='m-f sprite_icon2'></i>是不是把所有委屈咽下，才显得懂事</a>
                </div>
            </div>
        </div>
    )
}
