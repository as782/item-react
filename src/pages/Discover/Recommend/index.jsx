import React, { memo } from 'react'
import {
  RecommendStyle, MainContentStyled,
  ContentLeftStyled,
  ContentRightStyled
} from './recommendstyle';
import TopBanner from './TopBanner';
import HotReContent from './HotRecommend'
import NewDiscRec from './NewDiscRec';
import RankingRec from './RankingRec';
import Login from './Login';
import SettledSinger from './SettledSinger';
import HotDj from './HotDj';
export default memo(function Recommend() {
  return (
    <RecommendStyle>
      {/* 轮播图区域 */}
      <TopBanner />
      {/* 推荐的主要内容区域 */}
      <MainContentStyled>
        {/* 左边区域 */}
        <ContentLeftStyled>

          {/* 热门推荐 */}
          <HotReContent />

          {/* 新碟上架 */}
          <NewDiscRec />
          
          {/* 榜单 */}
          <RankingRec />

        </ContentLeftStyled>
        {/* 右边区域 */}
        <ContentRightStyled>
          {/* 登录 */}
           <Login />
           {/* 入驻歌手 */}
           <SettledSinger />
           {/* 热门主播 */}
            <HotDj />
        </ContentRightStyled>
      </MainContentStyled>
    </RecommendStyle>
  )
}
)