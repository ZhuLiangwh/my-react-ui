/**
 * Created by liangzhu on 2016/4/15.
 */

import React from 'react';
import ReactDOM from 'react-dom';

import CommentBox from './CommentBox';


ReactDOM.render(
	<CommentBox url="./data/comments.json" pollInterval={2000} />,
	document.getElementById('app')
);


