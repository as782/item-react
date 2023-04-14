import styled from "styled-components";

export const HotDjStyled = styled.div`
    margin-top: 30px;
        
    // 顶部标题
    .head{
        height: 23px;
        margin:0 20px;
        border-bottom: 1px solid #ccc;
        .tt{
            color:#333;
            font-size:12px;
            font-weight: bold;
        }

        .more{
            float:right;
            &:hover{

                text-decoration:underline;
            }
        }
    }
    // 歌手列表
    .listbox{
        width:100%;
        // ul
        .s-list{
            margin:6px 0 14px 20px;
            // li
            .item{
                display:flex;
                margin-top:15px;

                .infobox{
                    width: 40px;
                    margin-right: 10px;

                    // 图片头像
                    .h-d{
                        
                        .h-img{
                            width: 40px;
                            height: 40px;
                            box-shadow: 0 0 1px #333333 inset;
                        }
                    }

                   
                }
                 //歌手信息
                .info{
                    
                    p{
                        width: 100%;
                        color:#666;
                        line-height:21px;
                    }
                     .nam{
                        
                        .n-l{
                             font-weight:bold;
                            color:#000;
                            &:hover{
                                text-decoration:underline;
                            }
                        }
                    }
                }
            }
        }

`