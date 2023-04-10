import styled from 'styled-components'
import sprite_01 from '@/assets/img/sprite_01.png'
// 头部的样式

export const Headerstyle = styled.div`
    position: relative;
    z-index: 1000;
    height: 70px;
    box-sizing: border-box;
    background: #242424;
    border-bottom: 1px solid #000;
        .nav-top {
            display: flex;
            width: 1100px;
            height: 70px;
            margin: 0 auto;

            .Logo {
                width: 172px;
                height: 69px;
                background-position: 1px 1px;

                .nav-top .Logo a {
                    display: inline-block;
                    width: 157px;
                    height: 100%;
                    padding-right: 20px;
                    text-indent: -9999px;
                }
            }

            .navList {
                display: flex;

                .listItem {
                    position: relative;
                    text-align: center;


                    a {
                         display: inline-block;
                         height: 70px;
                         font-size: 14px;
                         color: #ccc;
                         padding: 0 19px;
                         text-align: center;
                         line-height: 70px;
                        
                    }
                    a:hover {
                            background: #000;
                            text-decoration: none;
                            color: #fff;
                    }

                    .select {
                           /* 选中时出现红色箭头 */
                         background-color: #000;
                    }

                    .select .arrow{
                        
                        display: block;
                        position: absolute;
                        left: 50%;
                        top: 64px;
                        width: 12px;
                        height: 7px;
                        margin-left: -6px;
                        overflow: hidden;
                        background-position: -226px 0;
                    }

                }

            }

            .right {
                margin-left: 60px;
                display: flex;

                 /* 搜索box */
                .searchbox {
                    display: block;

                    .search {
                        margin-top: 19px;
                        display: flex;
                        width: 158px;
                        height: 32px;
                        border-radius: 32px;
                        box-sizing: border-box;
                        background-color: #fff;
                        
                        .icon {

                            display: block;
                            margin-left: 8px;
                            width: 20px;
                            background: url(${sprite_01}) -8px -100px;
        
                        }

                        input {
                            width: 70%;
                            padding-left: 5px;
                            background-color: #fff;
                        }
                    }
                }

            }

            // /* 创作者中心 */

             .create {

                width: 90px;
                height: 32px;
                margin: 19px 0 0 12px;
                box-sizing: border-box;
                padding-left: 16px;
                border: 1px solid #4F4F4F;
                line-height: 33px;
                color: #ccc;
                border-radius: 20px;

                 a {
                    color: #fff;
                }

                &:hover {
                    text-decoration: none;
                    border: 1px solid #fff;
                }
            }

          



            /* 头像主页 */

            .avatarbox {

                height: 45px;
                margin: 19px 0 0 20px;
                padding: 0 22px 0 0;
                background-image: none;

                .avatar img {
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                }
    
            }

        }
        /* 红线条 */
        .red-line{
            z-index: 100;
            width: 100%;
            height: 5px;
            background-color:  #C20C0C;
        }


`
 