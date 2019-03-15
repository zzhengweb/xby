import React, { Component } from "react";
import { connect } from "react-redux";
import {actionCreators} from '../../store';
import {
    CommentWrapper,
    CommentTitle,
    CommentList
} from "./style";
import {
    Row,
    Col
} from 'antd';

class Comment extends Component {

  getTopList () {
    const { list,showNum } = this.props;
    var topList = list.slice(0,showNum);
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
          <Row type="flex" justify="space-between">
            {this.getTopList()}
          </Row>
        </CommentList>
      </CommentWrapper>
    )
  }

  componentDidMount () {
    const { num } = this.props;
    this.props.handleChangeNum(num)
  }
}

const mapState = (state) => ({
  list: state.getIn(['banner','comment']),
  showNum: state.getIn(['banner','showNum'])
})

const mapDispatch = (dispatch)  => {
  return {
    handleChangeNum (n) {
      dispatch(actionCreators.changeNum(n));
    }
  }
}

export default connect(mapState,mapDispatch)(Comment);