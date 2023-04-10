import { GETBANNER } from "../constant"
const init = {}

function bannerReducer(preState = init, action) {
    let { type, bannerData } = action;
    let newstate = { bannerData,...preState}
    switch (type) {
        case GETBANNER:
            return newstate ;

        default:
            return preState ;
    }
}

export default bannerReducer