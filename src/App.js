import React from 'react'

import { BrowserRouter , Route ,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
function App() {
  return (
    <BrowserRouter>
        <div>
            <Navbar />
            <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            </Routes>
        </div>
    </BrowserRouter>
  )
}

export default App;
