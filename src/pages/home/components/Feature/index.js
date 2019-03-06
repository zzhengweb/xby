import React, { Component } from 'react';
import {
    FeatureWrapper
} from './style';
import {
    Row,
    Col
} from 'antd';

class Feature extends Component {
    render () {
        return (
            <FeatureWrapper>
                <Row type="flex" justify="center">
                    <Col span={3}>
                        <div className="feature-item-round">
                            <img src="/images/icons/1.png" alt=""/>
                        </div>
                    </Col>
                    <Col span={3}>
                        <div className="feature-item-round">
                            <img src="/images/icons/2.png" alt=""/>
                        </div>
                    </Col>
                    <Col span={3}>
                        <div className="feature-item-round">
                            <img src="/images/icons/3.png" alt=""/>
                        </div>
                    </Col>
                    <Col span={3}>
                        <div className="feature-item-round">
                            <img src="/images/icons/4.png" alt=""/>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="feature-item-other">
                            <div className="icon">
                                <img src="/images/icons/5.png" alt=""/>
                            </div>
                            <div className="num">26921<span>位</span></div>
                        </div>
                    </Col>
                </Row>
            </FeatureWrapper>
        )
    }
}

export default Feature;