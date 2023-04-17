import { combineReducers } from "redux";
//推荐页面的reducer
import recommendReducer from "./recommend/reducers/recommendreducer";  
// 播放器的reducer
import musicPlayBarReducer from "./musicplaybar/reducer";
const allReducer = combineReducers({
    recommend: recommendReducer,
    playBar:musicPlayBarReducer
})

export default allReducer;