import React, { Component } from "react";
import { Col, Row, Card } from "react-bootstrap";
import { FaArrowTrendDown } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";
import { Paper, Typography } from "@mui/material";
import { styled  } from "styled-components";

import { LineChart } from "@mui/x-charts";
const Love = styled.div`

  
}
`



export default class Graphs extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Row className="mt-3 d-flex flex-nowrap">
        <Col className="rounded-4 m-2" 
        xxl={6}
        xl={6}
        lg={6}
        md={6}
        >
          <Card style={{}} >
            <Card.Body>
              <div className="d-flex align-items-center">
                <FaArrowTrendUp size={30} />
                <p className="fs-4 ms-3 mb-0">Revonue</p>
              </div>
              <Love><input 
                placeholder="25,4M"
                className=" border-0 rounded-3 w-100  fs-2 mt-3"
                style={{
                  
                  backgroundColor: "#fae1e1 ",
                }}/></Love>
              
              
            </Card.Body>
          </Card>
        </Col>
        <Col className="rounded-4 m-2"
        xxl={6}
        xl={6}
        lg={6}
        md={6}
        >
          <Card style={{}} className="me-2">
            <Card.Body>
              <div className="d-flex align-items-center">
                <FaArrowTrendUp size={30} />
                <p className="fs-4 ms-3 mb-0">AVG.Day</p>
              </div>
              <input
                placeholder="DAY's "
                className=" border-0 w-100 rounded-3  fs-2 mt-3"
                style={{
                  backgroundColor: "#fae1e1 ",
                }}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}
