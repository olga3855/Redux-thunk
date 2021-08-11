import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import App from './components/App';
import mainReducer from './redux/reducers/mainRedusers';


const store = createStore(mainReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(

	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>

	</React.StrictMode>,
	document.getElementById('root')
);

// npm i -D redux styled-components react-redux redux-thunk redux-devtools-extension