import React, { Component } from "react";
import { connect } from "react-redux";
// import {actionCreators} from '../store';
import {
    CommentWrapper,
    CommentTitle,
    CommentList
} from "../style";
import {
    Row,
    Col
} from 'antd';

class Comment extends Component {

  getTopList () {
    const { list } = this.props;
    var topList = list.slice(0,3);
    return (
      topList.map((item) => {
        return (
          <Col span={8} key={item.get('id')} className="commentItem">
            <div className="commentImg gutter-row">
              <img src={item.get('imgUrl1')} alt="" className="img1"/>
              <img src={item.get('imgUrl2')} alt="" className="img2"/>
            </div>
            <div className="commentTitle">旅行总花费：{item.get('price')}元/人</div>
            <div className="commentContent">{item.get('content')}</div>
          </Col>
        )
      })
    )
  }

  render () {
    return (
      <CommentWrapper>
        <CommentTitle>
          <div className="title-cn">他们的海外定制旅行</div>
          <div className="title-en">TRAVEL EVALUATION</div>
          <div className="title-content">来自真实的用户旅行评价<br />有温度的旅行</div>
          <div className="line"></div>
        </CommentTitle>
        <CommentList className="gutter-example">
          <Row gutter={16}>
            {this.getTopList()}
          </Row>
        </CommentList>
      </CommentWrapper>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['banner','comment'])
})

export default connect(mapState,null)(Comment);