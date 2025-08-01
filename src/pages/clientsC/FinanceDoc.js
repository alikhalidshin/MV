import React, { Component } from 'react'
import { Row ,Col} from 'react-bootstrap'
import { RiDownloadLine } from "react-icons/ri";
import { Button } from 'react-bootstrap';
import  Form from 'react-bootstrap/Form';
import { Modal } from 'react-bootstrap';
import styled from 'styled-components';
const Love = styled.div`
::placeholder {
  color: #3B3B3BFF !important; /* أو أي لون يناسبك */
  opacity: 1 !important;  /* بعض المتصفحات تقلل شفافية الـ placeholder */
}

`
export default class FinanceDoc extends Component {

    constructor(props)
  {
    super(props)
    this.state={
      backgroundColor:"#fcfafa",
      text:"#070303",
      primary:"#ab615f",
      secondary:"#ed8787",
      accent:"#b09696"

    }
  }
  render() {
    const handleChange = (e) => {
      console.log(e.target.value);
    }
    return (
      <Row className='d-flex '>
        <div>
            <p className="fs-4 ms-3">
Form            </p>

        </div>
        <div className='justify-content-center  rounded-4 '  >
          <Love>
               <Form>

                <Row className="mb-3">
                  <Col><Form.Control name="name" placeholder="company name" onChange={handleChange} /></Col>
                  <Col><Form.Control name="crNumber" placeholder="Unified Number " onChange={handleChange} /></Col>
                </Row>
                <Row className="mb-3">
                  <Col><Form.Control name="Bank name" placeholder="Bank" onChange={handleChange} /></Col>
                  <Col><Form.Control name="Acount Name" placeholder="Acount Name " onChange={handleChange} /></Col>
                </Row>
                <Row className="mb-3">
                  <Col><Form.Control name="UN" placeholder="Bank Acount Number " onChange={handleChange} /></Col>
                </Row>
             
            </Form>
            </Love>
        </div>
      </Row>
    )
  }
}
