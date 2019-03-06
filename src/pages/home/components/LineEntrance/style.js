import styled from 'styled-components';

export const  LineEntranceWrapper = styled.div`
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