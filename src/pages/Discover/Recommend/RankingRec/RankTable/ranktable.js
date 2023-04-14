import styled from "styled-components";
// 背景图
import rankbg from '@/assets/img/recommend-top-bg.png'
export const RangingRecTable = styled.div`
    width:100%;
    height:472px;
    margin:20px 0 0 0;
    box-sizing:border-box;
    border-right:1px solid #ddd;
    .rank-t{
        display:flex;
        height:100%;
        background: url(${rankbg}) no-repeat  ;
        // 一列表
        .rt{
            border-left:1px solid #ddd;
            width:33.3%;
            height:100%;
            // 表头部
            .t-head{
                display:flex;
                height:100px;
                padding:20px 0 0 20px;

                .img-b{
                    position:relative;
                    display:inline-block;
                    width:80px;
                    height:80px;
                    
                    .i-g{
                        display:block;
                        width:100%;
                        height:100%;
                    }
                    .mask{
                        position:absolute;
                        top:0;
                        left:0;
                        width:100%;
                        height:100%;
                    }
                }

                .text-b{
                    width: 116px;
                    margin: 6px 0 0 10px;

                    .title-text{
                        display:inline-block;
                        width:100%;
                        color:#000;
                        font-size:14px;
                        font-weight:700;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        word-wrap: normal;

                        &:hover{
                            text-decoration:underline;
                        }
                    }

                    .btn{
                        display:flex;
                        margin-top:10px;

                        a{
                            display: block;
                            width: 22px;
                            height: 22px;
                            margin-right: 10px;
                            text-indent: -9999px;
                        }

                        .i-pl{
                            background-position: -267px -205px;

                            &:hover{
                                background-position: -267px -235px;
                            }
                        }
                        .i-sc{
                            background-position: -300px -205px;

                            &:hover{
                                background-position: -300px -235px;
                            }
                        }

                    }
                }
            }
            
            //歌曲列表
            .t-tr{

                .rnk-list{
                    height: 319px;
                    margin-left:50px;
                    line-height:32px;
                    
                    // 前三个的数子颜色红色
                    .rnk-item:nth-child(-n+3)  .r-num{
                        color: #c10d0c;
                    }

                    .rnk-item{
                        
                        display:flex;
                        height:32px;
                        box-sizing:border-box;
                        vertical-align: middle;

                        //排名数字
                        .r-num{
                            
                            position: relative;
                            width: 35px;
                            height: 32px;
                            margin-left: -35px;
                            text-align: center;
                            color: #666;
                            font-size: 16px;
                        }
                        // 划过时让里面的a宽度减小
                        &:hover .s-link {
                            width:96px;
                            text-decoration:underline;
                        }
                        // 显示操作按钮
                        &:hover .op-bar{
                            display:flex;
                        }

                        // 歌曲名字，链接
                        .s-link{
                            
                            width: 170px;
                            height: 32px;
                            color:#000;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            box-sizing:border-box;

                         
                        }

                        //操作按钮
                        .op-bar{
                            display:none;
                            width:82px;
                            margin-top: 7px;
                            
                            a{
                                width: 17px;
                                height: 17px;
                                margin-right: 10px;
                            }
                            .icon-play{
                                
                                background-position: -267px -268px;
                                &:hover{
                                    background-position: -267px -288px
                                }
                            }

                            .icon-add{
                                
                                background-position: 1px -698px;
                                &:hover{
                                    background-position: -21px -698px;     
                                }
                            }

                            .icon-sc{
                                
                                background-position: -297px -268px;
                                &:hover{
                                    background-position: -297px -288px;
                                }
                            }    
                        }
                    }
                }

                // 更多
                .more{
                    height: 32px;
                    margin-right: 32px;
                    text-align: right;
                    line-height: 32px;
                    
                    .tit{
                        color:#333;
                        &:hover{
                            text-decoration:underline;
                        }
                    }
                }
            }
        }
    }
`