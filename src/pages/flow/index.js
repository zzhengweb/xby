import React, { PureComponent } from 'react';
import PageNav from '../../common/pagenav';
import { 
  FlowWrapper,
  FlowBody,
  AdvantageTitle,
  AdvantageText
} from './style';
import {
  Row,
  Col
} from 'antd';

class Flow extends PureComponent {
  render () {
    return (
      <FlowWrapper>
        <PageNav page="/flow" content="定制流程" />
        <FlowBody>
          <div className="title">定制流程</div>
          <div className="flowImg">
            <img src="images/flow/1.jpg" alt="" />
          </div>
          <div className="flow_problem">
            <h4>Q1:为什么要选择ChineSpain欧洲定制游，和别的定制游公司有什么区别呢?</h4>
            <p>答: 与其他定制游机构不同的是，ChineSpain本身是欧洲定制游平台，并非国内的常规定制游公司。除了我们的普通客服外，所有我们的定制师都是生活在欧洲当地的旅游达人，并非是仅仅有欧洲生活或留学经验而已。在处理问题的能力上，我们的能力远超国内所有出国游定制平台。由于我们的公司总部就在欧洲大都市马德里，并且在国内拥有客服总部，在客服上我们能够做到真正的跨时差服务。您在我们公司定制的行程后只要一进入欧洲当地就能够获得我们当地的多对一VIP式服务，碰到突发问题再也不用担心时差问题或需要靠拨打跨国电话来解决了，因为有我们当地专业定制师的存在，您可以放心无忧的玩转欧洲各国。处理问题我们也同样能够做到及时处理，不需要等待，欧洲当地产品部经理也能无时差迅速和供应商沟通，解决问题。在挑选特色体验供应商上，所有的当地供应商都是经过我们精心挑选，并且各种供应商数量达到500家以上，一站式帮您搞定所有的旅行计划。当地最有名的百年老店，看球赛，坐热气球，开法拉利和直升机，只要您能想的到，没有我们做不到！</p>
          </div>
          <div className="flow_problem">
            <h4>Q2:贵公司的收费贵吗?</h4>
            <p>答: 可以说，我们把定制游做到了最高性价比！按照一般的情况下，10天的人均消费在一万到一万三左右～ 根据每个客人的需求不同会有一些浮动。报价包含了:市区中心高评分3至4星级起酒店含早餐的(非旺季，提前2月左右和我们订下线路的客人基本都是安排的4星级酒店)，大部分景点门票(包括很多需要排长队的著名景点都是安排免排队门票的，可以帮你们节省很多时间哦)，两至三餐的百年老店等特色餐厅用餐费，每个城市之间的高铁，火车，大巴，机票全部费用，以及马德里和巴塞罗那等大城市还有城市内交通卡费用，看球，弗拉门戈舞，斗牛等特色体验费用以及签证代办费用，(签证材料准备审核+境外旅行保险)，最后还有欧洲境内旅行我们赠送的无限网络流量SIM卡送到酒店。 未包含的费用 : 国际机票(可以由我公司出方案购买机票，可以客户和我公司两边看价格对比，看情况哪边有特价票哪边订购) ， 欧洲境内自行就餐费用(一般每餐人均消费在10-15欧左右，肯德基麦当劳等人均在7-8欧左右)</p>
          </div>
        </FlowBody>
        <FlowBody>
          <div className="title">付款方式</div>
          <div className="flow_problem">
            <h4>付款方式</h4>
            <p>答: 您一旦确认行程并签约后首先需要支付10%的总费用作为定金用于签证代办费(签证材料准备审核+境外旅行保险)，预定国际机票，预定酒店住宿，并提供国际机票预订单及酒店预订单，这些都是用来准备签证的必备资料。签证顺利通过后再支付40%余款，用来购买所有的机票，火车票，景点门票，特色体验等，并提供所有机票，火车票票据。我们将会把所有交通票据电子票发送给您并帮您打印装订进出行手册里。最后50%费用需要在出行前7日通过支付宝或银行转账支付，支付尾款后我们将所有其他票据订单发送给您，并帮您归纳整理进手册后提前将所有票据资料寄送至您到达目的地城市的酒店前台。</p>
          </div>
          <div className="flow_problem">
            <h4>M2：银行转账支付方式</h4>
            <p>1.您可以转账直接支付给ChineSpain西班牙总公司,并和我们总公司签订履行合同(总公司将开具正规专业发票，不需要手续费)<br />2. 您也可以直接转账支付给我们在国内的指定国旅代理商，并和我们的指定国旅代理商签订合同(双方各承担国旅方4%转账及开票手续费)</p>
          </div>
        </FlowBody>
        <FlowBody>
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
        </FlowBody>
      </FlowWrapper>
    )
  }
}

export default Flow;