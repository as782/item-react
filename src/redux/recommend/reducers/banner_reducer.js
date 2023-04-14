import { GETBANNER } from "../../constant"
const init = { 
    banners:[{}]
}

function bannerReducer(preState = init, action) {
    let { type, bannerData:banners  } = action;
    // bannerData{banner:{banner:[{},...],code:200}} 自己写的吐血。。。。
    let newstate = { ...preState,...banners}
    switch (type) {
        case GETBANNER:
            return newstate ;
        default:
            return preState ;
    }
}

export default bannerReducer