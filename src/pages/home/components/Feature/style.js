import styled from 'styled-components';

export const FeatureWrapper = styled.div`
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