<<<<<<< HEAD
import React,{ Component } from 'react';
import Banner from './components/Banner';
<<<<<<< HEAD
import { connect } from 'react-redux';
import { actionCreators } from './store';
||||||| merged common ancestors
=======
import Contact from './components/Contact';
>>>>>>> origin/master

class Home extends Component {
    render () {
        return (
            <div>
                <Banner />
                <Contact/>
            </div>
        )
    }
    
    componentDidMount(){
        this.props.getBanner();
    }
}

<<<<<<< HEAD
const mapDispatch = (dispatch) => ({
    getBanner(){
        dispatch(actionCreators.getBannerList())
    }
})

export default connect(null, mapDispatch)(Home);
||||||| merged common ancestors
export default Home;
=======
export default Home;
||||||| merged common ancestors
=======
import React,{ Component } from 'react';
import Banner from './components/Banner';

class Home extends Component {
    render () {
        return (
            <div>
                <Banner />
            </div>
        )
    }
}

export default Home;
>>>>>>> origin/master
>>>>>>> origin/master
