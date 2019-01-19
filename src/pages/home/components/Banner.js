import React,{Component} from 'react';
import Slider from 'react-slick';
import {connect} from 'react-redux';
import {actionCreators} from '../store';
import { BannerWrapper,SampleNextArrow,SamplePrevArrow } from '../style'

class Banner extends Component {
  render () {
    const {list} = this.props;
    let settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:true,
      nextArrow:<SampleNextArrow />,
      prevArrow:<SamplePrevArrow />
    };
    return (
      <BannerWrapper>
        <Slider {...settings}>
          {
            list.map((item) => {
              return (
                <img src={item.get('imgUrl')}  alt="banner1" key={item.get('id')}/>
              )
            })
          }
          
        </Slider>
      </BannerWrapper>
    )
  }

  componentDidMount(){
    this.props.getBanner()
  }
}

const mapState = (state) => {
  return {
    list: state.getIn(['banner','bannerImg'])
  }
};

const mapDispatch = (dispatch) => {
  return {
    getBanner(){
      dispatch(actionCreators.getBannerList())
    }
  }
}

export default connect(mapState,mapDispatch)(Banner);