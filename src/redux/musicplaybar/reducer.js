// actionl类型全部导入
import * as actionType from './actionTypes'

const init = {
    currentSong: {

    }
}
const musicPlayBarReducer = (preState = init, action)=>{
    switch (action.type) {
        case actionType.CHANGE_CURRENTSONG:
            return { ...preState, currentSong: action.currentSong }

        default:
            return preState;

    }
}

export default musicPlayBarReducer;