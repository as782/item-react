import styled from "styled-components";
import footerimg from "@/assets/img/sprite_footer_03.png"

//底部警徽
import police from '@/assets/img/police.png'
export const Footerstyle = styled.div`

.footerbox{
    position: relative;
    height: 325px;
    overflow: hidden;
    border-top: 1px solid #d3d3d3;
    background: #f2f2f2;

    .footer {
        width: 980px;
        margin: 0 auto;

       
    }

}


`
export const FooterCenter = styled.div`
.center{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 33px;

    .item{
        width: 45px;
        margin-left: 80px;
        text-align: center;
        color: #666;

        .logo{
           
            display:block;
            width:45px;
            height:45px;
            border-radius: 50%;
            margin: 0 auto;
            background: url(${footerimg}) no-repeat;
            background-size: 220px 220px;
        }

        .logo1{
            background-position: -170px -5px;

            &:hover{
                background-position: -5px -115px;
            }
        }
        .logo2{
            background-position: -5px -170px;

            &:hover{
                background-position: -60px -170px;
            }
        }
        .logo3{
            background-position: -5px -60px;

            &:hover{
                background-position: -60px -5px;
            }
        }
        .logo4{
            background-position: -60px -60px;

            &:hover{
                background-position: -115px -5px;
            }
        }
        .logo5{
            background-position: -115px -115px;

            &:hover{
                background-position: -5px -5px;
            }
        }
        .logo6{
           
            background-position: -170px -115px;

            &:hover{
                background-position: -60px -115px;
            }
        }
        .logo7{
            background-position: -170px -60px;

            &:hover{
                background-position: -115px -60px;
            }
        }
        
        .title{
            display: inline-block;
            width: 100px;
            margin-top: 10px;
            margin-left: -27.5px;
            font-weight: 400;
            font-size: 12px;
            text-align: center;
            color: rgba(0,0,0, 0.5);
        }
    }
}

`
export const FooterCopy = styled.div`

.copy{
    padding-top: 60px;
    line-height: 24px;
    margin: 0 auto;
    text-align: center;

    .link{

        .line{
            margin: 0 8px 0 8px;
            color: #D9D9D9;
        }
    }
    
    .footer-text{
        margin-top:10px;

        a:hover{
            text-decoration: underline;
        }
        
        .police-logo{
            width: 14px;
            height: 14px;
            background: url(${police}) no-repeat;
            background-size: cover;
            display: inline-block;
            vertical-align: -2px;
            margin-right: 4px;
            margin-left: 4px;
        }

        .sep{
            margin-right: 14px;
        }
    }
}
`