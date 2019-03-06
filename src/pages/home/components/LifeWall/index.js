import React,{ Component } from 'react';
import {
    LifeWallWrapper,
    LifeWallContainer
} from './style';
import {
    Row,
    Col
} from 'antd';

class LifeWall extends Component {
    render () {
        return (
            <LifeWallWrapper>
                <LifeWallContainer>
                    <Row>
                        <Col span={6} className="click-wall">
                            <img src="/images/lifewall/1.jpg" alt="" className="rollimg1" />
                        </Col>
                        <Col span={6} className="click-wall">
                            <img src="/images/lifewall/2.jpg" alt="" className="rollimg2" />
                        </Col>
                        <Col span={6} className="click-wall">
                            <img src="/images/lifewall/3.jpg" alt="" className="rollimg3" />
                        </Col>
                        <Col span={6} className="click-wall">
                            <img src="/images/lifewall/4.jpg" alt="" className="rollimg4" />
                        </Col>
                        <Col span={6} className="click-wall">
                            <img src="/images/lifewall/5.jpg" alt="" className="rollimg5" />
                        </Col>
                        <Col span={6} className="click-wall">
                            <img src="/images/lifewall/6.jpg" alt="" className="rollimg6" />
                        </Col>
                        <Col span={6} className="click-wall">
                            <img src="/images/lifewall/7.jpg" alt="" className="rollimg7" />
                        </Col>
                        <Col span={6} className="click-wall">
                            <img src="/images/lifewall/8.jpg" alt="" className="rollimg8" />
                        </Col>
                    </Row>
                </LifeWallContainer>
            </LifeWallWrapper>
        )
    }
}

export default LifeWall;