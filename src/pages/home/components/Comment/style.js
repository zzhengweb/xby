import styled from 'styled-components';
import {title} from '../../style';

export const CommentWrapper = styled.div`
    margin:30px auto;
`

export const CommentTitle = styled.div`
    ${title};
`

export const CommentList = styled.div`
    margin:30px auto;
    .commentItem{
        margin-bottom:30px;
        padding:0 15px;
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