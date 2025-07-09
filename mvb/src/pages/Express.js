import React, { Component,createRef } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";

export default class App extends Component {
 constructor(prop){
  super(prop)
  this.divref = createRef()
 }

  componentDidMount() {
    axios.get('http://localhost:9000/')
      .then(response => {
        console.log(response)
      })

      .catch(error => console.error(error));
  }

  render() {
    return (
      <div ref = {this.divref}>
        check the console if there is a response or not, dumbass
      </div>
    );
  }
}