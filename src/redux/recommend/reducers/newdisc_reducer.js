import { GETNEWDISC } from "../../constant";

const newDiscReducer = (preState={},action)=>{
    const {type,newDiscData} =action;
    let newstate = { ...preState,...newDiscData}
    switch (type) {
        case GETNEWDISC:
            return newstate ;
        default:
            return preState ;
    }
}

export default newDiscReducer;