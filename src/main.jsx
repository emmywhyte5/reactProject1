import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter,Routes,Route, Form } from 'react-router-dom'
// import Header from './Header'
import Home from './Home.jsx'
import Header from './Header.jsx'
import BookSlot from './BookSlot.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
 <BrowserRouter>
 <Header/>
 <Routes>
   <Route path="/" element={<Home/>}/>
  <Route path="/book" element={<BookSlot/>}/>


 </Routes>
 </BrowserRouter>
   

  </StrictMode>,
)
