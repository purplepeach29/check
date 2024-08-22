import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='nav'>
        <h2>WASSERFORECAST</h2>
      </div>
      
    <App />
  </StrictMode>,
)
