import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Col, Row, Card, Badge } from 'react-bootstrap';
// import Report  from './credditC/Report.js';
import Graph from './credditC/Graph.js';
import Table from './credditC/AH.js';
import Cards from './credditC/cards.js';
import { useLocation } from "react-router-dom";
import Sidebar, {  } from "./MainC/Sidebar.js";

const Creddit = () => {
  const location = useLocation();
  const station = JSON.stringify(location.state);


    const ali = [
    { name: "Capacity", num: "88", dis: "some thi ghsba" },
    { name: "Willingness", num: "88", dis: "some thi ghsba" },
    { name: "Context", num: "88", dis: "some thi ghsba" },
    { name: "Stability", num: "88", dis: "some thi ghsba" },
  ];

  const company = location.state?.company;

  return (
    <div className='row pe-4 '
    style={{width:"98%"}}
    >
        <Sidebar active={"Client"} />
        <Col >
      <Row className='p-0'>
            <Cards />
      </Row>
      <Row className="p-0">
        <Col>
          <Graph />
          <Table />
        </Col>

        <Col xxl={4} xl={4} lg={4} md={4} sm={4} xsm={4}>
          <Row>
            <Row className="mt-4 border-0 shadow-sm rounded-4 p-4 love">
  <Col xs={12}>
    <p className="fs-3 pb-3">key indecration</p>
  </Col>

  {[
    { label: "Avg monthly", value: "125,000$" },
    { label: "AVG. Expenses", value: "85,900$" },
    { label: "Bank Balance", value: "22,000$" },
    { label: "Simah Score", value: "660" },
    { label: "External Legal Cases", value: "None" },
  ].map((item, i) => (
    <Col key={i} md={6} className="border-bottom mine d-flex justify-content-between align-items-center py-2">
      <p className="fs-4 mb-0">{item.label}</p>
      <p className="fs-5 mb-0">{item.value}</p>
    </Col>
  ))}

  <Col xs={12} className="border-bottom mine d-flex align-items-center justify-content-between py-2">
    <p className="fs-4 mb-0">On-time invoices</p>
    <div className="flex-grow-1 px-3">
      <ProgressBar variant="danger" now={84} />
    </div>
  </Col>

  <Col xs={12} className="border-bottom mine d-flex align-items-center justify-content-between py-2">
    <p className="fs-4 mb-0">Sector</p>
    <div className="flex-grow-1 px-3">
      <ProgressBar variant="danger" now={84} />
    </div>
    <Badge bg="warning" text="dark" className="fs-6 ms-2" pill>
      medium
    </Badge>
  </Col>
</Row>
          </Row>

          <Row>
           
          </Row>
        </Col>
      </Row></Col>
    </div>
  );
};

export default Creddit;