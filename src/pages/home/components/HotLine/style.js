import styled from 'styled-components';
import Next from '../../next.png'
import Prev from '../../prev.png'

export const HotLineWrapper = styled.div`
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