import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import  Express  from "./pages/Express";
import  Fastapi from "./pages/Fastapi";
import  Home from "./pages/Home"

export default class App extends Component {
  static propTypes = {
    prop: PropTypes
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route  element={<Home/>} path='/' ></Route>
            <Route  element={<Express />} path='/express' ></Route>
            <Route  element={<Fastapi/>} path='/fastapi' ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

