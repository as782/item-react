import { GETRANKTHREE } from "../../constant"
const init = []

function rankThreeReducer(preState = init, action) {
    let { type, rankThreeData } = action;
    // console.log(rankThreeData);
    let newstate =rankThreeData ;
    switch (type) {
        case GETRANKTHREE:
            return newstate ;
        default:
            return preState ;
    }
}

export default rankThreeReducer;