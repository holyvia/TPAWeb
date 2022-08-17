import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signin from './pages/Signin/Signin'
import Homepage from './pages/Homepage/Homepage'
import Signup from './pages/Signup/Signup'
import Profile from './pages/Profile/Profile'

function App() {

  return (
    <BrowserRouter>
    <Routes>
       {/* <Route path="/" element={<Signin/>}/> */}
       
       <Route path="/" element={<Profile/>}/>
       <Route path="/signup" element={<Signup/>}/>
       <Route path="/homepage" element={<Homepage/>}/>
       <Route path="/" element={<Signin/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
