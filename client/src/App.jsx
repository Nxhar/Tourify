import { useState, useEffect } from 'react';
import './App.css';
import Home from './Home/Home';
import Nav from './Nav/Nav';
import VoiceChat from './VoiceChat/VoiceChat';
import { Route, Routes } from 'react-router-dom';
import Telangana from './Telangana/Telangana';
import Charminar from './Telangana/Charminar';

function App() {
  


  return (
    
        <>
          <Nav />

          <Routes>
            <Route path='/' element={<Home /> } />
            <Route path='/voicechat' element={<VoiceChat /> } /> 
            <Route path='/telangana' element={<Telangana /> } />
            <Route path='/telangana/Charminar' element={<Charminar />} />     
          </Routes>
        </>
  );
}   

export default App;
