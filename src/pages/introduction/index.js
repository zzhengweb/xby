import React, { Component } from 'react';
import PageNav from '../../common/pagenav';
import {
    Row,
    Col
} from 'antd';
import {
    IntroWrapper,
    IntroLeft,
    IntroRight,
    IntroLeftBody,
    IntroLeftTitle,
    IntroLeftP,
    IntroLeftGrayBox,
    IntroLeftServer
} from './style';
import {
    FlowBody,
    AdvantageText
} from './style';

class Introduction extends Component {
    render(){
        return (
            <IntroWrapper>
                <PageNav page="/introduction" content="关于CHINESPAIN" />
                <Row type="flex" justify="space-between">
                    <Col span={18}>
                        <IntroLeft>
                            <img src="images/introduction/top.jpg" className="top" alt="" />
                            <IntroLeftBody>
                                <IntroLeftTitle>ChineSpain介绍</IntroLeftTitle>
                                <IntroLeftP>ChineSpain 是APPROACHING CULTURES S.L公司旗下专业为中国的游客提供个性化定制游服务的定制旅游平台网站，作为高质量的欧洲旅游特色体验供应商和中国客户之间的纽带， 我们不断专注寻求中西文化之间的共同点从而为我们的客户们提供最佳最贴心的服务和体验。</IntroLeftP>
                                <IntroLeftP>我们公司为客户群体提供专业化的一条龙服务，能够满足来自中国的游客群体以及企业家群体在西班牙旅游投资期间的各种需求，最大化的提供给客户各种便利和咨询服务以及帮助客户办理在西班牙期间所需的各种文件和手续。</IntroLeftP>
                                <IntroLeftP>通过我们的网站平台以及我们的个性化服务， 我们全心全意为客户们提供最贴心、周到的服务。</IntroLeftP>
                                <IntroLeftP>同时我们公司提供个性化中文服务，以减少客户们在西班牙期间一切不便利，让出国旅行投资变得更加简单有保障。</IntroLeftP>
                                <IntroLeftTitle>看看ChineSpain能为您做什么</IntroLeftTitle>
                                <IntroLeftP>集390多家欧洲本地特色体验服务一体的ChineSpain欧洲定制旅行平台能为您提供最全面的欧洲定制游服务！无论是纯自由行还是定制各种小团我们都能按照您的要求提供最专业的欧洲深度定制游服务！您只要通过微信联系我们的官方客服号chinespain-cn，我们将根据您的旅行要求打造专属于您的私属欧洲定制游！</IntroLeftP>
                                <IntroLeftTitle>与众不同</IntroLeftTitle>
                                <FlowBody>
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
                                </FlowBody>
                                <IntroLeftGrayBox>
                                    <h3>欧洲定制游-我们很专业！</h3>
                                    <p>
                                        ChineSpain帮助您设计属于自己的欧洲自由行线路，带你领略欧洲最纯正的特色风景！<br />零距离接触欧洲最传统的文化，品味最地道当地体验！<br />旅行途中我们将为您提供全程WI-FI以及无时差的多对一客服服务，让您的欧洲深度之旅充满关爱与热情！
                                    </p>
                                </IntroLeftGrayBox>
                                <IntroLeftTitle>服务宗旨</IntroLeftTitle>
                                <IntroLeftServer>
                                    <Row type="flex">
                                        <Col span={8}>
                                            <div className="serverItem">
                                                <i className="iconfont">&#xe757;</i>
                                            </div>
                                            <div className="serverText">
                                                <h4>我们专注品质<br />多重质量监控保证<br />高品质的旅程感受</h4>
                                                <p>专业的产品开发团队为您的旅行：<br />亲测评估行程路线及质量<br />精心筛选最优质的地接社<br />及时与地接社沟通用户需求。</p>
                                            </div>
                                        </Col>
                                        <Col span={8}>
                                            <div className="serverItem">
                                                <i className="iconfont">&#xe611;</i>
                                            </div>
                                            <div className="serverText">
                                                <h4>我们为您省钱<br />多款实惠超值旅游产品</h4>
                                                <p>我们坚持做到： <br />1次难忘的旅行=经济实惠+优质服务<br />我们承诺您订购的任何一次行程 <br />都不包含隐匿价格 <br />明码标价，诚实对待信任我们的您！</p>
                                            </div>
                                        </Col>
                                        <Col span={8}>
                                            <div className="serverItem">
                                                <i className="iconfont">&#xe629;</i>
                                            </div>
                                            <div className="serverText">
                                                <h4>我们重视安全<br />境外旅游保险为您的行程 <br />保驾护航</h4>
                                                <p>我们为您提供最安全可靠的境外旅游保险，降低所有的意外风险<br />延期出团、航班问题、大巴风险<br />均有高额保险赔付 愿您快乐出行<br />平安归来。</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </IntroLeftServer>
                            </IntroLeftBody>
                        </IntroLeft>
                        <IntroRight></IntroRight>
                    </Col>
                    <Col span={5}>22</Col>
                </Row>
            </IntroWrapper>
        )
    }
}

export default Introduction;