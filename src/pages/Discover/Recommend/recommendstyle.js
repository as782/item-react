import styled from "styled-components";
import banner_sprite from   '@/assets/img/banner_sprite.png';
import download from '@/assets/img/download.png'
export const RecommendStyle = styled.div`

  

`

export const CarouselStyled = styled.div`
     position: relative;
    .carouselBox{        
        .wrap{
            
            width: 982px;
            height: 285px; 
            margin: 0 auto;   
            overflow: hidden;      
            .car{
                width:730px; 
                
                img{
                    width:730px; 
                    height:285px;
                }
            }
            .btn{       
                display: block;
                position: absolute;
                top: 50%;
                margin-top: -31px;
                width: 37px;
                height: 63px;
                text-indent: -9999px;
                background:url(${banner_sprite}) no-repeat   ;
                 
                 
            }
            .prev{
                left:200px;
                background-position:0px -360px;
                 &:hover{
                    background-position:0px -430px;
                 }
            }
            .next{
                right:200px;
                background-position: 0px -508px;
                &:hover{
                    background-position: 0px -578px;
                 }
            }

            .download{
                position: absolute;
                top: 0;
                z-index: 20;
                right: 270px;
                width: 254px;
                height: 285px;
                box-sizing:border-box;
                background:url(${download}) 0 0;
                 
                
                .ad{
                    display: block;
                    width: 215px;
                    height: 56px;
                    margin: 186px 0 0 19px;
                    background:url(${download});
                    background-position: -19px 168px;
                    text-indent: -9999px;

                    &:hover{
                        background-position: 0px -290px;
                    }
                }
                .text{
                    margin: 10px auto;
                    text-align: center;
                    color: #8d8d8d;
                }
            }
        }
    }
`

