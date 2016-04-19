/**
 * Created by liangzhu on 2016/4/18.
 */
import React from 'react';

var Tab = React.createClass({
	propTypes: {
		children: React.PropTypes.object.isRequired
	},
	render: function () {
		console.log(11)
		return (
			<div className='tabs-cont hidden'>
				{this.props.children}
			</div>
		);
	}
});

export default Tab;

