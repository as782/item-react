import { request } from ".";

// 请求轮播图数据
export const getBannerData = ()=>request({url:"/banner",method:'get',});

//请求热门推荐songcover
// 默认请求8条数据
export const getSongcoverData = (num=8)=>request({url:`/personalized?limit=${num}`,method:'get'});

// 新碟上架轮播
export const getNewDiscData = ()=>request({url:'/album/newest'})
// 单个榜单数据
export const getRankingData = (id)=>request({url:`/playlist/detail?id=${id}`})

//热门歌手
// 可选参数 :
//  limit: 取出数量 , 默认为 50
// offset: 偏移数量 相当于从那开始, 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0
export const getHotSingerData =(num = 6,offset=0) =>request({url:`/top/artists?offset=${offset}&limit=${num}`});


// 电台主播榜
// 说明 : 调用此接口,可获取最热主播榜
export const getDJHotDayData =(num = 6) =>request({url:`/dj/toplist/popular?limit=${num}`});


//歌手详情
// /artist/detail?id=5781
export const getSingerDecData =(id) =>request({url:`/artist/detail?id=${id}`});