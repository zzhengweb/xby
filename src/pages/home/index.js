
import React,{ Component } from 'react';
import Banner from './components/Banner';
import Contact from './components/Contact';
import HotLine from './components/HotLine';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Home extends Component {
    render () {
        return (
            <div>
                <Banner />
                <Contact />
                <HotLine />
            </div>
        )
    }
    componentDidMount(){
        this.props.getBanner();
        this.props.getTrave();
    }
}

const mapDispatch = (dispatch) => ({
    getBanner(){
        dispatch(actionCreators.getBannerList())
    },
    getTrave(){
        dispatch(actionCreators.getTravelShow())
    }
})

export default connect(null, mapDispatch)(Home);
