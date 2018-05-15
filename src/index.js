import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import afterReducer from './reducers/afterReducer';
import languageReducer from './reducers/languageReducer';

const reducer = combineReducers({
  after: afterReducer,
  language: languageReducer,
});

const store = createStore(reducer);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App store={store} />
    </Provider>,
    document.getElementById('root'),
  );
};

render();
store.subscribe(render);
