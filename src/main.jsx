import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home.jsx'
import Header from './Header.jsx'
import Fate from './Fate.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Header/>
      <Home/>
      <Fate/>
  </StrictMode>,
)
