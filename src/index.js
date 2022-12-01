import React from 'react';

import ReactDOM from 'react-dom/client';
import App from './App';

// ReactDOM.hydrate(<App />, document.getElementById('root'));
ReactDOM.hydrateRoot(document.getElementById('root'), <App />);