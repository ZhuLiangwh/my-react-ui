/**
 * Created by liangzhu on 2016/4/15.
 */
import React from 'react';

import '././styles/CommentList.scss';

import Comment from './Comment';


var CommentList = React.createClass({
	render: function() {
		var commentNodes = this.props.data.map(function(comment) {
			return (
				<Comment author={comment.author} key={comment.id}>
					{comment.text}
				</Comment>
			);
		});
		return (
			<div className="commentList">
				{commentNodes}
			</div>
		);
	}
});

export default CommentList;