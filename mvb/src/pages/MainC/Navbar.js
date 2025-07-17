import React, { Component } from "react";
import { Row,Navbar,Container,Stack , Modal,Nav,Dropdown} from "react-bootstrap";
import { HiMiniBars3 } from "react-icons/hi2";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { IoSettingsSharp } from "react-icons/io5";
import  Settings from "./Settings";

export default class Navbr extends Component {
  constructor(props){
    super(props)
    this.state={
        show: false
    }
  }
  handleClose=()=>{
  this.setState({
    show:false
  })
  }
  handleshow=()=>{
  this.setState({
    show:true
  })
  }

  render() {
    return (
      <Row className="p-0">
        
        <Navbar className="bg-body-tertiary love rounded-4 ps-2 pe-2">
          <Container fluid>
            <Navbar.Brand href="#home" className="d-flex justify-content-between">
             {" "}
              <label htmlFor="">Basera</label>
              
            </Navbar.Brand>
            <Nav.Item>
              <a onClick={this.handleshow}><IoSettingsSharp/></a>
            </Nav.Item>
          </Container>
        </Navbar>
        <Modal size="xl" show={this.state.show} onHide={this.handleshow} >
          
          <Settings/>
        </Modal>
      </Row>
    )
  }
}
