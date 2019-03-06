import styled from 'styled-components';
import {title} from '../../style';

export const AdvantageWrapper = styled.div`
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