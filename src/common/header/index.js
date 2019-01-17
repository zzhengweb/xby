import React,{ Component } from 'react';
import { Row, Col } from 'antd';
import {
	HeaderWrapper,
	ImgLogo,
	HeaderNav
} from './style';
import logoUrl from './images/logo.png';
import { Link } from 'react-router-dom';

class Header extends Component {
	render(){
		return(
			<HeaderWrapper>
				<Row>
					<Col span={12}>
						<ImgLogo alt="logo" src={logoUrl} />
					</Col>
					<Col span={12}>
						<HeaderNav>
							<li><Link to="/">首页</Link ></li>
							<li><Link to="flow.asp">定制流程</Link ></li>
							<li><Link to="evaluation.asp">顾客评价</Link ></li>
							<li><Link to="about.asp">关于CHINESPAIN</Link ></li>
							<li><Link to="consultant.asp">旅行攻略</Link ></li>
							<li><Link to="custom.asp">联系我们</Link ></li>
						</HeaderNav>
					</Col>
				</Row>
			</HeaderWrapper>
		)
	}
}

export default Header;