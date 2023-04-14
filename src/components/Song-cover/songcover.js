import styled from "styled-components";

export const SongCoverStyled =styled.div`
.sc1{
    width: 140px;
    height: 204px;
    
    .imgct{
        position: relative;
        width: 140px;
        height: 140px;

        .mask{
            display:block;
            position:absolute;
            top:0;
            left:0;
            width:100%;
            height:100%;
        }
        .cover{
            display: block;
            width: 100%;
            height: 100%;
        }

        .b-i{
            position: absolute;
            top: 0;
            left: 0;
            width: 40px;
            height: 40px;
            background-position: -135px -220px;
        }

        .pbox{
            position: absolute;
            bottom: 0;
            left: 0; 
        }

        .pbox .liscount{
            width: 140px;
            height: 27px;
            background-position: 0 -537px;
            color: #ccc;
            display: flex;
        }

        .pbox .liscount .lis-icon{
            display: inline-block;
            width: 14px;
            height: 11px;
            background-position: 0 -24px;
            margin: 9px 5px 9px 10px;
        }

        .pbox .liscount .p-count{
            display: inline-block;
            margin-top: 7px;
        }

        .pbox .icon-play{
            position: absolute;
            right: 10px;
            bottom: 5px;
            width: 16px;
            height: 17px;
            background-position: 0 0;
        }
        
        .pbox .icon-play:hover{
            background-position: 0 -60px;
        }

    }

    
    /* 下方描述文字 */
    .dec{
        margin: 8px 0 3px;
        font-size: 14px;

        .dec-text{
            display: inline-block;
            max-width: 100%;
            line-height: 1.5;
            vertical-align: middle;
            color:#000;
            &:hover{
                text-decoration:underline;
            }
        }
        .r-dec{
            .dec-write{
                font-size:12;
                max-width: 76%;
                color:#666;
            }
            span{
                font-size:12;
                color:#666;
            }
            .r-img{
                height: 13px;
                width: 13px;
                display: inline-block;
                vertical-align: middle;
            }
        }

        /* 图标是否为电台节目 */
        .dec-text .m-f{
            position: relative;
            display: inline-block;
            width: 35px;
            height: 15px;
            top: 3px;
            margin-right: 3px;
            background-position: -31px -658px;
        }

    }
    
   
}

    

`
