import styled from "styled-components";

export const LoginStyled = styled.div`
    width:100%;
    height: 126px; 
    

    .loignbox{
        width:100%;
        height:100%;
        background-position:0 0;
        .text{
            width: 205px;
            margin: 0 auto;
            padding: 16px 0;
            line-height: 22px;
            color:#666;
        }
        .l-btn{
            display:block;
            width:100px;
            height:31px;
            text-align:center;
            line-height:31px;
            margin:0 auto;
            color: #fff;
            text-shadow: 0 1px 0 #8a060b;
            background-position: 0 -195px;

            &:hover{
                background-position: -110px -195px;
            }
        }
    }

`