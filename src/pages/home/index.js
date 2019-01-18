import React,{ Component } from 'react';
import Banner from './components/Banner';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Home extends Component {
    render () {
        return (
            <div>
                <Banner />
            </div>
        )
    }
    
    componentDidMount(){
        this.props.getBanner();
    }
}

const mapDispatch = (dispatch) => ({
    getBanner(){
        dispatch(actionCreators.getBannerList())
    }
})

export default connect(null, mapDispatch)(Home);