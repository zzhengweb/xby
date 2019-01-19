import styled from 'styled-components';
import Next from './next.png'
import Prev from './prev.png'

export const OtherWrapper = styled.div`
    width:1200px;
    margin:0 auto;
`

export const CustonTrip = styled.div`
    height: 60px;
    background-image: linear-gradient(0deg,#ff459a,#ed17c2);
    line-height:56px;
    padding-left:16px;
    font-size:26px;
    color:white;
    .trip-icon{
        font-size:32px;
        margin-right:12px;
    }
    .button-go{
        color:white;
        display:inline-block;
        font-size:24px;
        font-weight:bold;
        width:68px;
        height:32px;
        line-height:32px;
        text-align:center;
        background-color:rgba(112,2,73,1);
    }
`

export const HotPhone = styled.div`
    height: 60px;
    background-color:#c9c9c9;
    line-height:56px;
    padding-left:20px;
    font-size:26px;
    color:white;
    display:flex;
    position:relative;
    .iconfont{
        font-size:32px;
        margin-right:12px;
        &.wx-icon{
            font-size:36px;
            flex:1;
            text-align:center;
            display:inline-block;
            cursor:pointer;
        }
    }
    .small-word{
        font-size:14px;
        display:inline-block;
        line-height:16px;
        border-right:solid 1px white;
        padding-right:12px;
        margin-right:12px;
        margin-top:12px;
        height:32px;
    }
    .popImg{
        position:absolute;
        top:36px;
        right:0;
        z-index:1;
    }
`

export const SafeBox = styled.div`
    height: 60px;
    line-height:60px;
    background-color:#3A5065;
    color:white;
    text-align:center;
    .safe-icon{
        font-size:32px;
        margin-right:12px;
    }
    .small-word{
        font-size:12px;
        display:inline-block;
        line-height:16px;
        padding-right:12px;
        margin-right:12px;
        text-align:left;
    }
`

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

export const HotLineWrapper = styled.div`
    width:1200px;
    margin:30px auto;
    border:solid 1px #cccccc;
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
`

export const HotLineItem = styled.div`
    position:relative;
`
export const HotLineLeft = styled.div`
    width:310px;
    height:200px;
    float:left;
    overflow:hidden;
    img{
        width:100%;
        height:100%;
    }
`
export const HotLineRight = styled.div`
    padding-left:30px;
    height:200px;
    width:888px;
    float:left;
`

export const  LineItemTitle = styled.div`
    position:relative;
    .title{
        font-size: 24px;
        color: #333;
        line-height: 36px;
        float:left;
    }
    span{
        width: 36px;
        height: 24px;
        text-align: center;
        line-height: 24px;
        border-radius: 3px;
        background-color: #97CC01;
        font-size: 14px;
        color: white;
        margin-left: 9px;
        display: block;
        float:left;
        margin-top:6px;
    }
`
export const  LineItemWay = styled.div`
    width: 100%;
    font-size: 14px;
    color: #666666;
    font-weight: normal;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`
export const  LineItemPlaces = styled.div`
    width:100%;
    span{
        width: 23%;
        height: 26px;
        background-color: #fd3f9f;
        color: white;
        line-height: 26px;
        text-align: center;
        font-size: 14px;
        margin-right: 3%;
        margin-top: 8px;
        border-radius: 2px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        display:inline-block;
    }
`
export const  LineItemOther = styled.div`
    position:absolute;
    bottom:4px;
    .iconfont{
        color: #97CC01;
        margin-right:4px;
    }
    .hotal,.num{
        display:inline-block;
        margin-right:15px;
    }
`