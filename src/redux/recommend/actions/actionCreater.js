// 轮播图的action
import {
    getBannerData, getSongcoverData, getNewDiscData,
    getRankingData, getHotSingerData,
    getDJHotDayData, getSingerDecData
} from "@/api/recommend"
import { GETBANNER, GETSONGCOVER, GETNEWDISC, GETRANKTHREE, GETHOTSINGER, GETHOTDJ } from "../../constant"

//获取顶部轮播图的数据action;
export const bannerAction = (data) => { return { type: GETBANNER, bannerData: data } }
export const getBannerDataAction = () => {
    return (dispatch) => {
        getBannerData().then(res => {
            console.log('@');
            dispatch(bannerAction(res.data))
        })
    }
}

//热门推荐songcover
export const songCoverAction = (data) => { return { type: GETSONGCOVER, songcoverData: data } }
export const getSongCoverAction = () => {
    return (dispatch) => {
        getSongcoverData().then(res => {
            dispatch(songCoverAction(res.data))
        })
    }
}
//新碟上架 10个 轮播
export const newDiscAction = (data) => { return { type: GETNEWDISC, newDiscData: data } }
export const getNewDiscAction = () => {
    return (dispatch) => {
        getNewDiscData().then(res => {
            dispatch(newDiscAction(res.data))
            // res.data: {
            //            code:200,
            //            albums:[{}...]12条
            //          }
        })
    }
}
//分别获取三个榜单数据action
export const rankingAction = (data) => { return { type: GETRANKTHREE, rankThreeData: data } }
export const getRabkingAction = ({ id1, id2, id3 }) => {
    return async (dispatch) => {
        let result1 = await getRankingData(id1);
        let result2 = await getRankingData(id2);
        let result3 = await getRankingData(id3);
        //  console.log(result1.data.playlist,result2.data.playlist,result3.data.playlist);
        dispatch(rankingAction([result1.data.playlist, result2.data.playlist, result3.data.playlist]))
    }
}


// 获取热门歌手 并且根据id再获取他主页的认证描述
export const hotSingerAction = (data) => { return { type: GETHOTSINGER, hotSingerData: data } }
export const getHotSingerAction = () => {
    return (dispatch) => {
        // 参数默认offset=0,limit=6
        getHotSingerData().then(res => {
            // console.log(res.data.artists);
            let arrArtist = res.data.artists;
            let primiseARrr = [];
            // 根据id请求歌手的认证描述
            arrArtist.forEach((item, index) => {
                primiseARrr[index] = getSingerDecData(item.id);
            });
            let p = Promise.all(primiseARrr);
            p.then(res => {
                // console.log('$', res);
                //新的歌手数据
                let newdata = arrArtist.map((item, index) => {
                    // 为每个 歌手的信息对象添加新属性imageDesc
                    item.imageDesc = res[index].data.data.identify.imageDesc;
                    return item;
                })
                // console.log("#", newdata);

                //保存到store
                dispatch(hotSingerAction(newdata))

            })
        })
    }
}


// 获取热门DJ 并且根据id再获取他主页的认证描述
export const hotDjAction = (data) => { return { type: GETHOTDJ, hotDjData: data } }
export const getHotDjAction = () => {
    return (dispatch) => {
        // 参数默认limit=6
        getDJHotDayData().then(res => {
            // console.log("000",res.data);
            let list = res.data.data.list;
                dispatch(hotDjAction(list))

        })
    }
}