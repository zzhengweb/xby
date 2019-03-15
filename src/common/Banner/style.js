import styled from 'styled-components';
import Next from '.././../pages/home/next.png';
import Prev from '.././../pages/home/prev.png';

export const BannerWrapper = styled.div`
    width:100%;
    overflow:hidden;
    position:relative;
    .slick-prev{
        position:absolute;
        left:15px;
        z-index:1;
        width:50px;
        height:50px;
        background-image:url(${Prev});
        &:before{
            content:'';
        }
        &:hover,&:focus{
            background-image:url(${Prev});
        }
    }  
    .slick-next{
        position:absolute;
        right:15px;
        z-index:1;
        width:50px;
        height:50px;
        background-image:url(${Next});
        &:before{
            content:'';
        }
        &:hover,&:focus{
            background-image:url(${Next});
        }
    }
    .slick-dots{
        position:absolute;
        z-index:1;
        bottom:15px;
        li.slick-active button:before{
            color:white;
            opacity:1;
        }
    }
`