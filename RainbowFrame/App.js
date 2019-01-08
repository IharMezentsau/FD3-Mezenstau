"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import RainbowFrame from './components/RainbowFrame';

let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'],
    text = 'Hello';

ReactDOM.render(<RainbowFrame colors={colors}>{text}</RainbowFrame>, document.getElementById('container'));

