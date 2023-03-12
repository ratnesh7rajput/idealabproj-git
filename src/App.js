
import './App.css';
import { useEffect, useState } from 'react';
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'

import Registration from './Registration';
import Navbar from './Navbar';
import Header from './Header';
import Createuser from './Createuser';


import Login from './Login';



function App() {
 
  return (
    <>
    <BrowserRouter>

    <Navbar/>
    
    <Routes>
      <Route path="/" element={<Header/>}/>
      
      <Route path='login' element={<Login/>}/>

      <Route path='signup' element={<Registration/>}/>
      <Route path='createuser' element={<Createuser/>}/>

    
      
    </Routes>
   
    
    
    

    </BrowserRouter>
   
   
   
   











    </>
  );
}

export default App;
