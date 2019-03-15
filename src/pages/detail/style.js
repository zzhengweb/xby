import styled from 'styled-components';

export const DetailWrapper = styled.div`
    width:1200px;
    margin:0 auto;
`

export const DetailTop= styled.div`
    display:flex;
    justify-content: space-between;
    margin:15px auto;
`

export const DetailSlick = styled.div`
    width:530px;
    img{
        width:100%
    }
`

export const DetailTopRight = styled.div`
    width:650px;
    padding:15px;
    box-shadow:0 0 4px #ccc;
`

export const RightList = styled.div`
    display:flex;
    font-size:16px;
`;

export const RightListName = styled.div`
    width:80px;
    color:#333333;
`;

export const RightListContent = styled.div`
    flex:1;
`;

export const DetailTopPrice = styled.div`
    .price{
        .greenFont{
            width: 160px;
            font-size: 30px;
            color: #8dbf00;
            font-weight:bold;
        }
        .smallFont{
            flex:1;
            font-size:14px;
            color: #8dbf00;
            display:inline-block;
            margin-left:30px;
        }
    }
`;

export const  LineItemOther = styled.div`
    .iconfont{
        color: #97CC01;
        margin-right:4px;
    }
    .hotal,.num{
        display:inline-block;
        margin-right:15px;
    }
`;

export const DetailGrayBox = styled.div`
    background-color:#f7f7f7;
    color:#999999;
    padding:10px;
    p{
        margin:0;
        line-height:1.6;
    }
`;

export const DetailContact = styled.div`
    margin-top:10px;
    .information{
        font-size:14px;
        display:inline-block;
    }
    .btn{
        font-size:16px;
        color:white;
        background-color: #ff459a;
        width: 124px;
        text-align:center;
        line-height: 42px;
        box-shadow: 0 2px 1px #bfbfbf;
        display:inline-block;
        border-radius:2px;
        margin-left:15px;
    }
`;

export const DetailMain = styled.div`
    max-width:1200px;
    padding:30px;
    box-shadow:0 2px 6px #cccccc;
    .title{
        text-align:center;
        font-size:30px;
        color:#333333;
        padding-bottom:30px;
    }
`;

export const DeatilCase = styled.div`
    p{
        color:#999999;
        font-size:16px;
        margin-bottom:5px;
    }
    h4{
        color:#31859b
        font-size:18px;
        font-weight:bold;
    }
`;

export const DetailDaysTotal = styled.div`
    margin-top: 30px;
    position:relative;
    .daysItem{
        width:36px;
        height:36px;
        border-radius:50%;
        background-color: #ff459a;
        text-align: center;
        line-height:36px;
        color:white;
        display:inline-block;
        margin-right:15px;
        font-size:16px;
    }
    .line{
        border-bottom:dashed 1px #ccc;
        height:1px;
        width:100%;
        position:absolute;
        top:50%;
        z-index:-1;
    }
`;

export const DetailActivity = styled.div`
    width:100%;
    padding-left:80px;
    padding-right:30px;
    position:relative;
    .line{
        position:absolute;
        height:100%;
        width:1px;
        border-left:dashed 1px #ccc;
        left:30px;
    }
`;

export const DetailPlace = styled.div`
    display:flex;
    align-items:center;
    margin-top:60px;
    margin-bottom:15px;
    .daysItem{
        width:36px;
        height:36px;
        border-radius:50%;
        background-color: #ff459a;
        text-align: center;
        line-height:36px;
        color:white;
        display:inline-block;
        margin-right:15px;
        font-size:16px;
    }
    .name{
        font-size:30px;
    }
`;

export const DeatilEveryContent = styled.div`
    color: #999999;
    font-size:16px;
    margin-bottom:15px;
`;

export const DetailActivitySpot = styled.div`
    width:100%;
    margin-bottom:15px;
    img{
        width:100%;
        height:57.2wv;
        margin-bottom:5px;
    }
    h5{
        font-size:16px;
    }
    p{
        font-size:12px;
    }
`;