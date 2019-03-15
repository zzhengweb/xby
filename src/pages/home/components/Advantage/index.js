import React, { PureComponent } from 'react';
import {
    AdvantageWrapper,
    AdvantageTitle,
    AdvantageText
} from './style';
import {
    Row,
    Col
} from 'antd';

class Advantage extends PureComponent {
    render () {
        return (
            <AdvantageWrapper>
                <AdvantageTitle>
                    <div className="title-cn">六大优势</div>
                    <div className="title-en">SIX MAJOR ADVANTAGES</div>
                    <div className="title-content">定制自由行,让出国旅行更简单</div>
                    <div className="line"></div>
                </AdvantageTitle>
                <AdvantageText>
                    <Row>
                        <Col span={8}>
                            <div className="icon"><i className="iconfont">&#xe628;</i></div>
                            <div className="title">高性价比</div>
                            <div className="content">1万起的人均预算就能体验10天欧洲中高端定制游！古堡酒庄，热气球体验超跑体验，赛格威之旅，百年老店餐厅米其林餐厅浪漫晚餐在等着您！</div>
                        </Col>
                        <Col span={8}>
                            <div className="icon"><i className="iconfont">&#xe811;</i></div>
                            <div className="title">免费出线路</div>
                            <div className="content">从您提交定制旅行要求起，ChineSpain将会在10小时内为您量身定制属于您的欧洲自由行方案，告别看不完的旅行攻略，让您的旅行既省时又省事！</div>
                        </Col>
                        <Col span={8}>
                            <div className="icon"><i className="iconfont">&#xe65c;</i></div>
                            <div className="title">专业旅行APP</div>
                            <div className="content">私人管家3D地图导航，实时交通APP全程语音导游以及多对一客服，全程 赠送移动WI-FI助您轻松玩转欧洲游。 再也不用为语言及通讯问题担心了！</div>
                        </Col>
                        <Col span={8}>
                            <div className="icon"><i className="iconfont">&#xe625;</i></div>
                            <div className="title">全天候客服</div>
                            <div className="content">多对一微信客服，24小时当地求助热线为您的旅行保驾护航！再也不用担心来欧洲遇到急事无法处理的问题了！</div>
                        </Col>
                        <Col span={8}>
                            <div className="icon"><i className="iconfont">&#xe626;</i></div>
                            <div className="title">线路定制管家</div>
                            <div className="content">ChineSpain按照每一个客人的预算及具体旅行要求定制最个性化的线路方案 帮助您合理的花费每一分钱，让您的线路不光出彩而且还高性价比！</div>
                        </Col>
                        <Col span={8}>
                            <div className="icon"><i className="iconfont">&#xe600;</i></div>
                            <div className="title">权威推荐</div>
                            <div className="content">不光给您推荐好吃的好玩的欧洲特色体验，还能帮您全面做预定！最地道的餐厅，球赛门票，看斗牛，看弗拉门戈舞，开法拉利！只要能想到就没有我们做不到！</div>
                        </Col>
                    </Row>
                </AdvantageText>
            </AdvantageWrapper>
        )
    }
}

export default Advantage;