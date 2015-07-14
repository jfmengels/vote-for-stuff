'use strict';
	
import React from 'react';

import pollActions from '../actions/pollActions';

export default class PollAnswer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<span className="answer_text">{this.props.answer.text}</span>
				<button onClick={this._onVote}>+</button>
				<span className="answer_count">{this.props.answer.count}</span>
			</div>
		);
	}

	_onVote() {
		pollActions.vote(this.props.pollIndex, this.props.key);
	}
}
