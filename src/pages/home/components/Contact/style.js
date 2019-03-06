import styled from 'styled-components';

export const OtherWrapper = styled.div`
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