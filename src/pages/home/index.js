
import React,{ PureComponent } from 'react';
import Contact from './components/Contact';
import HotLine from './components/HotLine';
import LineEntrance from './components/LineEntrance';
import Feature from './components/Feature';
import Advantage from './components/Advantage';
import LifeWall from './components/LifeWall';
import Comment from './components/Comment';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {
    HomeWrapper
} from './style';

class Home extends PureComponent {
    render () {
        return (
            <div>
                <HomeWrapper>
                    <Contact />
                    <HotLine />
                    <LineEntrance />
                    <Feature />
                    <Advantage />
                </HomeWrapper>
                <LifeWall />
                <HomeWrapper>
                    <Comment num={3} />
                </HomeWrapper>
            </div>
        )
    }
    componentDidMount(){
        this.props.getTrave();
        this.props.getHotList();
        this.props.getCommentList();
        this.props.getContactImg();
    }
}

const mapDispatch = (dispatch) => ({
    getTrave(){
        dispatch(actionCreators.getTravelShow())
    },
    getHotList(){
        dispatch(actionCreators.getHotLine())
    },
    getCommentList(){
        dispatch(actionCreators.getComment())
    },
    getContactImg() {
        dispatch(actionCreators.getContact())
    }
})

export default connect(null, mapDispatch)(Home);
