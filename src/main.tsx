import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>: enable additional development behaviors and warnings for the component tree inside
  <StrictMode>
    <App />
  </StrictMode>,
)
