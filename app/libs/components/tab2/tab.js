/**
 * Created by liangzhu on 2016/4/19.
 */
import React from 'react';
var Tab = React.createClass({
	changeTab(){
		this.props.changeTab && this.props.changeTab( this.props.tabIndex );
	},
	render(){
		return (
			<li className={ this.props.active ? 'tab-trigger-active' : null} onClick= { this.changeTab }>
				{this.props.label}
			</li>
		)
	}
});

export default Tab;