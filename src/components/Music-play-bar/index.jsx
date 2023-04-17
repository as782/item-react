import React, { memo, useEffect, useRef, useState } from 'react'
import { Slider } from 'antd'
import { MusicPlayBarStyled } from './musicplaybarsyled'
import { formatDate, getPlayUrl } from '@/utils/play-music_utils'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getSongDetail, getSongUrl } from '../../api/musicPlayer';
import { changeCurrentSongAction } from '../../redux/musicplaybar/actionCreater';

export default memo(function MusicPlayBar(props) {
  // 获取Audio元素
  const audioRef = useRef();
  const dispatch = useDispatch();

  //设置一些状态
  const [isPlaying, setIsPlaying] = useState(false);//歌曲是否处于播放状态
  const [progress, setProgress] = useState(0);//进度条的值 单位是毫秒
  const [currentTime, setCurrentTime] = useState(0); // 用于保存当前播放的时间 单位s秒
  const [isShowVgBar, setIsShowVgBar] = useState(false); // 是否显示音量播放条

  // 组件加载
  useEffect(() => {
    async function getdata(){
      // 获取一首歌的信息
      //李荣浩·不将就
      const song = await getSongDetail(31654343)
      // console.log(">>>",song.data);
      let songdetail = song.data.songs;
      // console.log(songdetail);
      let songUrl = await getSongUrl(songdetail.id);
      // console.log("???",songUrl.data.data[0].url);
      songdetail[0].songUrl = songUrl.data.data[0].url;
      // console.log(songdetail);
      dispatch(changeCurrentSongAction(songdetail[0]))
    }
    getdata();
  }, [dispatch]);

  //获取当前的音乐信息
  const { currentSong } = useSelector((state) => state.playBar,
  shallowEqual)
  //音乐信息
  const picUrl = currentSong.al && currentSong.al.picUrl; // 图片url
  const songName = currentSong.name; // 歌曲名字
  const singerName = currentSong.ar && currentSong.ar[0].name; //作者名字
  const duration = currentSong.dt; //播放总时间
  const songUrl = currentSong.songUrl; // 歌曲URL
 
  //滑动进度条 音乐进度条的变化
  const changeSliderValue = (value) => {
    setProgress(value)
    console.log(value);
  }
  //滑动进度条 鼠标松开进度条时
  const afterMouseUpBar = (value) => {
    setCurrentTime(value/1000)
    audioRef.current.currentTime = value/1000;
    console.log('>', value);
  }
  //audio 监听当前的播放位置
  const audioTimeUpdate = (e) => {

    let currentTime = e.target.currentTime;
    //记录当前播放时间
    console.log(currentTime);
    setCurrentTime(currentTime)
    //设置进度条的进度和当前播放时间同步
    setProgress(currentTime*1000)
  }
  //播放音乐
  const playMusic = () => {
    // setIsPlaying 异步的
    //修改播放状态，并判断播放还是暂停
    setIsPlaying((isPlaying) => {
      isPlaying = !isPlaying;
      isPlaying ? audioRef.current.play() : audioRef.current.pause();
      return isPlaying
    });
  }
  return (
    <MusicPlayBarStyled>
      <div className="uplock">
        {/* 右边的锁 */}
        <div className="left-lockarea">
          <a href="#!" className='lock-icon lock' > </a>
        </div>
        <div className='right-hidden'></div>
      </div>
      {/* 背景 */}
      <div className='bg'></div>
      <div className="hand" title='展开播放条'></div>
      <div className="wrap">
        <div className="c-btns">
          <a className='pre' title='上一首(ctrl+<--)' href="#!">&nbsp;</a>
          <a className={isPlaying ? 's_btn' : 'p_btn'} title='播放/暂停' onClick={playMusic} href="#!">&nbsp;</a>
          <a className='next' title='下一首(ctrl+-->)' href="#!">&nbsp;</a>
        </div>
        <div className="head">
          <img className='avar' src={picUrl} alt="" />
          <a href="#!" className="mask">&nbsp;</a>
        </div>
        <div className="play">
          <div className="words">
            <a href="#!" className="song_n" title={songName}>{songName}</a>
            {/* 有MV的歌才展示 */}
            <a href="#!" className="mv_icon" title='MV'>&nbsp;</a>
            <span className='by'>
              <a href="#!" className='singer_n' title={singerName}>{singerName}</a>
            </span>
            <a href="#!" className='song_l' title='来自歌单'>&nbsp;</a>
          </div>
          {/* 进度条 */}
          <div className='progr'>
            {/* 音乐播放进度条 */}
            <Slider defaultValue={0} max={duration} value={progress} tooltip={{ open: false }} onChange={changeSliderValue} onAfterChange={afterMouseUpBar} />
            <div className="song-time">
              <span className="now-time">{formatDate(currentTime * 1000, 'mm:ss')}</span>
              <span className="total-time">
                {' '}
                / {duration && formatDate(duration, 'mm:ss')}
              </span>
            </div>
          </div>
        </div>
        <div className="opra">
          <a href="#!" className="icn icn-pip" title="画中画歌词">画中画歌词</a>
          <a href="#!" className="icn icn-add" title="收藏">收藏</a>
          <a href="#!" className="icn icn-share" title="分享">分享</a>
        </div>
        <div className="ctrl">
          <div className="m-vol" style={isShowVgBar ? {} : { display: 'none' }}  >
            {/* 音量控制 */}
            <div className="barbg"></div>
            <div className="vbg"  >
              {/* <div className="curr"  ></div> */}
              <Slider defaultValue={30} vertical />
              <span className="btn sprite_icon" ></span>
            </div>
          </div>
          {/* 音量控制 */}
          <a href="#!" className={isShowVgBar ? "icn icn-vol active" : "icn icn-vol"} onClick={() => setIsShowVgBar(!isShowVgBar)}> </a>
          <a href="#!" className="icn icn-loop" title="循环"> </a>
          <span className="add">
            <span className="tip" style={{ display: 'none' }} >已添加到播放列表</span>
            <a href="#!" title="播放列表" className="icn icn-list ">8</a>
          </span>
          <div className="tip tip-1" style={{ display: 'none' }} >循环</div>

        </div>
        <audio id='audio' onTimeUpdate={audioTimeUpdate} ref={audioRef} src={songUrl}></audio>
      </div>
      {/* 播放列表 */}
      <div className="playlist" style={{ display: 'none' }}></div>
    </MusicPlayBarStyled>
  )

}
);