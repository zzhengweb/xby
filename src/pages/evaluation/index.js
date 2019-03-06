import React, { Component } from 'react';
import Comment from '../home/components/Comment';
import {
    EvaluationWrapper
} from './style';
import { connect } from 'react-redux';
import { actionCreators } from '../home/store';

class Evaluation extends Component {
    render () {
        return (
            <EvaluationWrapper>
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