import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { Carousel } from 'antd';
import { getBannerDataAction } from '../../../redux/actions/banner_action';
import { RecommendStyle, CarouselStyled } from './recommendstyle';

export default function Recommend() {
  // let { bannerData } = useSelector(state => state.recommend);
  // let dispatch = useDispatch()
  // let getdata = () => {
  //   console.log(bannerData);
  //   localStorage.setItem('banners',JSON.stringify(bannerData))
  // }
  // useEffect(() => {
  //   dispatch(getBannerDataAction())
  // })
  let [currentIndex, setCurrentIndex] = useState(0);
  let carousel = useRef();

  let bannerData = JSON.parse(localStorage.getItem('banners'))
  // 获取模糊图片的地址
  let bgImgUrl = bannerData.banners[currentIndex].imageUrl + "?imageView&blur=40x20";
  //监听轮播图的index
  function indexChange(_,currentIndex) {
    setCurrentIndex(currentIndex)
  }

  return (
    <RecommendStyle>
      <CarouselStyled>
        <div className='carouselBox' style={{
          backgroundSize: ' 6000px',
          backgroundPosition: ' center center',
          backgroundImage: `url(${bgImgUrl})`
        }}>
          <div className="wrap">
            <Carousel className='car' ref={carousel} autoplay beforeChange={indexChange}>
              {
                bannerData.banners.map((item) => {
                  return (
                    <div key={item.encodeId} className='carousel-item'>
                      <img className='img-car' src={item.imageUrl} alt={item.typeTitle} />
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
        <hr />
        <div>其他页面</div>
      </CarouselStyled>
    </RecommendStyle>
  )
}
