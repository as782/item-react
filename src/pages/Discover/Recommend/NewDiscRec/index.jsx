import React, { memo, useEffect, useRef } from 'react'
import { Carousel } from 'antd';
import { NewDiscRecStyled, CarouselDicStyled } from './newdiscrec'
import ThemeHeader from '@/components/Header-recommend';
import DiscItem from '@/components/DiscItem';
import { useDispatch, useSelector } from 'react-redux';
import { getNewDiscAction } from '@/redux/recommend/actions/actionCreater';
export default memo(
  function NewDiscRec() {
    const discCarousel = useRef();
    const { albums } = useSelector((state) => state.recommend.newDiscData);
    const alblumdata = albums || [];
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getNewDiscAction())
    }, [dispatch])
    return (
      <NewDiscRecStyled>
        <ThemeHeader title='新碟上架' />
        <CarouselDicStyled>
          <i className='icon-prev  sprite_02' onClick={() => discCarousel.current.prev()}></i>
          <div className='b-disc'>
            <Carousel ref={discCarousel} dots={false} className='disc-c'>
              {
                ["page1", "page2"].map((pageno, index) => {
                  return (
                    <div key={pageno} className="pagebox">
                      <div className='c-page'>
                        {
                          // 第一页1-5条数据，第二页5-10
                          alblumdata.slice(index * 5, (index + 1) * 5).map((item) => {
                            return (
                              <div key={item.id} className="item sprite_02">
                                <DiscItem discInfo={item} />
                              </div>
                            )
                          })
                        }

                      </div>
                    </div>
                  )
                })
              }

            </Carousel>
          </div>
          <i className='icon-next sprite_02' onClick={() => discCarousel.current.next()}></i>
        </CarouselDicStyled>


      </NewDiscRecStyled>
    )
  }

)