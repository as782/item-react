// 轮播图的action
import { getBannerData } from "../../api/recommend"
import { GETBANNER } from "../constant"

export const bannerAction = (data) => { return { type: GETBANNER, bannerData: data } }


export const getBannerDataAction = () => {
    return (dispatch) => {
        getBannerData().then(res => {
            dispatch(bannerAction(res.data))
        })
    }
}