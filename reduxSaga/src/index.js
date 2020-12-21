import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

import { applyMiddleware, createStore, compose } from 'redux'
import { rootReducer } from './redux/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { spamWordsMiddleware } from './redux/middleware'
import createSafaMiddleware from 'redux-saga'
import { sagaWatcher } from './redux/sagas'

const saga = createSafaMiddleware()

const store = createStore(rootReducer, compose(applyMiddleware(thunk, spamWordsMiddleware, saga)))

saga.run(sagaWatcher)

const app = (
  <Provider store={ store }>
    <App />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))