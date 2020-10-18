import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React from 'react'
import Routes from './Routes';

import { HashRouter } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';

import Logo from '../components/template/Logo'
import Home from '../components/home/Home'
import Nav from '../components/template/Nav'
import Footer from '../components/template/Footer'

export default props =>
    // <BrowserRouter>
    <HashRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </HashRouter>
    // </BrowserRouter>