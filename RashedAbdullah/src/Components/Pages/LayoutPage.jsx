import React from 'react'
import Home from './Home';
import { Outlet } from 'react-router-dom';
import Footer from './../Footer/Footer';
import Header from './../Navbar/Navbar';

const LayoutPage = () => {
  return (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default LayoutPage;