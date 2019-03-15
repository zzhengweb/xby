import styled from 'styled-components';

export const DetailWrapper = styled.div`
    width:1200px;
    margin:0 auto;
`

export const DetailTop= styled.div`
    display:flex;
    justify-content: space-between;
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