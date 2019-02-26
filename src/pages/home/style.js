import styled from 'styled-components';
import Next from './next.png'
import Prev from './prev.png'

const title = `
    text-align:center;
    .title-cn{
        margin-top: 60px;
        font-size: 30px;
        color:#333;
    }
    .title-en{
        font-size: 18px;
        color: #ff459a;
        font-weight:bold;
    }
    .title-content{
        font-size: 14px;
    }
    .line{
        width: 25px;
        height: 1px;
        background-color:#ff459a;
        margin: 15px auto;
    }
`

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

export const  LineEntranceWrapper = styled.div`
    width:1200px;
    margin:30px auto;
`

export const  LineEntranceLeft = styled.div`
    width:300px;
    height:400px;
    float:left;
    background-image:url('/images/hot-line/adv.jpg');
    background-size:cover;
`

export const  LineEntranceRight = styled.div`
    width:900px;
    height:400px;
    float:left;
    padding-left:20px;
`

export const  LineItem = styled.div`
    width:220px;
    height:200px;
    float:left;
    position:relative;
    overflow:hidden;
    img{
        position:absolute;
        width:100%;
        height:100%;
    }
    .country{
        position:absolute;
        font-size: 18px;
        color: white;
        margin-top: 17px;
        margin-left: 22px;
    }
    .hoverShow{
        position:absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(253,63,159,0.8);
        text-align: center;
        color: white;
        padding-top:15px;
        display:none;
        .title{
            line-height:1.6;
            font-size: 24px;
        }
        .content{
            font-size: 12px;
            line-height:2;
            margin-top:15px;
            padding:0 15px;
        }
        .whiteLine{
            width: 36px;
            height: 1px;
            background-color:#ffffff;
            margin: 15px auto;
        }
    }
    &:hover{
        .hoverShow{
            display:block;
        }
        .country{
            display:none;
        }
    }
`
export const FeatureWrapper = styled.div`
    width:1200px;
    margin:30px auto;
    .feature-item-round{
        width: 96px;
        height: 96px;
        border-radius: 50%;
        background-color: #cbcbcb;
        text-align: center;
        line-height:96px;
        img{
            display:inline-block;
        }
        &:hover{
            background-image: linear-gradient(0deg,#ff459a,#ed17c2);
        }
    }
    .feature-item-other{
        width: 280px;
        height: 96px;
        border-radius: 48px;
        background-color: #cbcbcb;
        padding-left:20px;
        .icon{
            height:96px;
            line-height:96px;
            float:left;
            margin-right:15px;
            img{
                display:inline-block;
            }
        }
        .num{
            font-size:48px;
            height:96px;
            line-height:96px;
            float:left;
            color:white;
            span{
                font-size:16px;
            }
        }
        &:hover{
            background-image: linear-gradient(0deg,#ff459a,#ed17c2);
        }
    }
`

export const AdvantageWrapper = styled.div`
    width:1200px;
    margin:30px auto;
`

export const AdvantageTitle = styled.div`
    ${title};
`

export const AdvantageText = styled.div`
    text-align:center;
    margin-bottom:80px;
    .icon{
        .iconfont{
            font-size:40px;
            color:#ff459a;
        }
    }
    .title{
        font-size: 18px;
    }
    .content{
        color: #999999;
        padding: 0 15px;
    }
`

export const LifeWallWrapper = styled.div`
    max-width:1920px;
    height:550px;
    background-image:url('/images/box04-01.jpg');
    background-size:cover;
    padding-top:65px;
    margin:30px auto;
`

export const LifeWallContainer = styled.div`
    width:920px;
    margin:0 auto;
    .click-wall{
        text-align:center;
        height:200px;
        img{
            display:inline-block;
            margin-top:10px;
            margin-bottom:10px;
            transition-property: transform,width;
            transition-duration: 0.5s,1s;
            box-shadow: 3px 3px 4px rgba(0,0,0,0.2);
            width: 200px;
            border-radius:8px;
            &.rollimg1{
                transform: rotate(14deg);
            }
            &.rollimg2{
                transform: rotate(-8deg);
            }
            &.rollimg3{
                transform: rotate(-25deg);
            }
            &.rollimg4{
                transform: rotate(12deg);
            }
            &.rollimg5{
                transform: rotate(-8deg);
            }
            &.rollimg6{
                transform: rotate(18deg);
            }
            &.rollimg7{
                transform: rotate(-16deg);
            }
            &.rollimg8{
                transform: rotate(12deg);
            }
            &:hover{
                transform: rotate(0deg);
                width: 220px;
            }
        }
    }
`

export const CommentWrapper = styled.div`
    width:1200px;
    margin:30px auto;
`

export const CommentTitle = styled.div`
    ${title};
`

export const CommentList = styled.div`
    margin:30px auto;
    .commentItem{
        .commentImg{
            cursor:pointer;
            .img1{
                display:block;
            }
            .img2{
                display:none;
            }
            &:hover{
                .img1{
                    display:none;
                }
                .img2{
                    display:block;
                } 
            }
        }
        .commentTitle{
            font-size: 14px;
            color: #66b7b4;
            text-align: center;
            margin-top: 24px;
        }
        .commentContent{
            margin-top: 8px;
            font-size: 14px;
            line-height: 24px;
            color: #333;
        }
    }
`
