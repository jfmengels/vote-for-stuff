'use strict';

import React from 'react';

import Poll from './poll';
import pollStore from '../stores/pollStore';


function updateState() {
	return {
		polls: pollStore.getAll()
	};
}

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = updateState();
	}

    componentDidMount() {
        pollStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        pollStore.removeChangeListener(this._onChange);
    }

    _onChange() {
    	this.setState(updateState());
    }

	render() {
		const pollList = this.state.polls.map((poll, index) => (
			<Poll poll={poll} key={index} index={index} />
		));
		return (
			<div>
				<h2>Polls</h2>
				{pollList}
			</div>
		);
	}
}
