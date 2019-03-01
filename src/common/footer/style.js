import styled from 'styled-components';

export const FooterWrapper = styled.div`
  height:480px;
  width:100%;
  background-image:url(/images/footer/bg.jpg);
  position:relative;
`;

export const FooterContainer = styled.div`
  max-width:1200px;
  padding-top:80px;
  margin:0 auto;
  .footer-left{
    img{
      width:100%;
      height:250px;
    }
  }
  .footer-center{
    color:#ffffff;
    .center-border{
      width:100%;
      height:250px;
      border:solid 8px #ffffff;
      padding:15px;
      .phoneName{
        font-size:14px;
        font-weight:bold;
      }
      .phoneNum{
        font-size:36px;
        font-weight:bold;
        margin-top:15px;
      }
      .phoneExplain{
        font-size: 14px;
        color:#999999;
      }
      .footer-contact{
        font-size:14px;
        margin-top:15px;
      }
    }
  }
  .footer-right{
    display:flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: space-between ;
    .right-item{
      .rightProblem{
        color: #ff459a;
        font-size:16px;
        margin-bottom:4px;
        .problemEn{
          color: #cccccc;
          font-size:16px;
          margin-left:8px;
        }
      }
      .problemList{
        .problemItem{
          font-size:16px;
          color:#ffffff;
          display:block;
        }
      }
    }
  }
`;

export const WebInformation = styled.div`
  color:white;
  font-size:16px;
  position:absolute;
  bottom:15px;
  max-width:1200px;
  margin:0 auto;
`;