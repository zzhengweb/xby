import React, { Component } from 'react';
import { 
  PageNav
} from '../style';
import { 
  FlowWrapper,
  FlowBody
} from './style';
import { Link } from 'react-router-dom';

class Flow extends Component {
  render () {
    return (
      <FlowWrapper>
        <PageNav>
          <Link to="/" className="nav_first">首页</Link> > <Link to="/flow" className="nav_page">定制流程</Link>
        </PageNav>
        <FlowBody>
          <div className="title">定制流程</div>
        </FlowBody>
      </FlowWrapper>
    )
  }
}

export default Flow;