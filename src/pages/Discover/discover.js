import styled from "styled-components";

export const Discoverstyle = styled.div`
>.wrap {
    z-index: 90;
    height: 35px;
    box-sizing: border-box;
    background-color: #C20C0C;
    overflow: hidden;
    border-bottom: 1px solid #a40011;

    .nav-discover {
        width: 1100px;
        height: 34px;
        margin: 0 auto;

        .navlist {
            display: flex;
            padding-left: 180px;
            width: 100%;
            height: 100%;
            
            .navitem {

                height: 34px;
                
                a {
                    display: inline-block;
                    height: 34px;
                    text-align: center;
                    color: #fff;
                    box-sizing: border-box;

                    em {
                        display: inline-block;
                        height: 20px;
                        padding: 0 13px;
                        margin: 7px 17px 0;
                        border-radius: 20px;
                        line-height: 21px;
                    }
                    
                    &:hover em {
                        text-decoration: none;
                        background-color: #9b0909;
                    }
                }

                .menu-active em {
                    text-decoration: none;
                    background-color: #9b0909;
                }
            }
        }
    }

}
 

`
 