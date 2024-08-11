import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HelpContextProvider } from './context/HelpContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelpContextProvider>
    <App />
    </HelpContextProvider>
  </React.StrictMode>,
)
