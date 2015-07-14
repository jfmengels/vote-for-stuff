'use strict';

import events from 'events';

import dispatcher from '../dispatcher/index';
import appConstants from '../constants/appConstants';

const polls = [{
    "question": "What side are you on, good or evil?",
    "answers": [{
        "text": "Good",
        "count": 2
    }, {
        "text": "Evil",
        "count": 3
    }]
}, {
    "question": "Another question",
    "answers": [{
        "text": "1",
        "count": 7
    }, {
        "text": "2",
        "count": 4
    }]
}];

const CHANGE_EVENT = 'change';

class PollStore extends events.EventEmitter {
	constructor(props) {
		super(props);
		this.dispatcherIndex = dispatcher.register(this.dispatch);
	}

	dispatch(payload) {
		console.log(payload);
		const {actionType, pollIndex, answerIndex} = payload.action;

		switch(actionType) {
			case appConstants.POLL_ANSWER_VOTE:
				polls[pollIndex][answerIndex]++;
				emitChange();
				break;
		}
		return true;
	}

	getAll() {
		return polls;
	}

	vote(id) {
		console.log(`Voting for item ${id}`);
	}

	emitChange() {
		this.emit(CHANGE_EVENT)
	}

	addChangeListener(cb) {
		this.on(CHANGE_EVENT, cb);
	}

	removeChangeListener(cb) {
		this.removeListener(CHANGE_EVENT, cb);
	}
}

export default new PollStore();