'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

ReactDOM.render(<App file="../data/polls.json"/>, document.getElementById('content'));
