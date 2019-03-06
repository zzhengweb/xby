import styled from 'styled-components';

const title = `
    text-align:center;
    .title-cn{
        margin-top: 15px;
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

export const FlowWrapper = styled.div`
    max-width:1200px;
    margin:0 auto;
`;

export const FlowBody = styled.div`
    max-width:1200px;
    padding:30px 135px;
    box-shadow:0 2px 6px #cccccc;
    margin-top:15px;
    margin-bottom:30px;
    >.title{
        text-align:center;
        font-size:30px;
        color:#333333;
        padding-bottom:30px;
    }
    .flowImg{
        padding-bottom:30px;
        margin-bottom:30px;
        border-bottom: solid 1px #ccc;
        img{
            max-width:900px;
        }
    }
    .flow_problem{
        margin-bottom:15px;
        h4{
            line-height: 36px;
            margin-top: 20px;
            margin-bottom: 10px;
            color: #534641;
            font-size:18px;
        }
        p{
            color: #918682;
            font-size: 14px;
            line-height: 24px;
        }
    }
`;

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