import React from 'react'
import Table from "./clientsC/Table"
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'; 
import { createRef, useState } from 'react';
import FFF from "./clientsC/FFF";
import Sidebar from "./MainC/Sidebar";
import Navbars from "./MainC/Navbar";
function Allclients() {
    const handleClose = () => {
  setnshow(false);
  setStep(1); // Reset back to step 1 for next time
};
var input = ""



    const mine=[{name:"report policy",label:"cros-client"},{name:"modify by",label:"Ordered By"},{name:"override type",label:"industry"},{name:"status",label:"select status"}]
    const [show,setnshow]=useState(false)
    const [F,set]=useState(false)
      const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const handleChanges = (e) => {
    const { name, value } = e.target;
  

    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = () => {
    console.log("Final Data:", JSON.stringify(formData, null, 2));
    handleClose();
  };
  

  return (
    <div className='row'>
        <Sidebar active={"Client"} />
        <Col>
        <div className="p-4 d-flex align-items-center mb-4 justify-content-between"><h1 className='mb-4'>
            Expectation Logs
        </h1>
        <DropdownButton id="dropdown-basic-button" title="other action" className="btn btn-primary">
<Dropdown.Item onClick={() => setnshow(true)}>Add New Client</Dropdown.Item>      <Dropdown.Item href="" onClick={() => set(true)}>config the report policy</Dropdown.Item>
      <Dropdown.Item href="">add override</Dropdown.Item>
    </DropdownButton>
        </div>
        
        
        <div className="container fluid love rounded-4 p-4">
        <div className='d-flex d-flex align-items-center mb-4 justify-content-between'>
        {mine.map((_)=>{
            return(
            <div className='d-flex flex-column '>
            <label htmlFor="">{_.name}</label>
            <Form.Select size="lg">
         <option>{_.label}</option>
            </Form.Select>
        </div>)
        })}
        <div>
        <Button>reset</Button></div>
        </div>
      <Table/>
      </div>
      <Modal show={show} onHide={handleClose} size="lg">
  <Modal.Header closeButton>
    <Modal.Title>Client Information - Step {step}</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    {step === 1 && (
      <Form>
        <Row className="mb-3">
          <Col><Form.Control name="companyName" placeholder="Company Name" onChange={handleChange} /></Col>
          <Col><Form.Control name="crNumber" placeholder="Unified Number (CR)" onChange={handleChange} /></Col>
        </Row>
        <Row className="mb-3">
          <Col><Form.Control name="city" placeholder="City / Region" onChange={handleChange} /></Col>
          <Col><Form.Control name="isicSector" placeholder="Sector (ISIC Classification)" onChange={handleChange} /></Col>
        </Row>
        <Row className="mb-3">
          <Col><Form.Control type="number" name="employees" placeholder="Number of Employees" onChange={handleChange} /></Col>
          <Col><Form.Control type="number" name="businessAge" placeholder="Business Age (Years)" onChange={handleChange} /></Col>
        </Row>
        <Row className="mb-3">
          <Col><Form.Control name="revenueExpenses" placeholder="Avg. Monthly Revenue and Expenses" onChange={handleChange} /></Col>
          <Col>
            <Form.Select name="openBanking" onChange={handleChange}>
              <option value="">Is Open Banking Available?</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </Form.Select>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Select name="hasERP" onChange={handleChange}>
              <option value="">Do You Use ERP/CRM System?</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </Form.Select>
          </Col>
        </Row>
      </Form>
    )}

    {step === 2 && formData.hasERP === "yes" && (
      <Form>
        <Row className="mb-3">
          <Col>
            <Form.Select name="erpSystem" onChange={handleChange}>
              <option value="">Choose ERP System</option>
              <option value="Zoho">Zoho</option>
              <option value="Odoo">Odoo</option>
              <option value="SAP">SAP</option>
              <option value="Salesforce">Salesforce</option>
            </Form.Select>
          </Col>
          <Col><Form.Control name="apiKey" placeholder="API Key" onChange={handleChanges} /></Col>
        </Row>
        <Row className="mb-3">
          <Col><Button>Test Connection</Button></Col>
          <Col><Form.Control type="file" accept=".csv, .xls, .xlsx" /></Col>
        </Row>
      </Form>
    )}

    {step === 2 && formData.hasERP === "no" && (
      <Form>
        <Form.Group className="mb-3"><Form.Control name="manualRevenue" placeholder="Monthly Revenue" onChange={handleChange} /></Form.Group>
        <Form.Group className="mb-3"><Form.Control name="invoiceVolume" placeholder="Invoice Volume" onChange={handleChange} /></Form.Group>
        <Form.Group className="mb-3"><Form.Control name="paymentRate" placeholder="Payment Timeliness (%)" onChange={handleChange} /></Form.Group>
        <Form.Group className="mb-3"><Form.Control name="delays" placeholder="Delays or Defaults" onChange={handleChange} /></Form.Group>
        <Form.Group className="mb-3"><Form.Control name="loans" placeholder="Current Liabilities / Loans" onChange={handleChange} /></Form.Group>
        <Form.Group className="mb-3"><Form.Control name="bankBalance" placeholder="Bank Cash Balance (Optional)" onChange={handleChanges} /></Form.Group>
      </Form>
    )}
  </Modal.Body>
  <Modal.Footer>
    {step > 1 && <Button variant="secondary" onClick={handleBack}>Back</Button>}
    {step < 2 && <Button onClick={handleNext}>Next</Button>}
    {step === 2 && <Button variant="success" onClick={handleSubmit} >Submit</Button>}
  </Modal.Footer>
</Modal>
<Modal size='xl' show={F} onHide={
        ()=>{
            set(false)
        }
    }>
    <Modal.Header closeButton >

    </Modal.Header>
    <FFF/></Modal>
</Col>
    </div>
  )
}

export default Allclients
