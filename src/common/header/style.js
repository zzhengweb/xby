import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    width:1200px;
    height:92px;
    margin:0 auto;
    line-height:92px;
    position: relative;
`;

export const ImgLogo = styled.img`
    max-width:450px;
    width:100%;
    display:inline-block;
    margin-top:-8px;
`;

export const HeaderNav = styled.ul`
    position: absolute;
    li{
        list-style:none;
        float:left;
        padding:15px 15px 0 15px;
        line-height:80px;
        a{
            color:#696969;
            font-weight:normal;
            &:hover{
                color: #ff459a;
            }
        }
    }
`;