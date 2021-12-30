import React from "react";

import Navbar from "./navbar";
import {BrowserRouter, Route, Routes} from 'react-router-dom' 
import Home from './home'
import Contact from './contact'
import About from './about'
function App(){

   
        return(
            
            <BrowserRouter>
            <div className="App">
            <Navbar />
            <Routes>
                <Route exact path='/home' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                </Routes>
                </div>
            </BrowserRouter>
           
          
        );

    }

export default App;