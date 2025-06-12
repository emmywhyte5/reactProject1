import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home.jsx'
import Form from './Form.jsx'
import Header from './Header.jsx'
import { BrowserRouter,Routes,Route } from 'react'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/bookslot' element={<Form/>}/>
      
    </Routes>



    </BrowserRouter>
   
  </StrictMode>,
)
