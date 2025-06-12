import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home.jsx'
import Header from './Header.jsx'
import Form from './Form.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
  
   <Form/>
   </>

  </StrictMode>,
)
