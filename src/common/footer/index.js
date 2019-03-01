import React, { Component } from 'react';
import {
    FooterWrapper,
    FooterContainer,
    WebInformation
} from './style';
import {
  Row,
  Col
} from 'antd';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render () {
    return (
      <FooterWrapper>
        <FooterContainer>
          <Row type="flex" justify="space-between">
            <Col span={7} className="footer-left">
              <img src="/images/footer/1.jpg" alt="" />
            </Col>
            <Col span={8} className="footer-center">
              <div className="center-border">
                <div className="phoneName">TELEPHONE:</div>
                <div className="phoneNum">0512-52719951</div>
                <div className="phoneExplain">客服专线电话 (工作时间：周一至周六08:00-22:00)</div>
                <div className="footer-contact">
                  E-mail:nihao@chinespain.com<br />
                  欧洲总部地址:：Calle de Cidro,3 Madrid<br />
                  苏ICP备17032616号
                </div>
              </div>
            </Col>
            <Col span={7} className="footer-right">
              <div className="right-item">
                <div className="rightProblem">在线预订<span className="problemEn">| ONLINE BOOKING</span></div>
                <div className="problemList">
                  <Link to="/" className="problemItem">网站预订行程</Link>
                </div>
              </div>
              <div className="right-item">
                <div className="rightProblem">在线咨询<span className="problemEn">| ONLINE CONSULTING</span></div>
                <div className="problemList">
                  <Link to="/" className="problemItem">给您提供最适合的旅游方案</Link>
                </div>
              </div>
              <div className="right-item">
                <div className="rightProblem">疑问解答<span className="problemEn">| QUESTION ANSWER</span></div>
                <div className="problemList">
                  <Link to="/" className="problemItem">行程疑问</Link>
                  <Link to="/" className="problemItem">付款方式</Link>
                </div>
              </div>
            </Col>
          </Row>
          <WebInformation>Copyright © 2016 Chinespain 西班牙定制旅游</WebInformation>
        </FooterContainer>
      </FooterWrapper>
    )
  }
}

export default Footer;