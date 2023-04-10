import styled from "styled-components";
import wrapbg from '@/assets/img/wrap-bg.png'
export const RecommendStyle = styled.div`

  
`

export const MainContentStyled = styled.div`
    display:flex;
    justify-content: space-between;
    width:980px;
    margin:0 auto;
    border: 1px solid #d3d3d3;
    background: url(${wrapbg}) repeat-y 100% 100%;
  
`
export const ContentLeftStyled = styled.div`
    flex-grow: 1;
    padding: 20px 20px 40px;    
`
export const ContentRightStyled = styled.div`
    width:250px;
    border:1px solid #ddd;
  
`