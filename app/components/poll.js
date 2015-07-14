'use strict';

import React from 'react';
	
import PollAnswer from './pollAnswer';
import Stats from './stats';

export default class Poll extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const answers = this.props.poll.answers.map((answer, index) =>
			<PollAnswer
				answer={answer}
				key={index}
				index={index}
				pollIndex={this.props.index}
			/>
		);
		return (
			<div>
				<span className="poll_question">{this.props.poll.question}</span>
				<div className="answers">
					{answers}
				</div>
				<Stats poll={this.props.poll} />
			</div>
		);
	}
}
