import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import afterReducer from './afterReducer'
import { Provider } from 'react-redux'

const store = createStore(afterReducer)

const render = () => {
    ReactDOM.render(
    <Provider store={store}>
      <App store={store}/>
    </Provider>,
  document.getElementById('root'))
  }
  
  render()
  store.subscribe(render)
