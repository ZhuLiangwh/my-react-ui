/**
 * Created by liangzhu on 2016/4/19.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

import App from '../page/App/index';
import SignIn from '../page/Login/SignIn';
import SignOut from '../page/Login/SignOut';
import About from '../page/About/index';
import NotFound from '../page/NotFound/index';

ReactDOM.render(
	<Router history={appHistory}>
		<Route path='/' component={App}>
			<Route path="signIn" component={SignIn}/>
			<Route path="signOut" component={SignOut}/>
			<Route path="about" component={About}/>
		</Route>
		<Route path="*" component={NotFound} />
	</Router>,
	document.getElementById('app')
);

