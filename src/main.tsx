import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './App'

import { BrowserRouter } from 'react-router-dom'
import { UserContextProvider } from './context/UserContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <App></App>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
