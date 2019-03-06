import React ,{ Component } from 'react';
import {Col,Row} from 'antd';
import { Link } from 'react-router-dom'
import {actionCreators} from '../../../store';
import {
    OtherWrapper,
    CustonTrip,
    HotPhone,
    SafeBox
} from './style';
import { connect } from 'react-redux';

class Contact extends Component {
    getWxShow () {
        const {wxShow,wxImg,wxMoveOut,handleImgOut} = this.props;
        if(wxShow||wxMoveOut){
            return (
                <img src={wxImg} alt="" className="popImg" onMouseOut={handleImgOut} />
            )
        }else{
            return null
        }
    }
    render () {
        const {handleWxShow,handleWxHide,adNavImg} = this.props;
        return (
            <OtherWrapper>
                <Row>
                    <Col span={9}>
                        <CustonTrip>
                            <span className="iconfont trip-icon">&#xe673;</span>帮我定制行程 — <Link to="/custom" className="button-go">GO</Link>
                        </CustonTrip>
                    </Col>
                    <Col span={9}>
                        <HotPhone>
                            <span className="iconfont photo-icon">&#xe621;</span><div className="small-word">国内江苏<br></br>分部电话</div>0512-52719951
                            <span 
                                className="iconfont wx-icon"
                                onMouseOver={handleWxShow}
                                onMouseOut={handleWxHide}
                            >&#xe613;</span>
                            {this.getWxShow()}
                        </HotPhone>
                    </Col>
                    <Col span={6}>
                        <SafeBox>
                            <span className="iconfont safe-icon">&#xe62b;</span>
                            <div className="small-word">欧洲旅游局认证旅行社<br />旅行社代码：CICMA N°3495</div>
                        </SafeBox>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}><img src={adNavImg} alt="" /></Col>
                </Row>
            </OtherWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        wxShow:state.getIn(['banner','wxShow']),
        wxMoveOut:state.getIn(['banner','wxMoveOut']),
        wxImg: state.getIn(['banner','wxImg']),
        adNavImg:state.getIn(['banner','adNavImg'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleWxShow() {
            dispatch(actionCreators.makeWxShow());
        },
        handleWxHide() {
            dispatch(actionCreators.makeWxHide());
        },
        handleImgOut(){
          dispatch(actionCreators.makeWxOut())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Contact);