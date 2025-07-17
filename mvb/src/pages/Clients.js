import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Graphs from "./clientsC/Graphs";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import FinanceDoc from "./clientsC/FinanceDoc";
import Report from "./clientsC/Report";
import Pay from "./clientsC/payment";
import Naics from "./clientsC/NAICS";
import { Modal } from "react-bootstrap";
import Table from "./clientsC/Table";
import Sidebar from "./MainC/Sidebar";
import Navbars from "./MainC/Navbar";
class Sub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "#fcfafa",
      text: "#070303",
      primary: "#ab615f",
      secondary: "#ed8787",
      accent: "#b09696",
      show: false,
      showuser: false,
    };
  }
  handleClose = () => this.setState({
     show: false ,
     showuser: false 
  });
  handleShow = () => this.setState({ show: true,
    showuser:false
   });
  handleCloseuser = () => this.setState({  show: false ,showuser: false });
  handleShowuser = () => this.setState({ show: false , showuser: true });

  render() {
    return (
      <Row>
        <Sidebar active={"client"} />
      <div className="d-flex flex-column p-4" style={{ height: "100vh" }}>
        <Row>
          <Col className="d-flex justify-content-between d-flex align-content-center">
            <p className="fs-1">Basera</p>
            <DropdownButton
              align="end"
              title="Dropdown end"
              id="dropdown-menu-align-end"
            >
              <Dropdown.Item eventKey="1" onClick={this.handleShow}>
                New analystick
              </Dropdown.Item>
              <Dropdown.Item eventKey="2" onClick={this.handleShow}>
                Wathiq
              </Dropdown.Item>
              <Dropdown.Item eventKey="3" onClick={this.handleShow}>
                leen
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4" onClick={this.handleShowuser}>
                show users
              </Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>

        <Row className="flex-grow-1">
          <Col className="border-end border-top p-4">
            <Row>
              <p className="fs-3">Finance over view</p>
            </Row>
            <Row>
              <Col className="float-start">
                <span className="fs-4">Manual</span>
              </Col>
              <Col className="float-start">
                <a className="fs-4 text-decoration-none">Optional</a>
              </Col>
            </Row>
            <Graphs />
            <FinanceDoc />
          </Col>

          {/* هذا هو الـ Col اللي كان فيه الخطأ */}
          <Col className="border-start border-top p-4">
            <Row>
              <Col className="">
                <Row>
                  <p className="fs-3">Finance over view</p>
                </Row>
                <Row>
                  <Col className="float-start">
                    <span className="fs-4">Manual</span>
                  </Col>
                  <Col className="float-start">
                    <a className="fs-4 text-decoration-none">Optional</a>
                  </Col>
                </Row>
                <Pay></Pay>
                <Naics></Naics>
                <Row>
                  <Button className="mt-3">ERB & CRM</Button>
                </Row>
              </Col>
            </Row>
          </Col>
          <Modal
            show={this.state.show}
            onHide={this.handleClose}
            centered
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>something </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Report />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                close
              </Button>
            </Modal.Footer>
          </Modal>
          <Modal
            
            show={this.state.showuser}
            onHide={this.handleCloseuser}
            centered
            backdrop="static"
            keyboard={false}
            size="xl"
          >
            <Modal.Header closeButton>
              <Modal.Title>my users</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Table/>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleCloseuser}>
                close
              </Button>
            </Modal.Footer>
          </Modal>

        </Row>
      </div></Row>
    );
  }
}

export default Sub;
