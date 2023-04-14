import React from 'react'
import {DiscItemStyled} from './discitem.js'

export default function DiscItem(props) {
  const {id,name,picUrl,artist} =props.discInfo;
  return (
    <DiscItemStyled style={{
      width: '118px',
      height: '150px'
    }}>
      <div className='discbox sprite_02'>
        <div className="imgbox">
          <img className='d-img' src={picUrl} alt={name} />
          <a className='mask sprite_covor' title={name} href={`https://music.163.com/#/album?id=${id}`} >&nbsp;</a>
          <i className='icon-play sprite_icon' title='播放'></i>
        </div>
        <div className="dec">
          <p className="na-b">
            <a className='disc-link' title={name} href="#!">{name}</a>
          </p>
          <p className="au-b">
            <a href="disc-author">{artist.name}</a>
          </p>
        </div>
      </div>
    </DiscItemStyled>
  )
}
