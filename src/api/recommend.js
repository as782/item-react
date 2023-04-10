import { request } from ".";

// 请求轮播图数据
export const getBannerData = ()=>request({url:"/banner",method:'get',});