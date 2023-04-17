// redux4.2弃用createStore，legacy_crateStore
import { legacy_createStore as createStore, applyMiddleware, combineReducers, compose } from "redux";
// 引入中间件 thunk 
import thunk from 'redux-thunk'
// //引入服务于banner 组件的reducer
// import bannerReducer from './recommend/reducers/banner_reducer'
// // 热门推荐的songcover
// import songCoverReducer from "./recommend/reducers/songcover_reuducer";
// //新碟上架轮播
// import newDiscReducer from "./recommend/reducers/newdisc_reducer";
// // 三个榜单数据
// import rankThreeReducer from "./recommend/reducers/ranking_reducer";
// //侧边栏入驻歌手，热门主播
// import hotSingerReducer from "./recommend/reducers/hotsinger_reeducer";
// import hotDjReducer from "./recommend/reducers/hotdj_reducer";

//播放器的reducer
import musicPlayBarReducer from "./musicplaybar/reducer";
import allReducer from './reducer'
// redux-devtools 使用 浏览器插件
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// //合并reducer
// const allReducer = combineReducers({
//   bannerdata: bannerReducer,
//   songcoverdata: songCoverReducer,
//   newdiscdata: newDiscReducer,
//   rankthreedata:rankThreeReducer,
//   hotsinger:hotSingerReducer,
//   hotdj:hotDjReducer
// })

const store = createStore(allReducer, composeEnhancers(applyMiddleware(thunk)));

export default store