import { GETRANKTHREE, GETNEWDISC, GETHOTSINGER, GETHOTDJ, GETSONGCOVER, GETBANNER } from "../../constant"
// recommed页面的所有reducer
const init = {
    banners:{ },//引入服务于banner 组件的reducer
    newDiscData: {},//新碟上架轮播
    rankThreeData: [],// 三个榜单数据
    songcoverData: {},// 热门推荐的songcover
    hotDjData: [],//侧边栏入驻歌手，热门主播
    hotSingerData: []
}

function recommendReducer(preState = init, action) {
    let { type, bannerData: banners, hotDjData, hotSingerData, newDiscData, rankThreeData, songcoverData } = action;
    // banners = banners || {};
    // newDiscData = newDiscData || {};
    // rankThreeData = rankThreeData || [];
    // songcoverData = songcoverData || {};
    // hotDjData = hotDjData || [];
    // //初始化执行时数据是undefined,确保他是个数组，可以遍历；
    // hotSingerData = hotSingerData || [];
    
    switch (type) {
        case GETBANNER:
            return {...preState,banners};
        case GETHOTDJ:
            return {...preState,hotDjData};
        case GETHOTSINGER:
            return {...preState,hotSingerData};
        case GETNEWDISC:
            return {...preState,newDiscData};
        case GETRANKTHREE:
            return {...preState,rankThreeData};
        case GETSONGCOVER:
            return {...preState,songcoverData};
        default:
            return preState;
    }
}

export default recommendReducer



 
 