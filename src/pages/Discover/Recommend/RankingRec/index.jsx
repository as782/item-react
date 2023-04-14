import React from 'react'
import { RankingRecStyled } from './rankingrec'
import ThemeHeader from '@/components/Header-recommend';
import RankTable from './RankTable';

export default function RankingRec() {

  return (
    <RankingRecStyled>
      <ThemeHeader title='榜单' />
      <RankTable  />
    </RankingRecStyled>
  )
}
