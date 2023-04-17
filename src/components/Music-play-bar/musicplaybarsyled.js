import styled from "styled-components";
import playbarbg from '@/assets/img/playbar_sprite.png'
import progressbar from '@/assets/img/progress_bar.png'
import hzh from '@/assets/img/hzh.png'
export const MusicPlayBarStyled = styled.div`
    position:fixed;
    bottom:0;
    left:0;
    z-index:200;
    width:100%;
    height: 53px;
    margin: 0 auto;

    // 图标通用样式
    .icn{
        width: 25px;
        height: 25px;
        margin: 11px 2px 0 0;
        text-indent: -9999px;
        background:url(${playbarbg}) repeat-x 0 0;
    }

    // 隐藏锁
    .uplock{
        position: relative;
        z-index: 11;

        //放置图标的区域
        .left-lockarea{
            position: absolute;
            top: -14px;
            right: 0px;
            width: 52px;
            height: 67px;
            background:url(${playbarbg}) no-repeat;
            background-position: 0 -380px;

            .lock-icon{
                display: block;
                width: 18px;
                height: 18px;
                margin: 6px 0 0 17px;
                background:url(${playbarbg}) no-repeat; 
            }

            .un-lock{
                background-position: -80px -380px;
                &:hover{
                    background-position: -80px -400px;
                }
            }
            .lock{
                background-position: -100px -380px;
                &:hover{
                    background-position: -100px -400px;
                }
            }
        }
        //用于遮住滚动条的区域
        .right-hidden{
            position: absolute;
            top: -1px;
            right: -15px;
            width: 15px;
            height: 54px;
            background:url(${playbarbg}) no-repeat;
            background-position: -52px -393px;
            pointer-events: none;

        }
    }
    //背景图
    .bg{
        height:53px;
        margin-right: 52px;
        background:url(${playbarbg}) repeat-x 0 0;
    }

    .hand{
        position: absolute;
        top: -10px;
        width: 100%;
        height: 20px;
        cursor: pointer;
    }
    //中间主要区域
    .wrap{
        display:flex;
        position: absolute;
        left: 279px;
        top: 6px;
        z-index: 15;
        width: 980px;
        height: 47px;
        margin: 0 auto;

        //左边按钮
        .c-btns{
            display:flex;
            width: 137px;
            padding: 6px 0 0 0;

            a{
                display: block;
                width: 28px;
                height: 28px;
                margin-right: 8px;
                margin-top: 5px;
                text-indent: -9999px;
                background:url(${playbarbg}) no-repeat;
            }

            .pre{
                background-position: 0 -130px;

                &:hover{
                    background-position: -30px -130px;
                }
            } 
            //暂停时
            .p_btn{
                width: 36px;
                height: 36px;
                margin-top: 0;
                background-position: 0 -204px;

                &:hover{
                    background-position: -40px -204px;
                }
            }
            // 播放时
            .s_btn{
                width: 36px;
                height: 36px;
                margin-top: 0;
                background-position: 0 -165px;
                
                &:hover{
                    background-position: -40px -165px;
                }

            }
            
            .next{
                background-position: -80px -130px;

                &:hover{
                    background-position: -110px -130px;
                }
            }
            
        }
        // 头像
        .head{
            position: relative;
            margin: 6px 15px 0 0;

            .avar{
                width: 34px;
                height: 34px;
            }
            .mask{
                position: absolute;
                top: 0px;
                left: 0px;
                display: block;
                width: 34px;
                height: 35px;
                background:url(${playbarbg}) no-repeat 0 0;
                background-position: 0 -80px;
            }
        }

        // 进度条
        .play{
            position: relative;
            width: 581px;
            display:flex;
            flex-direction: column;
            //歌曲信息
            .words{
                display:flex;
                height: 28px;
                overflow: hidden;
                color: #e8e8e8;
                text-shadow: 0 1px 0 #171717;
                line-height: 28px;

                
                .song_n{
                    max-width: 300px;
                    color: #e8e8e8;

                    &:hover{
                        text-decoration: underline;
                    }
                }

                //MV 
                .mv_icon{
                    
                    width: 19px;
                    height: 17px;
                    margin: 6px 0 0 3px;
                    background:url(${playbarbg}) no-repeat 0 0;
                    background-position: 0 -57px;

                    &:hover{
                        background-position: -20px -57px;     
                    }
                }
                .by{
                    max-width: 220px;
                    margin-left: 15px;
                    color: #9b9b9b;

                    .singer_n{
                        color: #9b9b9b;

                        &:hover{
                            text-decoration: underline;
                        }
                    }
                }
                .song_l{    
                    width: 14px;
                    height: 15px;
                    margin: 7px 0 0 13px;
                    background:url(${playbarbg}) no-repeat 0 0;
                    background-position: -110px -103px;  
                    
                    &:hover{
                        background-position: -130px -103px;
                    }
                }
            }
        }
        .progr{
            display:flex;
            height:32px;
            .ant-slider {
                width:466px;
                height: 9px;
                margin:0;
                margin-top: 2px;
                z-index: 100;
              
                .ant-slider-rail,
                .ant-slider-track,
                .ant-slider-step {
                    height: 9px;
                }
              
                .ant-slider-rail {
                    background: url(${progressbar}) no-repeat 0 0;
                }
              
                .ant-slider-track {
                    background: url(${progressbar}) no-repeat;
                    background-position: left -66px;
                }
              
                .ant-slider-handle {
                    width: 20px;
                    height: 22px;
                    border: 0;
                    background: url(${require('@/assets/img/sprite_icon.png')}) no-repeat;
                    background-position: 0 -253px;
                    
                    &::before{
                        content:none;
                    }

                    &::after{
                        content:none;
                    }
                }
            }

            //时间
            .song-time {
                line-height: 20px;
                color: #a1a1a1;
                margin-left:10px;

                .total-time {
                  color: #797979;
                }
            }
        }
        
        //收藏分享
        .opra{
            display:flex;
            width: 87px;

            .icn-pip{
                position: relative;
                background: url(${hzh}) no-repeat 0 0;

                &:hover{
                    background-position-y: -25px;
                }
            }

            // 点击添加active类
            .icn-pip.active{
                background-position-y: -25px;
            }
            
             
            .icn-add{
                background-position: -88px -163px;

                &:hover{
                    background-position: -88px -189px;
                }
            }

            .icn-share{
                background-position: -114px -163px;

                &:hover{
                    background-position: -114px -189px     
                }
            }
        }

        // 歌单，音量
        .ctrl{
            display:flex;
            position: relative;
            z-index: 10;
            width: 113px;
            padding-left: 13px;
            background:url(${playbarbg}) no-repeat 0 0;
            background-position: -147px -238px;

            //音量条区域
            .m-vol{
                position: absolute;
                top: -113px;
                left: 9px;
                clear: both;
                width: 32px;
                height: 113px;

                // 背景
                .barbg{
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 32px;
                    height: 113px;
                    background:url(${playbarbg}) no-repeat 0 0;
                    background-position: 0 -503px;
                }

                .vbg{
                    position: absolute;
                    padding: 4px 0;
                    top: 3px;

                    .ant-slider {
                        height: 93px;
  
                        .ant-slider-rail,
                        .ant-slider-track,
                        .ant-slider-step {
                            height: 93px;
                        }
                      
                        .ant-slider-track {
                            background:url(${playbarbg}) no-repeat 0 0;
                            background-position: -40px bottom;
                        }
                      
                        .ant-slider-handle {
                            left:-3px;
                            display: block;
                            width: 18px;
                            height: 20px;
                            border: 0;
                            background: url(${require('@/assets/img/sprite_icon.png')}) no-repeat;
                            background-position: -40px -250px;
                                
                            &:hover{
                                background-position: -40px -280px;
                            }

                            &::before{
                                content:none;
                            }
        
                            &::after{
                                content:none;
                            }
                        }
                    }

                    // .curr{
                    //     position: absolute;
                    //     bottom: -90px;
                    //     left: 14px;
                    //     width: 4px;
                    //     height: 93px;
                    //     background:url(${playbarbg}) no-repeat 0 0;
                    //     background-position: -40px bottom;
                    //     overflow: hidden;
                    // }

                    // .btn{
                    //     position: absolute;
                    //     top: 0;
                    //     left: 7px;
                    //     display: block;
                    //     width: 18px;
                    //     height: 20px;
                    //     background-position: -40px -250px;

                    //     &:hover{
                    //         background-position: -40px -280px;
                    //     }
                    // }
                }
            }

            //音量
            .icn-vol{
                background-position: -2px -248px;

                &:hover{
                    background-position: -31px -248px;
                }
                &.active{
                    background-position: -31px -248px;
                }
            }
            // 循环
            .icn-loop{
                background-position: -3px -344px;

                &:hover{
                    background-position: -33px -344px;
                }
            }
            //播放列表
            .icn-list{
                display: block;
                width: 38px;
                padding-left: 21px;
                background-position: -42px -68px;
                line-height: 27px;
                text-align: center;
                color: #666;
                text-shadow: 0 1px 0 #080707;
                text-indent: 0;
                text-decoration: none;

                &:hover{
                    background-position: -42px -98px;
                    text-decoration: none;
                }

            }
            //添加播放列表提示
            .add{
                position: relative;
                zoom: 1;
                width: 59px;
                height: 36px;
                 
            }
            .tip{
                position: absolute;
                top: -51px;
                left: -65px;
                clear: both;
                width: 152px;
                height: 49px;
                background:url(${playbarbg}) no-repeat 0 0;
                background-position: 0 -287px;
                text-align: center;
                color: #fff;
                line-height: 37px;      
            }
            .tip-1{
                top: -35px;
                left: 12px;
                width: 81px;
                height: 39px;
                line-height: 34px;
                background-position: 0 -457px;
            }
        }
    }

`