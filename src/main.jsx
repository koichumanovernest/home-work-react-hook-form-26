import React from 'react'
import ReactDOM from 'react-dom/client'
import { store } from './store/store.js'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>

    <App />


    </Provider>

  </React.StrictMode>,
)
