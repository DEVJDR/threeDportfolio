import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { PlayProvider } from './components/Play'
import {ThemeProvider} from './components/ThemeProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <PlayProvider>
   
      <App />

   </PlayProvider>
  </React.StrictMode>,
)