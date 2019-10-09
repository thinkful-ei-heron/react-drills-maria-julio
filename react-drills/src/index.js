import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import Helloworld from './drills-1/Helloworld';
//import Bomb from './drills-1/Bomb';
// import Roulettegun from './drills-1/Roulettegun';
// import Helloworld from './drills-1/Helloworld';
// import bomb from './drills-2/bomb';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
