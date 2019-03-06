import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    LineEntranceWrapper,
    LineEntranceLeft,
    LineEntranceRight,
    LineItem
} from './style';

class LineEntrance extends Component {
    render () {
        const { list } = this.props;
        return (
            <LineEntranceWrapper>
                <LineEntranceLeft></LineEntranceLeft>
                <LineEntranceRight>
                {
                    list.map((item) => {
                        return (
                            <LineItem key={item.get('id')}>
                                <img className="bgImg" alt="" src={item.get('imgUrl')} />
                                <div className="country">{item.get('country')}</div>
                                <div className="hoverShow">
                                    <div className="title">{item.get('title')}</div>
                                    <div className="content">{item.get('content')}</div>
                                    <div className="whiteLine"></div>
                                </div>
                            </LineItem>
                        )
                    })
                }
                </LineEntranceRight>
                <div className="clearfix"></div>
            </LineEntranceWrapper>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['banner','hotLine'])
})

export default connect(mapState,null)(LineEntrance);