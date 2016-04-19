/**
 * Created by liangzhu on 2016/4/19.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery';

import Tabs from './tabs';
import Tab from './tab';

let Tab2 = React.createClass({

	render(){
		return(
			<Tabs active={1}>
				{
					data.map(function(i){
						return <Tab label={i.tabtit}  key={i}><div>{i.tabcont}</div></Tab>
					})
				}
			</Tabs>
		)
	}
});

var data = [
	{tabtit:'tabt1',tabcont:'tab1_conent'},
	{tabtit:'tabt2',tabcont:'tab2_conent'},
	{tabtit:'tabt3',tabcont:'tab3_conent'}
];

ReactDOM.render(
	<Tab2 />,
	document.getElementById('app')
);