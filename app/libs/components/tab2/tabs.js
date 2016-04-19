/**
 * Created by liangzhu on 2016/4/19.
 */
import React from 'react';
import Tab from './tab';

let TabsContent = React.createClass({
	render(){
		var style = { display:"none"};
		if(this.props.active){
			delete style.display;
		}
		return (
			<div className="tabCon" style={style}>
				{ this.props.children }
			</div>
		)
	}
});

let Tabs = React.createClass({
	getDefaultProps(){
		return {
			active:0
		}
	},
	getInitialState(){
		return {
			active:this.props.active
		}
	},
	changeTab(index){
		this.setState({
			active: index
		})
	},
	render(){
		var tabContents = [], active = this.state.active - 0;
		var tabs = this.props.children.map((item,i)=> {
			var child = React.cloneElement(item.props.children),
				isActive = i === active;
			tabContents.push(
				<TabsContent active = {isActive} key= {i} >{child}</TabsContent>
			);
			return <Tab active = {isActive } label={item.props.label} tabIndex= { i } key= { i } changeTab={ this.changeTab }/>
		});

		return (
			<div className="tab">
				<ul className="tab-trigger">{tabs}</ul>
				<div className="tab-content">{tabContents}</div>
			</div>
		)
	}
});

export default Tabs;

