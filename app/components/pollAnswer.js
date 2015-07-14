'use strict';
	
import React from 'react';

import {vote} from '../actions/pollActions';

export default class PollAnswer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<span className="answer_text">{this.props.answer.text}</span>
				<button onClick={this._onVote.bind(this)}>+</button>
				<span className="answer_count">{this.props.answer.count}</span>
			</div>
		);
	}

	_onVote() {
		vote(this.props.pollIndex, this.props.index);
	}
}
