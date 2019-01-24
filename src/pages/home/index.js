
import React,{ Component } from 'react';
import Banner from './components/Banner';
import Contact from './components/Contact';
import HotLine from './components/HotLine';
import LineEntrance from './components/LineEntrance';
import Feature from './components/Feature';
import Advantage from './components/Advantage';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Home extends Component {
    render () {
        return (
            <div>
                <Banner />
                <Contact />
                <HotLine />
                <LineEntrance />
                <Feature />
                <Advantage />
            </div>
        )
    }
    componentDidMount(){
        this.props.getBanner();
        this.props.getTrave();
        this.props.getHotList();
    }
}

const mapDispatch = (dispatch) => ({
    getBanner(){
        dispatch(actionCreators.getBannerList())
    },
    getTrave(){
        dispatch(actionCreators.getTravelShow())
    },
    getHotList(){
        dispatch(actionCreators.getHotLine())
    }
})

export default connect(null, mapDispatch)(Home);
