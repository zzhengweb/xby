import React,{Component} from 'react';
import Slider from 'react-slick';
import {
  HotLineWrapper,
  HotLineItem,
  HotLineLeft,
  HotLineRight,
  LineItemTitle,
  LineItemWay,
  LineItemPlaces,
  LineItemOther
} from './style';
import {connect} from 'react-redux'

class HotLine extends Component {
  render(){
    const {list} = this.props;
    let settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:true
    };
    return (
      <HotLineWrapper>
        <Slider {...settings}>
          {
            list.map((item) => {
              return (
                <HotLineItem key={item.get('id')}>
                  <HotLineLeft><img src={item.get('imgUrl')} alt={item.get('title')} /></HotLineLeft>
                  <HotLineRight>
                    <LineItemTitle><div className="title">{item.get('title')}</div><span>{item.get('days')}天</span></LineItemTitle>
                    <LineItemWay>{item.get('line')}</LineItemWay>
                    <LineItemPlaces>
                      {
                        item.get('feature').map((feat,index) => {
                          return (
                            <span key={feat+item.get('id')+index}>{feat}</span>
                          )
                        })
                      }
                    </LineItemPlaces>
                    <LineItemOther>
                      <div className="hotal"><span className="iconfont">&#xe64c;</span>酒店：{item.get('hotal')}</div>
                      <div className="num"><span className="iconfont">&#xe62a;</span>景点活动：{item.get('activities')}</div>
                    </LineItemOther>
                  </HotLineRight>
                </HotLineItem>
              )
            })
          }
        </Slider>
      </HotLineWrapper>
    )
  }
}

const mapState = (state) => {
  return {
    list: state.getIn(['banner','travel'])
  }
}

export default connect(mapState,null)(HotLine);