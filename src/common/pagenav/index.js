import React, { Component } from 'react';
import { Nav } from './style';
import { Link } from 'react-router-dom';

class PageNav extends Component{
    render () {
        const {page,content} = this.props;
        return (
            <Nav>
                <Link to="/" className="nav_first">首页</Link> > <Link to={page} className="nav_page">{content}</Link>
            </Nav>
        )
    }
}

export default PageNav;