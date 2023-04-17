// actionl类型全部导入
import * as actionType from './actionTypes'

//改变当前歌曲信息
export const changeCurrentSongAction =(curSong)=>({ type:actionType.CHANGE_CURRENTSONG,currentSong:curSong});
