// 顶部轮播图
import React, { memo, useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { Carousel } from 'antd';
import { getBannerDataAction } from '@/redux/recommend/actions/actionCreater';
import { CarouselStyled } from './topbannerstyled'
export default memo(
    function TopBanner() {

        let dispatch = useDispatch()
        // 组件挂载就获取数据
        useEffect(() => {
            console.log("banner");
            dispatch(getBannerDataAction())
        },[dispatch])
        let {banners} = useSelector(state =>state.recommend.banners);
        let carousel = useRef();
        //设置轮播图当前序号状态
        let [currentIndex, setCurrentIndex] = useState(0);
        // // 获取模糊图片的地址
        let bgImgUrl =banners &&  banners[currentIndex] && banners[currentIndex].imageUrl + "?imageView&blur=40x20";
        //监听轮播图的index
        function indexChange(_, currentIndex) {
            setCurrentIndex(currentIndex)
        }
        return (
            <CarouselStyled>
                <div className='carouselBox' style={{
                    backgroundSize: ' 6000px',
                    backgroundPosition: ' center center',
                    backgroundImage: `url(${bgImgUrl})`
                }}>
                    <div className="wrap">
                        <Carousel className='car' ref={carousel} autoplay beforeChange={indexChange}>
                            {
                               banners && banners.map((item,index) => {
                                    return (
                                        <div key={index}  className='carousel-item'>
                                            <a className='mask'  rel="noreferrer" target='_blank' href={`https://music.163.com/#/song?id=${item.targetId}`} >
                                                <img  className='img-car' src={item.imageUrl} alt={item.typeTitle} />
                                            </a>
                                        </div>
                                    )
                                })
                            }
                        </Carousel>
                        <a href="#!" className='btn prev' onClick={() => { carousel.current.prev() }} >上一个</a>
                        <a href="#!" className='btn next' onClick={() => { carousel.current.next() }} >下一个</a>
                        <div className="download">
                            <Link to="/download" className='ad'></Link>
                            <p className='text'>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
                        </div>
                    </div>
                </div>
            </CarouselStyled>
        )
    }
);
