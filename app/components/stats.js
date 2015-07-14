'use strict';
	
import React from 'react';

export default class Stats extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const answers = this.props.poll.answers;
		const total = answers.reduce((prev, answer) => prev + answer.count, 0);
		const mostVoted = answers.reduce((prev, answer) => {
			if (answer.count > prev.count) {
				return answer;
			}
			return prev;
		});
		return <p>
			{mostVoted.text} was the most chosen answer with {mostVoted.count}
			({(mostVoted.count / total * 100).toFixed(0)}%) of the votes
		</p>;
	}
}
