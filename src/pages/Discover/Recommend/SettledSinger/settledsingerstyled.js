import styled from "styled-components";

export const SettledSingerStyled = styled.div`
    margin-top: 15px;
    
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
                margin-top:15px;
                .infobox{
                    display:flex;
                    width: 210px;
                    height: 62px;
                    background: #fafafa;
                    
                    &:hover{
                        background: #f4f4f4;
                    }
                    // 图片头像
                    .h-d{
                        
                        .h-img{
                            width: 62px;
                            height: 62px;
                        }
                    }

                    // 歌手信息
                    .info{
                        width: 133px;
                        height: 60px;
                        padding-left: 14px;
                        border: 1px solid #e9e9e9;
                        border-left: none;

                        .nam{
                            display:block;
                            margin-top: 8px;
                            font-size:14px;
                            font-weight:bold;
                            color:#000;
                        }
                        p{
                            width: 90%;
                            margin-top: 8px;
                            color:#666;
                        }
                    }
                }
            }
        }

        //底部申请按钮
        .acv{

            .u-btn{
                display:block;
                height:31px;
                line-height:31px;
                text-align:center;
                margin:0 15px;
                border-right:1px solid #ddd;
                border-radius:4px;
                color:#333;
                font-weight:bold;
                background-position: 0 -59px;

                &:hover{
                    background-position: 0 -140px;
                }
            }
        }
    }

`