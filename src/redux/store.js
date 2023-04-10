  // redux4.2弃用createStore，legacy_crateStore
import { legacy_createStore as createStore,applyMiddleware ,combineReducers } from "redux";
//引入服务于Count 组件的reducer
import bannerReducer from './reducers/banner_reducer'
// 引入中间件 thunk 
import thunk from 'redux-thunk' 

//合并reducer
const allReducer =  combineReducers({
    recommend:bannerReducer
})
 const store =  createStore(allReducer,applyMiddleware(thunk));

export default store