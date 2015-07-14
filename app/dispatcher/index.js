'use strict';

import flux from 'flux';

class AppDispatcher extends flux.Dispatcher {
	constructor() {
		super();
		this.callbacks = [];
	}

	register(cb) {
		this.callbacks.push(cb);
		return this.callbacks.length - 1;
	}

	dispatch(payload) {
		const resolves = [];
		const rejects = [];
		this.callbacks.forEach((cb, index) => {
			return new Promise(function(resolve, reject) {
				resolves[index] = resolve;
				rejects[index] = reject;
			});
		});

		this.callbacks.forEach((cb, index) => {
			Promise.resolve(cb(payload))
			.then(
				() => resolves[index](payload),
				() => rejects[index](new Error('Dispatcher callback unsuccessful'))
			);
		});
	}

    handleViewAction(action) {
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action
        });
    }
}

export default new AppDispatcher();