import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PageNav from '../../common/pagenav';
import { withRouter } from 'react-router-dom';
import {
    DetailWrapper,
    DetailTop,
    DetailSlick,
    DetailTopRight,
    RightList,
    RightListName,
    RightListContent,
    DetailTopPrice,
    LineItemOther,
    DetailGrayBox,
    DetailContact,
    DetailMain,
    DeatilCase,
    DetailDaysTotal,
    DetailActivity,
    DetailPlace,
    DeatilEveryContent,
    DetailActivitySpot
} from './style';
import {
    Row,
    Col
} from 'antd';
import { actionCreators } from './store';

class Detail extends PureComponent {
    render () {
        return (
            <div>
                <DetailWrapper>
                    <PageNav page="/evaluation" content="德国旅游" />
                    <DetailTop>
                        <DetailSlick>
                            <img src="http://cnd.05121818.com/ba047ac2-1c21-4809-a698-cd30eae2fc6c.jpg" alt=""/>
                        </DetailSlick>
                        <DetailTopRight>
                            <RightList>
                                <RightListName>行程天数</RightListName>
                                <RightListContent>15天14晚</RightListContent>
                            </RightList>
                            <RightList>
                                <RightListName>出发地</RightListName>
                                <RightListContent>任何</RightListContent>
                            </RightList>
                            <RightList>
                                <RightListName>目的地</RightListName>
                                <RightListContent>柏林+莱比锡+纽约堡+慕尼黑+斯图拉特+路德维希堡+斯图拉特+黑欣根+斯图拉特+法兰克福+科隆+明斯特+汉堡+柏林+国内</RightListContent>
                            </RightList>
                            <DetailTopPrice>
                                <div className="price">
                                    <span className="greenFont">14500</span>元/人起
                                    <div className="smallFont">费用说明</div>
                                </div>
                            </DetailTopPrice>
                            <LineItemOther>
                                <div className="hotal"><span className="iconfont">&#xe64c;</span>酒店：舒适型</div>
                                <div className="num"><span className="iconfont">&#xe62a;</span>景点活动：63</div>
                            </LineItemOther>
                            <DetailGrayBox>
                                <p>＊本产品天数为在目的地游玩天数，不包含国际段航班飞行时间。</p>
                                <p>＊行程安排为定制师推荐，您还可以在此基础上增减天数，更换景点体验或调整行程玩法。</p>
                            </DetailGrayBox>
                            <DetailContact>
                                <div className="information">咨询电话: 0512-52719951 周一至周六: 8:00 - 20:00</div>
                                <div className="btn">扫码咨询定制师</div>
                            </DetailContact>
                        </DetailTopRight>
                    </DetailTop>
                    <DetailMain>
                        <div className="title">行程方案</div>
                        <DeatilCase>
                            <p>●  出行天数: 9天8晚</p>
                            <p>●  出行人数: 2人起成团</p>
                            <p>●  出行城市: 马德里+塞戈维亚+巴塞罗那+国内</p>
                            <p>●  公司总部位于欧洲大都市马德里，我们掌握最地道的当地特色旅游体验资源，欧洲当地中文客服无时差及时的服务，欧洲旅行定制师丰富的经验，确保行程定制的科学合理，结合当地文化习俗，保障最佳的旅行体验</p>
                            <h4>扫二维码即可获取报价</h4>
                            <p>●  报价包含: </p>
                            <p>●  门票: 西班牙境内免费WI-FI， 签证代办费用(旅行保险+准备材料) 线路中马德里皇宫免排队门票，马德里斗牛场VIP参观门票，伯纳乌球场VIP参观门票，马德里普拉多及索非亚女王博物馆免排队门票，古埃尔公园已含免排队门票+米拉之家已含免排队门票以及中文讲解器+巴特略之家已含免排队门票以及中文讲解器+圣家族大教堂已含免排队门票以及中文讲解器+ 登塔费用。</p>
                            <p>●  住宿: 市区中心高评分3至4星级起酒店含早餐(非节假日提前两个月预定线路默认4星级起酒店)</p>
                            <p>●  特色体验: Cafe Chinita最佳弗拉门戈舞餐厅看表演+海鲜饭晚餐，伯纳乌球场球赛二等座门票(常规赛事)，高迪4D电影体验</p>
                            <p>●  交通: 欧洲境内城际间高铁，火车，大巴，机票以及马德里&巴塞罗那市区交通</p>
                            <p>●  报价未包含: </p>
                            <p>●  往返国际机票(根据具体出行时间单独报价)</p>
                            <p>●  线路中未安排的自理餐饮费</p>
                        </DeatilCase>
                        <DetailDaysTotal>
                            <div className="line"></div>
                            <div className="daysItem">D1</div>
                            <div className="daysItem">D2</div>
                            <div className="daysItem">D3</div>
                            <div className="daysItem">D4</div>
                            <div className="daysItem">D5</div>
                        </DetailDaysTotal>
                        <DetailActivity>
                            <div className="line"></div>
                            <div>
                                <DetailPlace><div className="daysItem">D1</div><div className="name">马德里</div></DetailPlace>
                                <DeatilEveryContent>整个马德里行程就从市中心太阳门广场SOL开始，太阳门广场是马德里的中心。参观完太阳门广场后我们继续前往马约尔广场无疑是最有广场范儿的。步行一刻钟到，马德里皇宫与阿穆德纳圣母主教座堂。吃完了午上后我们重新踏马德里探索之旅，前往我们的下一个目的地Gran Vía大道以及Callao广场。</DeatilEveryContent>
                                <Row gutter={24} type="flex">
                                    <Col span={12}>
                                        <DetailActivitySpot>
                                            <img src="http://cnd.05121818.com/1cfebcf7-10da-4e68-b78e-d3d72f9a53db.jpg" alt="" />
                                            <h5>太阳门广场</h5>
                                            <p>太阳门广场是马德里的中心。最初太阳门广场旁有一个太阳门，因为它面向太阳升起的地方，所以取名为太阳门。</p>
                                        </DetailActivitySpot>
                                    </Col>
                                    <Col span={12}>
                                        <DetailActivitySpot>
                                            <img src="http://cnd.05121818.com/b9ef10cd-810c-4405-9845-b9ee1085f057.jpg" alt="" />
                                            <h5>马约尔广场</h5>
                                            <p>在西班牙众多广场中，马约尔广场无疑是最有广场范儿的。</p>
                                        </DetailActivitySpot>
                                    </Col>
                                    <Col span={12}>
                                        <DetailActivitySpot>
                                            <img src="http://cnd.05121818.com/1cfebcf7-10da-4e68-b78e-d3d72f9a53db.jpg" alt="" />
                                            <h5>马德里皇宫</h5>
                                            <p>该皇宫是仅次于凡尔赛宫和维也纳美泉宫的欧洲第三大皇宫，是世界上保存最完整而且最精美的宫殿之一。</p>
                                        </DetailActivitySpot>
                                    </Col>
                                    <Col span={12}>
                                        <DetailActivitySpot>
                                            <img src="http://cnd.05121818.com/b9ef10cd-810c-4405-9845-b9ee1085f057.jpg" alt="" />
                                            <h5>阿穆德纳圣母主教座堂</h5>
                                            <p>全名马德里王家阿穆德纳圣母主教座堂，是天主教马德里总教没的主教座堂。</p>
                                        </DetailActivitySpot>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <DetailPlace><div className="daysItem">D2</div><div className="name">马德里</div></DetailPlace>
                                <DeatilEveryContent>整个马德里行程就从市中心太阳门广场SOL开始，太阳门广场是马德里的中心。参观完太阳门广场后我们继续前往马约尔广场无疑是最有广场范儿的。步行一刻钟到，马德里皇宫与阿穆德纳圣母主教座堂。吃完了午上后我们重新踏马德里探索之旅，前往我们的下一个目的地Gran Vía大道以及Callao广场。</DeatilEveryContent>
                                <Row gutter={24} type="flex">
                                    <Col span={12}>
                                        <DetailActivitySpot>
                                            <img src="http://cnd.05121818.com/1cfebcf7-10da-4e68-b78e-d3d72f9a53db.jpg" alt="" />
                                            <h5>太阳门广场</h5>
                                            <p>太阳门广场是马德里的中心。最初太阳门广场旁有一个太阳门，因为它面向太阳升起的地方，所以取名为太阳门。</p>
                                        </DetailActivitySpot>
                                    </Col>
                                    <Col span={12}>
                                        <DetailActivitySpot>
                                            <img src="http://cnd.05121818.com/b9ef10cd-810c-4405-9845-b9ee1085f057.jpg" alt="" />
                                            <h5>马约尔广场</h5>
                                            <p>在西班牙众多广场中，马约尔广场无疑是最有广场范儿的。</p>
                                        </DetailActivitySpot>
                                    </Col>
                                    <Col span={12}>
                                        <DetailActivitySpot>
                                            <img src="http://cnd.05121818.com/1cfebcf7-10da-4e68-b78e-d3d72f9a53db.jpg" alt="" />
                                            <h5>马德里皇宫</h5>
                                            <p>该皇宫是仅次于凡尔赛宫和维也纳美泉宫的欧洲第三大皇宫，是世界上保存最完整而且最精美的宫殿之一。</p>
                                        </DetailActivitySpot>
                                    </Col>
                                    <Col span={12}>
                                        <DetailActivitySpot>
                                            <img src="http://cnd.05121818.com/b9ef10cd-810c-4405-9845-b9ee1085f057.jpg" alt="" />
                                            <h5>阿穆德纳圣母主教座堂</h5>
                                            <p>全名马德里王家阿穆德纳圣母主教座堂，是天主教马德里总教没的主教座堂。</p>
                                        </DetailActivitySpot>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <DetailPlace><div className="daysItem">D3</div><div className="name">马德里</div></DetailPlace>
                                <DeatilEveryContent>整个马德里行程就从市中心太阳门广场SOL开始，太阳门广场是马德里的中心。参观完太阳门广场后我们继续前往马约尔广场无疑是最有广场范儿的。步行一刻钟到，马德里皇宫与阿穆德纳圣母主教座堂。吃完了午上后我们重新踏马德里探索之旅，前往我们的下一个目的地Gran Vía大道以及Callao广场。</DeatilEveryContent>
                                <Row gutter={24} type="flex">
                                    <Col span={12}>
                                        <DetailActivitySpot>
                                            <img src="http://cnd.05121818.com/1cfebcf7-10da-4e68-b78e-d3d72f9a53db.jpg" alt="" />
                                            <h5>太阳门广场</h5>
                                            <p>太阳门广场是马德里的中心。最初太阳门广场旁有一个太阳门，因为它面向太阳升起的地方，所以取名为太阳门。</p>
                                        </DetailActivitySpot>
                                    </Col>
                                    <Col span={12}>
                                        <DetailActivitySpot>
                                            <img src="http://cnd.05121818.com/b9ef10cd-810c-4405-9845-b9ee1085f057.jpg" alt="" />
                                            <h5>马约尔广场</h5>
                                            <p>在西班牙众多广场中，马约尔广场无疑是最有广场范儿的。</p>
                                        </DetailActivitySpot>
                                    </Col>
                                    <Col span={12}>
                                        <DetailActivitySpot>
                                            <img src="http://cnd.05121818.com/1cfebcf7-10da-4e68-b78e-d3d72f9a53db.jpg" alt="" />
                                            <h5>马德里皇宫</h5>
                                            <p>该皇宫是仅次于凡尔赛宫和维也纳美泉宫的欧洲第三大皇宫，是世界上保存最完整而且最精美的宫殿之一。</p>
                                        </DetailActivitySpot>
                                    </Col>
                                    <Col span={12}>
                                        <DetailActivitySpot>
                                            <img src="http://cnd.05121818.com/b9ef10cd-810c-4405-9845-b9ee1085f057.jpg" alt="" />
                                            <h5>阿穆德纳圣母主教座堂</h5>
                                            <p>全名马德里王家阿穆德纳圣母主教座堂，是天主教马德里总教没的主教座堂。</p>
                                        </DetailActivitySpot>
                                    </Col>
                                </Row>
                            </div>
                        </DetailActivity>
                    </DetailMain>
                </DetailWrapper>
            </div>
        )
    }

    componentDidMount() {
        console.log(this.props.match.params.id);
        this.props.getDetail();
	}
}

const mapDispatch = (dispatch) => {
    return {
        getDetail(){
            dispatch(actionCreators.get_detail())
        }
    }
}

export default connect(null,mapDispatch)(withRouter(Detail));