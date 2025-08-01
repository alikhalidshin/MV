import PropTypes from 'prop-types'
import {
  Row,
  Button,
  Col,
  Container,
  Nav,
  InputGroup,
  Form,
  Offcanvas,
  ProgressBar,
  ListGroup,
  Badge,
  Stack,

  
  

} from "react-bootstrap";
import KPI from './dashboardC/KPI';

import Trend from "./dashboardC/Trend";
import React, { Component } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import SectorRIsk from './dashboardC/SectorRIsk';
import News from "./dashboardC/News"

import Navbar from './MainC/Navbar';
import Sidebar from './MainC/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css'; // أولاً
export default class DashBoard extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      
        <div  className='' >
        <Row style={{
          
   
          background: "hsl(246, 76%, 95%, 10%);",
  
            }} >
          <Sidebar active={"Dashboard"} />
          <Col
          
         xxl={10}
         xl={10}
         lg={10}
         md={10}
         sm={10}
          >
          <Navbar></Navbar>
           <Row>
              <KPI/>
           </Row>
           <Row>
            <SectorRIsk />

            <News />

           </Row>
           <Row>
            <Trend />

           </Row>
           </Col>
           </Row>
        </div>
        
     
    )
  }
}
