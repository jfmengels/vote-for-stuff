'use strict';

import dispatcher from '../dispatcher/index';
import AppConstants from '../constants/appConstants';

export function vote(pollIndex, answerIndex) {
	dispatcher.handleViewAction({
		actionType: AppConstants.POLL_ANSWER_VOTE,
		pollIndex,
		answerIndex
	})
};
