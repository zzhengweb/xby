import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Detail extends PureComponent {
    render () {
        return (
            <div>detail</div>
        )
    }

    componentDidMount() {
		console.log(this.props.match.params.id);
	}
}

export default connect(null,null)(withRouter(Detail));