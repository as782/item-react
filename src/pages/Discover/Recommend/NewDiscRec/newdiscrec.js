import styled from "styled-components";

export const NewDiscRecStyled =  styled.div`
    
`
export const CarouselDicStyled =  styled.div`
    position: relative;
    zoom: 1;
    width:688px;
    height: 186px;
    margin: 20px 0 37px;
    border: 1px solid #d3d3d3;

    .icon-prev{
        z-index:2;
        position:absolute;
        left:4px;
        top: 71px;
        width: 17px;
        height: 17px;
        background-position: -260px -75px;
          &:hover{
            background-position: -280px -75px;
        }
    }

    .icon-next{
        z-index:2;
        position:absolute;
        right:4px;
        top: 71px;
        width: 17px;
        height: 17px;
        background-position: -300px -75px;

        &:hover{
            background-position: -320px -75px;
        }
    }

    .b-disc{
        height: 100%;
        box-sizing:border-box;
        padding-left: 16px;
        background: #f5f5f5;
        border: 1px solid #fff;

        .disc-c{
            width:645px;
            height: 150px;
            margin:auto 0px;

            .pagebox{
                .c-page{
                    display: flex;
                    margin-top:28px;
                    
                    .item{
                        width: 118px;
                        height: 150px;
                        margin-left: 11px;
                        background-position:-260px 100px;
                    }
                }
            }
        }
    }
    
   
`