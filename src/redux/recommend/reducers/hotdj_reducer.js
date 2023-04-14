import { GETHOTDJ } from "../../constant";

const hotDjReducer = (preState=[],action)=>{
    let {type,hotDjData} =action;
    hotDjData = hotDjData ||[];
    let newstate = [...hotDjData];
    switch (type) {
        case GETHOTDJ:
            return newstate ;
        default:
            return preState ;
    }
}

export default hotDjReducer;