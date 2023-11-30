import React from 'react'
import { HashRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './../Home';
import { Routes } from 'react-router-dom';

const Routs = () => {
  return (
    <div>
        <HashRouter>
            <Routes>
                <Route path='/about' element={<Home/>}/>
            </Routes>
        </HashRouter>
    </div>
  )
}

export default Routs;