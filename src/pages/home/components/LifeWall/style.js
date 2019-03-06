import styled from 'styled-components';

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