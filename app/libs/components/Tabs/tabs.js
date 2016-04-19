/**
 * Created by liangzhu on 2016/4/18.
 */
import React from 'react';

var Tabs = React.createClass({
	getDefaultProps: function () {
		return {
			classPrefix: 'tabs'
		}
	},
	propTypes: function () {
		return {
			classPrefix: React.PropTypes.string,
			onChangeTab: React.PropTypes.func,
			children: React.PropTypes.array.isRequired,
			headers: React.PropTypes.array.isRequired
		}
	},
	//这个方法会在组件加载完毕之后立即执行。在这个时候之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。
	componentDidMount: function () {
		//设置状态值
		this.refs.tabs.children[0].className = 'tabs-cont';
		this.refs['list0'].className = 'selected';
	},
	changeTab: function (e) {
		if (this.props.onChangeTab !== undefined) {
			this.props.onChangeTab(e);
		}

		var id = e.target.getAttribute('data-tab-id');
		this.setActiveTab(id);

		var list = e.target.parentElement.parentElement.children;
		this.setActiveTabHeader(list, id);
	},

	setActiveTab: function (id) {
		//隐藏所有tab内容
		var tabs = this.refs.tabs.children;
		for (var i = 0; i < tabs.length; i++) {
			tabs[i].className = 'tabs-cont hidden';
		}
		// 显示选项卡内容
		tabs[id].className = 'tabs-cont';
	},
	setActiveTabHeader: function (list, id) {
		// 未选中
		for (var i = 0; i < list.length; i++) {
			list[i].className = '';
		}
		// 已选中
		list[id].className = 'selected';
	},


	render: function () {
		//tabtit
		var headers = this.props.headers.map((h, i) => {
			return (
				<li key={i} ref={'list' + i}>
					<a data-tab-id={i} onClick={this.changeTab}>{h}</a>
				</li>
			)
		});

		return (
			<div className={this.props.classPrefix}>
				<div className='tabs-tit'>
					<ul>
						{headers}
					</ul>
				</div>

				<div className='tabs-wrap' ref='tabs'>
					{this.props.children}
				</div>
			</div>
		);
	}
});

export default Tabs;
