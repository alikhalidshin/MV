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
import Form from "react-bootstrap/Form";
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
      showpop: false,
      lovely:"",
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
      <div className="d-flex flex-column p-4" style={{ height: "100vh" }}>
        <Row>
          <Col className="d-flex justify-content-between d-flex align-content-center">
            <p className="fs-1">User </p>
            <div className="flex-grow-1 d-flex justify-content-end align-items-center">
            <Button className="m-1" onClick={()=>this.setState({showpop:true , lovely:"openBanking"})}> open banking </Button>
            <Button className="m-1" onClick={()=>this.setState({showpop:true , lovely:"Wathiq"})}> wathiq</Button>
            <Button className="m-1" onClick={()=>this.setState({showpop:true , lovely:"simah"})}>simah</Button>
</div>
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
              <Col className="d-flesx justify-content-between ">
               
                <Naics></Naics>
                <Row>
                  <Button className="mt-3" onClick={this.props.onHHide}>Run</Button>
                </Row>
              </Col>
            </Row>
          </Col>
          
          <Modal show={this.state.showpop} onHide={()=>this.setState({showpop:false})}>
            <Modal.Header closeButton>
              <Modal.Title>{this.state.lovely}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Row className="mb-3">
                 { this.state.lovely === "openBanking" && (
                  <>
                   <Col>
                    <Form.Select name="erpSystem" >
                      <option value="">Choose Open Banking  System</option>
                      <option value="Zoho">Plaid</option>
                      <option value="Odoo">Tink</option>
                      <option value="SAP">True layer</option>
                      <option value="Salesforce">yodle</option>
                    </Form.Select>
                  </Col>
                  </>)}
                  <Col><Form.Control name="apiKey" placeholder="API Key" /></Col>
                </Row>
                <Row className="mb-3">
                  <Col><Button>Test Connection</Button></Col>
                  <Col><Form.Control type="file" accept=".csv, .xls, .xlsx" /></Col>
                </Row>
              </Form>
            </Modal.Body>
          </Modal>
          
           

        </Row>
      </div></Row>
    );
  }
}

export default Sub;
