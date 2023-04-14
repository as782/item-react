import { GETHOTSINGER } from "../../constant";

const hotSingerReducer = (preState=[],action)=>{
    let {type,hotSingerData} =action;
    //初始化执行时数据是undefined,确保他是个数组，可以遍历；
    hotSingerData =hotSingerData||[];
    // console.log("@@",hotSingerData);
    let newstate = [...hotSingerData];
    switch (type) {
        case GETHOTSINGER:
            return newstate ;
        default:
            return preState ;
    }
}

export default hotSingerReducer;