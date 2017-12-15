import React from 'react';
import ReactDOM from 'react-dom';
import Inputrange from './inputRange';
import registerServiceWorker from './registerServiceWorker';
const jsonParams = {
    currentValue: 5,
    minValue: 0,
    maxValue: 100,
    unit: 's',
    stepValue: 2
};
const json = {
    data: jsonParams
}
ReactDOM.render(React.createElement(Inputrange, json), document.getElementById('root'));
registerServiceWorker();
