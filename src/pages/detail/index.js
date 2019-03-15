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
    LineItemOther
} from './style';

class Detail extends PureComponent {
    render () {
        return (
            <div>
                <DetailWrapper>
                    <PageNav page="/evaluation" content="德国旅游" />
                    <DetailTop>
                        <DetailSlick>
                            <img src="http://cnd.05121818.com/ba047ac2-1c21-4809-a698-cd30eae2fc6c.jpg" />
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
                        </DetailTopRight>
                    </DetailTop>
                </DetailWrapper>
            </div>
        )
    }

    componentDidMount() {
		console.log(this.props.match.params.id);
	}
}

export default connect(null,null)(withRouter(Detail));