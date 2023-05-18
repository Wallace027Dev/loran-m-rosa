import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/index.css'
import '../src/components/App'
import App from '../src/components/App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
