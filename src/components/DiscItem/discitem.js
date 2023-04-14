import styled from "styled-components";

export const DiscItemStyled = styled.div`
.discbox{
    width: 100px;
    height: 100px;
    
    .imgbox{
        position: relative;
        width: 100%;
        height: 100%;

        .d-img{
            display: block;
            width: 100%;
            height: 100%;
            font-size: -99999;
        }

        .icon-play{
            
            position: absolute;
            right: 10px;
            bottom: 5px;
            display: none;
            width: 22px;
            height: 22px;
            z-index: 20;
            background-position: 0 -85px;
        }

        .icon-play:hover{
            display: block;
            background-position: 0 -110px;
        }

        .mask{
            z-index: 10;
            position: absolute;
            top:0;
            left: 0;
            display: inline-block;
            width: 118px;
            height: 100px;
            background-position: -1px -570px;
        }

        .mask:hover + .icon-play{
            display: block;
        }
    }

    .dec{
        font-size: 12px;
        line-height: 18px;
        margin-top:7px;
        .na-b{
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-wrap: normal;

            .disc-link{
               
                color: #000;   
            }

            .disc-link:hover{
                color: #000;
            }
        }
        .au-b{
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-wrap: normal;

            .disc-author{
                color: #666;
                font-size: 12px;
                line-height: 18px;
            } 
        }
        
    }

    .dec p{
        width: 90%;
        
    }

    .dec p>a:hover{
    
        text-decoration: underline;
    }

    
}





`
