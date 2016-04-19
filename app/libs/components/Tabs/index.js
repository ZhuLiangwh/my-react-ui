/**
 * Created by liangzhu on 2016/4/18.
 */
import Tabs from './Tabs'
import Tab from './Tab'
require('./styles/tabs.css');

import React from 'react';

import ReactDOM from 'react-dom';


const tabtit = ['tit 1', 'tit 2', 'tit 3'];

var TestComponent = React.createClass({

	render: function () {
		return (
			<div>
				<Tabs headers={tabtit} source="">
					<Tab>
						<p>tab1</p>
					</Tab>
					<Tab>
						<p>tab2</p>
					</Tab>
					<Tab>
						<p>tab3</p>
					</Tab>
				</Tabs>
			</div>
		);
	}
});

ReactDOM.render(
	<TestComponent />,
	document.getElementById('app')
);