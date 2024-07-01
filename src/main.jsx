import React from 'react'
import ReactDOM from 'react-dom/client'
import 'rsuite/dist/rsuite.min.css';
import { CustomProvider } from 'rsuite';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CustomProvider>
      <App />
    </CustomProvider>
  </React.StrictMode>,
)
