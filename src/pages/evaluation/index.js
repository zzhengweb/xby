import React, { Component } from 'react';
import Comment from '../home/components/Comment';
import PageNav from '../../common/pagenav';
import {
    EvaluationWrapper
} from './style';
import { connect } from 'react-redux';
import { actionCreators } from '../home/store';

class Evaluation extends Component {
    render () {
        return (
            <EvaluationWrapper>
                <PageNav page="/evaluation" content="顾客评价" />
                <Comment />
            </EvaluationWrapper>
        )
    }
    componentDidMount(){
        this.props.getCommentList();
    }
}

const mapDispatch = (dispatch) => ({
    getCommentList(){
        dispatch(actionCreators.getComment())
    }
})

export default connect(null,mapDispatch)(Evaluation);