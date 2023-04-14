import { GETSONGCOVER } from "../../constant"
const init = { 
    
}

function songCoverReducer(preState = init, action) {
    let { type, songcoverData } = action;
    let newstate = { ...preState,...songcoverData}
    switch (type) {
        case GETSONGCOVER:
            return newstate ;
        default:
            return preState ;
    }
}

export default songCoverReducer