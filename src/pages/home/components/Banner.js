import React,{ Component } from 'react';
import { Carousel } from 'antd';
import './style.css';
import { connect } from 'react-redux';

class Banner extends Component {
  render () {
    const { list } = this.props;
    return (
      <Carousel autoplay>
        {
          list.map((item) => {
            return (
              <img src={item.get('imgUrl')}  alt="banner1" key={item.get('id')}/>
            )
          })
        }
      </Carousel>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['banner','bannerImg'])
});

export default connect(mapState,null)(Banner);