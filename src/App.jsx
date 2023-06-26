// eslint-disable-next-line no-unused-vars
import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Components/Home'

import Upload from './Components/Upload'
import Login from './Components/Login'
import PictureList from './Components/PictureList'

import Header from './Components/Header';

function App() {
 
  return (
    <Router>
      
      <Header />
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/login" element={<Login />} />
     <Route path="/upload" element={<Upload />} />
     <Route path="/picturelist" element={<PictureList/>} />

     
     
   </Routes> 
   


 </Router>
  )
}

export default App
