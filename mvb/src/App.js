import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import  Express  from "./pages/Express";
import  Fastapi from "./pages/Fastapi";
import  Home from "./pages/Home"
import  Form from "./pages/Form"

import DashBoard from './pages/DashBoard';
import Sub from './pages/Clients';
import Creddit from './pages/Creddit';
// import Creddit from "./pages/Creddit"
import Clients from "./pages/Allclients"
import 'bootstrap/dist/css/bootstrap.min.css'; // أولاً
import './App.css'; // ثانياً – هذا يتقدم على Bootstrap
import How from './pages/Howitworks';
import About from './pages/About';
import Login from './pages/login';
export default class App extends Component {
  static propTypes = {
    prop: PropTypes
  }
  render() {
    return (
      <div>
        <BrowserRouter>
                <Routes>

                      <Route  element={<Home />} path='/' ></Route>
                      <Route  element={<Login />} path='/login' ></Route>
                      <Route  element={<About />} path='/About' ></Route>
                      <Route  element={<How />} path='/How' ></Route>
                      <Route  element={<Form />} path='/f' ></Route>
                      <Route  element={<Creddit/>} path='/Creddit' ></Route>
                      <Route element={<Clients />} path='/Client'></Route>
                      <Route element={<DashBoard/>} path="/Dashboard"/>                                    </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

