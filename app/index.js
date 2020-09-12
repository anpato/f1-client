import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.scss'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store from './store'
import { Configuration } from 'react-md'
ReactDOM.render(
  <Configuration>
    <BrowserRouter>
      <Provider store={Store}>
        <App />
      </Provider>
    </BrowserRouter>
  </Configuration>,
  document.getElementById('app')
)
