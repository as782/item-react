import styled from "styled-components";

export const ThemeHeaderStyled = styled.div`
    display:flex;
    height: 33px;
    padding: 0 10px 0 34px;
    background-position: -225px -156px;
    border-bottom: 2px solid #C10D0C;
    .themetitle{
        font-size:20px;
        font-weight:normal;
        line-height: 28px;
    }
    .tab{
        margin: 7px 0 0 20px;

        .tablist{
            display:flex;
            item-align:center;
            
            .listitem{
            a{
                color:#666;

                &:hover{
                    text-decoration: underline;
                }
            }
            }

            .line{
                color:#ccc;
                margin:0px 10px;
            }
        }
  
    }
    .more{  
        flex-grow: 1;
        display:flex;
        margin-top: 10px;
        justify-content:end;

        .more-text:hover{
            text-decoration: underline;
        }
        .more-icon{
            display: inline-block;
            width: 12px;
            height: 12px;
            margin-left: 4px;
            vertical-align: middle;
            background-position: 0 -240px;
        }
    }
    
`